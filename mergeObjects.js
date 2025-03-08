export function mergeObjects(firstObj, secondObj, isFirstPref) {
  return Object.assign(
    {},
    firstObj,
    ...Object.getOwnPropertyNames(secondObj).map((key) => ({
      [key]:
        key in firstObj
          ? isFirstPref
            ? firstObj[key]
            : secondObj[key]
          : secondObj[key],
    }))
  );
}
