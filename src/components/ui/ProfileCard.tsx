'use client';

import React, { useEffect, useRef, useCallback, useMemo } from 'react';
import Image from 'next/image';
import type { ProfileCardProps } from '@/lib/types';
import { clamp, round, easeInOutCubic } from '@/lib/utils/math';
import {
  PROFILE_CARD_ANIMATION_CONFIG,
  PROFILE_CARD_GRADIENTS,
  PROFILE_CARD_DEFAULTS,
  adjustPointerValue,
  getPointerDistanceFromCenter,
} from '@/lib/utils/profile-card';
import styles from './ProfileCard.module.css';

/**
 * ProfileCard Component
 * Interactive card with pointer-tracking tilt and gradient effects
 */
const ProfileCardComponent: React.FC<ProfileCardProps> = ({
  avatarUrl = '<Placeholder for avatar URL>',
  iconUrl,
  grainUrl,
  behindGradient,
  innerGradient,
  showBehindGradient = true,
  className = '',
  enableTilt = true,
  miniAvatarUrl,
  name = PROFILE_CARD_DEFAULTS.NAME,
  title = PROFILE_CARD_DEFAULTS.TITLE,
  handle = PROFILE_CARD_DEFAULTS.HANDLE,
  status = PROFILE_CARD_DEFAULTS.STATUS,
  contactText = PROFILE_CARD_DEFAULTS.CONTACT_TEXT,
  showUserInfo = true,
  onContactClick,
}) => {
  const wrapRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const rafIdRef = useRef<number | null>(null);

  /**
   * Update card CSS variables based on pointer position
   */
  const updateCardTransform = useCallback(
    (offsetX: number, offsetY: number) => {
      const card = cardRef.current;
      const wrap = wrapRef.current;
      if (!card || !wrap) return;

      const width = card.clientWidth;
      const height = card.clientHeight;

      const percentX = clamp((100 / width) * offsetX);
      const percentY = clamp((100 / height) * offsetY);

      const centerX = percentX - 50;
      const centerY = percentY - 50;

      const properties = {
        '--pointer-x': `${percentX}%`,
        '--pointer-y': `${percentY}%`,
        '--background-x': `${adjustPointerValue(percentX, 0, 100, 35, 65)}%`,
        '--background-y': `${adjustPointerValue(percentY, 0, 100, 35, 65)}%`,
        '--pointer-from-center': `${clamp(
          getPointerDistanceFromCenter(percentX, percentY),
          0,
          1
        )}`,
        '--pointer-from-top': `${percentY / 100}`,
        '--pointer-from-left': `${percentX / 100}`,
        '--rotate-x': `${round(-(centerX / 5))}deg`,
        '--rotate-y': `${round(centerY / 4)}deg`,
      };

      Object.entries(properties).forEach(([property, value]) => {
        wrap.style.setProperty(property, value as string);
      });
    },
    []
  );

  /**
   * Create smooth animation from current to target position
   */
  const createSmoothAnimation = useCallback(
    (duration: number, startX: number, startY: number) => {
      const card = cardRef.current;
      const wrap = wrapRef.current;
      if (!card || !wrap) return;

      const startTime = performance.now();
      const targetX = wrap.clientWidth / 2;
      const targetY = wrap.clientHeight / 2;

      const animationLoop = (currentTime: number) => {
        const elapsed = currentTime - startTime;
        const progress = clamp(elapsed / duration);
        const easedProgress = easeInOutCubic(progress);

        const currentX = adjustPointerValue(
          easedProgress,
          0,
          1,
          startX,
          targetX
        );
        const currentY = adjustPointerValue(
          easedProgress,
          0,
          1,
          startY,
          targetY
        );

        updateCardTransform(currentX, currentY);

        if (progress < 1) {
          rafIdRef.current = requestAnimationFrame(animationLoop);
        }
      };

      rafIdRef.current = requestAnimationFrame(animationLoop);
    },
    [updateCardTransform]
  );

  /**
   * Handle pointer events
   */
  const handlePointerMove = useCallback(
    (event: PointerEvent) => {
      const card = cardRef.current;
      if (!card) return;

      const rect = card.getBoundingClientRect();
      updateCardTransform(event.clientX - rect.left, event.clientY - rect.top);
    },
    [updateCardTransform]
  );

  const handlePointerEnter = useCallback(() => {
    const wrap = wrapRef.current;
    const card = cardRef.current;

    if (rafIdRef.current) {
      cancelAnimationFrame(rafIdRef.current);
    }
    if (wrap) wrap.classList.add('active');
    if (card) card.classList.add('active');
  }, []);

  const handlePointerLeave = useCallback(
    (event: PointerEvent) => {
      const wrap = wrapRef.current;
      const card = cardRef.current;

      if (wrap) {
        createSmoothAnimation(
          PROFILE_CARD_ANIMATION_CONFIG.SMOOTH_DURATION,
          event.offsetX,
          event.offsetY
        );
        wrap.classList.remove('active');
      }
      if (card) card.classList.remove('active');
    },
    [createSmoothAnimation]
  );

  /**
   * Setup event listeners and initial animation
   */
  useEffect(() => {
    if (!enableTilt) return;

    const card = cardRef.current;
    const wrap = wrapRef.current;
    if (!card || !wrap) return;

    const pointerMoveHandler = handlePointerMove as EventListener;
    const pointerEnterHandler = handlePointerEnter as EventListener;
    const pointerLeaveHandler = handlePointerLeave as EventListener;

    card.addEventListener('pointermove', pointerMoveHandler);
    card.addEventListener('pointerenter', pointerEnterHandler);
    card.addEventListener('pointerleave', pointerLeaveHandler);

    // Initial animation
    const initialX =
      wrap.clientWidth - PROFILE_CARD_ANIMATION_CONFIG.INITIAL_X_OFFSET;
    const initialY = PROFILE_CARD_ANIMATION_CONFIG.INITIAL_Y_OFFSET;

    updateCardTransform(initialX, initialY);
    createSmoothAnimation(
      PROFILE_CARD_ANIMATION_CONFIG.INITIAL_DURATION,
      initialX,
      initialY
    );

    return () => {
      card.removeEventListener('pointermove', pointerMoveHandler);
      card.removeEventListener('pointerenter', pointerEnterHandler);
      card.removeEventListener('pointerleave', pointerLeaveHandler);
      if (rafIdRef.current) {
        cancelAnimationFrame(rafIdRef.current);
      }
    };
  }, [
    enableTilt,
    updateCardTransform,
    createSmoothAnimation,
    handlePointerMove,
    handlePointerEnter,
    handlePointerLeave,
  ]);

  /**
   * Memoized card styles
   */
  const cardStyle = useMemo(
    () =>
      ({
        '--icon': iconUrl ? `url(${iconUrl})` : 'none',
        '--grain': grainUrl ? `url(${grainUrl})` : 'none',
        '--behind-gradient': showBehindGradient
          ? (behindGradient ?? PROFILE_CARD_GRADIENTS.DEFAULT_BEHIND)
          : 'none',
        '--inner-gradient':
          innerGradient ?? PROFILE_CARD_GRADIENTS.DEFAULT_INNER,
      }) as React.CSSProperties,
    [iconUrl, grainUrl, showBehindGradient, behindGradient, innerGradient]
  );

  const handleContactClick = useCallback(() => {
    onContactClick?.();
  }, [onContactClick]);

  return (
    <div
      ref={wrapRef}
      className={`${styles['pc-card-wrapper']} ${className}`.trim()}
      style={cardStyle}
    >
      <section ref={cardRef} className={styles['pc-card']}>
        <div className={styles['pc-inside']}>
          <div className={styles['pc-shine']} />
          <div className={styles['pc-glare']} />

          {/* Avatar Section */}
          <div
            className={`${styles['pc-content']} ${styles['pc-avatar-content']}`}
          >
            <Image
              className={styles.avatar}
              src={avatarUrl}
              alt={`${name} avatar`}
              width={300}
              height={300}
              loading="lazy"
              priority={false}
            />

            {/* User Info Section */}
            {showUserInfo && (
              <div className={styles['pc-user-info']}>
                <div className={styles['pc-user-details']}>
                  <div className={styles['pc-mini-avatar']}>
                    <Image
                      src={miniAvatarUrl || avatarUrl}
                      alt={`${name} mini avatar`}
                      loading="lazy"
                      fill
                    />
                  </div>
                  <div className={styles['pc-user-text']}>
                    <div className={styles['pc-handle']}>@{handle}</div>
                    <div className={styles['pc-status']}>{status}</div>
                  </div>
                </div>
                <button
                  className={styles['pc-contact-btn']}
                  onClick={handleContactClick}
                  type="button"
                  aria-label={`Contact ${name}`}
                >
                  {contactText}
                </button>
              </div>
            )}
          </div>

          {/* Details Section */}
          <div className={styles['pc-content']}>
            <div className={styles['pc-details']}>
              <h3>{name}</h3>
              <p>{title}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const ProfileCard = React.memo(ProfileCardComponent);
ProfileCard.displayName = 'ProfileCard';

export default ProfileCard;
