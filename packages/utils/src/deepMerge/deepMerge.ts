import isBareObject from '../isBareObject';

export interface BareObject {
  [key: string]: unknown | BareObject;
}

function deepMergeObjects(target: BareObject | unknown, source: BareObject | unknown): BareObject {
  if (![target, source].every(isBareObject))
    throw new TypeError('#deepMerge cannot merge non object items.');

  Object.keys(source).forEach(key => {
    const value = source[key];

    if (isBareObject(value)) {
      if (!isBareObject(target[key])) target[key] = value;
      else target[key] = deepMerge(target[key], value);
    } else {
      target[key] = value;
    }
  });

  return Object.assign({}, target);
}

/**
 * Deep deepMerge objects at nested levels.
 * @param ...sources
 * @returns {BareObject}
 */
function deepMerge(...sources: BareObject[]): BareObject {
  return sources.reduce(deepMergeObjects, {});
}

export default deepMerge;
