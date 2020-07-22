/* go through a string and find groups of characters surrounded by () or [] or | */
let testOne = "(ab)eo(bc)"; /// => group 1 + e + o + group 2 (i.e. so you need to know the sequence)
let testTwo = "([dc]t(ab))";
let testThree = "abc|dero|wepw"; /// => group 1 or group 2 or group 3
let testFour = "[we[e[ab]d]qp]";

const findGroups = function(str, type) {
  let captureGroupsAndLookaroundsBrackets = [];
  let characterClassBrackets = [];
  let exactQuantifierBrackets = [];
  let objWithAnnotations = {
    bracesGroups: { captureGroups: [], lookBehinds: [], lookAheads: [] },
    squareBracketsGroups: [],
    curlyBracketsGroups: []
  };

  let arrOfAnnotations = [];

  for (let i = 0; i < str.length; ++i) {
    if (str.charAt(i) === "(") {
      captureGroupsAndLookaroundsBrackets.push(i);
    } else if (str.charAt(i) === "[") {
      characterClassBrackets.push(i);
    } else if (str.charAt(i) === "{") {
      exactQuantifierBrackets.push(i);
    } else if (str.charAt(i) === ")") {
    }
  }
};

const findClosingOfGroup = function(
  str,
  indexToStartTheSearchFrom,
  typeOfBracket,
  arrOfOpenings = [],
  arrOfClosings = []
) {
  for (let i = indexToStartTheSearchFrom; i < str.length + 1; ++i) {
    if (arrOfClosings.length > arrOfOpenings.length) {
      return arrOfClosings[arrOfClosings.length - 1];
    }
    if (str.charAt(i) === typeOfBracket) {
      arrOfOpenings.push(i);
    }
    if (
      str.charCodeAt(i) === typeOfBracket.charCodeAt(0) + 1 ||
      str.charCodeAt(i) === typeOfBracket.charCodeAt(0) + 2
    ) {
      arrOfClosings.push(i);
    }
  }
};

const findGroup = function(str, arrOfData) {
  for (let i = 0; i < str.length; ++i) {
    //// push literals (i.e. only a subset)
    if (str.charCodeAt(i) >= 97 && str.charCodeAt(i) <= 122) {
      arrOfData.push(str.charAt(i));
    }

    if (str.charAt(i) === "(" || str.charAt(i) === "[") {
      let endingIndexOfGroup = findClosingOfGroup(str, i + 1, str.charAt(i));
      arrOfData.push({
        groupType: str.charAt(i) === "(" ? "capture group" : "character class",
        str: str.substring(i + 1, endingIndexOfGroup),
        contents: findGroup(str.substring(i + 1, endingIndexOfGroup), [])
      });
    }
  }

  return arrOfData;
};

const findGroupTwo = function(str, arrOfData, index) {
  if (index === str.length) {
    return arrOfData;
  }

  let currentChar = str.charAt(index);
  let subgroupLength;

  if (currentChar.charCodeAt(0) >= 97 && str.charCodeAt(0) <= 122) {
    arrOfData.push(currentChar);
  } else if (currentChar === "(" || currentChar === "[") {
    let endingIndexOfGroup = findClosingOfGroup(str, index + 1, currentChar);
    let subgroup = str.substring(index + 1, endingIndexOfGroup);
    subgroupLength = subgroup.length;
    arrOfData.push({
      groupType: currentChar === "(" ? "capture group" : "character class",
      str: subgroup,
      contents: findGroupTwo(subgroup, [], 0)
    });
  }

  if (subgroupLength) {
    findGroupTwo(str, arrOfData, index + 1 + subgroupLength + 1);
  } else {
    findGroupTwo(str, arrOfData, index + 1);
  }
};

console.log(findGroupTwo(testFour, [], 0));
