/**
 * Utility to lowercase the first letter of a string.
 * @param input {string}
 * @returns
 */
function toLowerCaseFirst(input: string): string {
  return input.charAt(0).toLowerCase() + input.slice(1);
}

export default toLowerCaseFirst;
