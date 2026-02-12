/**
 * String utility functions
 */

/**
 * Capitalize first letter of string
 */
export const capitalize = (str: string): string =>
  str.charAt(0).toUpperCase() + str.slice(1);

/**
 * Convert string to kebab-case
 */
export const toKebabCase = (str: string): string =>
  str.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, '$1-$2').toLowerCase();

/**
 * Convert string to camelCase
 */
export const toCamelCase = (str: string): string =>
  str
    .replace(/(?:^\w|[A-Z]|\b\w)/g, (word, index) =>
      index === 0 ? word.toLowerCase() : word.toUpperCase()
    )
    .replace(/\s+/g, '');

/**
 * Truncate string with ellipsis
 */
export const truncate = (str: string, length: number): string =>
  str.length > length ? `${str.substring(0, length)}...` : str;
