/**
 * Utility to uppercase the first letter of a string.
 * @param input {string}
 * @returns
 */
function toUpperCaseFirst(input: string): string {
  return input.charAt(0).toUpperCase() + input.slice(1);
}

export default toUpperCaseFirst;
