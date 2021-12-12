export function requiredArgument(arg: string) {
  throw new TypeError(`The "${arg}" argument is required.`);
}
