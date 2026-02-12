/**
 * DOM utility functions
 */

/**
 * Check if element is in viewport
 */
export const isInViewport = (element: HTMLElement | null): boolean => {
  if (!element) return false;
  const rect = element.getBoundingClientRect();
  return (
    rect.top < window.innerHeight &&
    rect.bottom > 0 &&
    rect.left < window.innerWidth &&
    rect.right > 0
  );
};

/**
 * Get scroll progress (0 to 1)
 */
export const getScrollProgress = (): number => {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight;
  const winHeight = window.innerHeight;
  return scrollTop / (docHeight - winHeight);
};

/**
 * Smooth scroll to element
 */
export const smoothScrollTo = (
  element: HTMLElement | null,
  offset: number = 0,
  duration: number = 1000
): void => {
  if (!element) return;

  const target = element.offsetTop - offset;
  const start = window.scrollY;
  const distance = target - start;
  let startTime: number | null = null;

  const ease = (t: number): number => {
    return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
  };

  const scroll = (currentTime: number): void => {
    if (startTime === null) startTime = currentTime;
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    window.scrollTo(0, start + distance * ease(progress));

    if (progress < 1) {
      requestAnimationFrame(scroll);
    }
  };

  requestAnimationFrame(scroll);
};
