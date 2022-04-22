/**
 * Utility to wait for a specif amount before continuing
 *
 * @param {number} time Time to wait
 * @returns {Promise<void>}
 */
function sleep(time: number): Promise<void> {
  return new Promise(res => setTimeout(res, time));
}

export default sleep;
