export function isAnagram(string, anagram) {
  let result = false;
  let arrayStr = strToArray(string);
  let arrayAnagram = strToArray(anagram);
  const objStr = fillObj(arrayStr);
  const objAnagram = fillObj(arrayAnagram);
  result = compareObjects(objStr, objAnagram);

  //TODO
  //takes two parameters: string  and anagram
  //returns true if parameter anagram contains the same letters as
  //the given string with the same counters of occurrences
  //otherwise false
  return result;
}

function strToArray(str) {
  const res = str.split("").sort();
  return res;
}

function compareObjects(obj1, obj2) {
  return JSON.stringify(obj1) === JSON.stringify(obj2);
}

function fillObj(array) {
  return array.reduce(
    (resObj, str) => ((resObj[str] = (resObj[str] || 0) + 1), resObj),
    {}
  );
}
