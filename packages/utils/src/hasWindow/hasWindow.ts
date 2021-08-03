/**
 * Utility to verify if the window object exists
 * @returns {boolean}
 */
function hasWindow(): boolean {
  return typeof window !== 'undefined';
}

export default hasWindow;
