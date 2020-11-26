/**
 * @param {HTMLElement} element
 * @param {string} className
 * @return {bool}
 */
export function isClassAffected(element, className) {
  if (element.classList.contains(className)) return true;
  if (element.closest(`.${className}`)) return true;
  return false;
}
