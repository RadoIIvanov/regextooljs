const matchFunction = function(
  regex,
  str,
  indexCounterR = 0,
  indexCounterS = 0
) {
  //// bottoms
  if (indexCounterR === regex.length) {
    return true;
  }
  if (indexCounterS === str.length) {
    return false;
  }

  let currentCharR = regex.charAt(indexCounterR);

  if (
    checkIfRegexCharIsAMetaCharacterThatImposesAConditionOnSurroundingEnvironment(
      currentCharR,
      regex
    )
  ) {
    if (checkIfConditionsIsSatisfied(currentCharR, str, indexCounterS)) {
      matchFunction(regex, str, indexCounterR + 1, indexCounterS);
    } else {
      matchFunction(regex, str, undefined, indexCounterS + 1);
    }
  } else if (checkIfRegexCharIsAGroup(currentCharR, regex)) {
    if (
      checkIfGroupIsMatchedAccordingToItsSpecificRules(
        group,
        groupType,
        str,
        indexCounterS
      )
    ) {
      matchFunction(); //// you have to increase the indexes appropriately, depending on the length of the group and its components
    }
  }
};
///////////////////////////////////
/* General Matching Process
When trying to match a regex expression (r) against ANY part of string (s), the engine:
repeats the following recursive algorithm one character at a time until it reaches the end of r and/or s.
It keeps track of the progress through separate indexCounters for r and s, both starting at 0 (i.e. not necessarily, the index for s may not be equal to (r)lastIndex).
1. Two bottoms
1. If indexCounterR === r.length => return match success.
2. If indexCounterS === s.length => return match failure.
2. If the currentCharR is a metacharacter that imposes a condition on the surrounding environment of currentCharS, checks if the condition is satisfied
1. If it is, it increases ONLY indexCounterR and recurses.
2. If it is not, it resets indexCounterR to 0, increase indexCounterS by 1, and recurses.
3. If the currentCharR is a group, check if it is matched according to its specific rules and move indexCounterR and indexCounterS accordingly
4. If it is neither, it takes currentCharR and tries to match it to currentCharS
If they match, it increases both indexes by 1 and recurse.
If they don't match, it resets indexCounterR to 0, increase indexCounterS by 1, and recurse.

Important thing to note:
Once the full regex is matched, it stops the algorithm and returns the earliest/leftmost match.(i.e. This can be changed with the g flag). */
/////////////////////////////
