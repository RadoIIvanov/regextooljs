///// define a class that will construct the regex objects
///// think about special characters and escapes later
class RegexObject {
  constructor(string) {
    this.regexPattern = string;

    /* lastIndex property of the regular expression, determines the starting index in the string from which to start the matching process, 
    if the regex that you are matching does not include (g) or (y) flag, then this lastIndex property always remains 0. However, if they are present,
    each call of test() and/or exec() change the lastIndex as follows (i.e. if no matches => reset to 0, if there is a match => ending index of previous match + 1).
    I.e. In this way you can while loop until exec() returns null and get all the matches 
    Keep in mind that since it is a property of the regex, the last index property is NOT automatically reset if you match the regex against a different string 
    (i.e. successive matches) */
  }

  checkIfRegexPatternIsFoundInStr(someString) {
    /// unlike exec, it simply returns true or false instead of obj vs null (useful simple testing without extracting information)
  }

  checkIfRegexPatternIsFoundInStrAndReturnTheMatchDetails(someString) {
    /* return an array with the full match from the string on the first index, followed by substring matches for the individual capture groups
      move along the last index if (g) or (y) flag, if there isn't a match, lastIndex becomes null and the method returns null instead of array */
  }

  /// some getter for length
}

/* 
Flags are specific to the regex, not the string
(y) flag constrains the starting position in the str from the lastIndex property of the regex, it won't search further (improves speed) if the beginning doesn't match 
, in this way it anchors the subsequent match/matches to the end of the previous ones, usually (y) is used for parsers
where you need to find the meaning of everything in succession, not just extract some info from the string... (y) is similar to the ^ anchor, in the ^ case however,
matches must start always at index 0

(u) flag enables surrogate pairs (i.e. when a character consists of 2 code units or 2 sequences of 16 bits)

*/

/* string methods => MATCH(without (g) works like exec(), with (g) returns all matches at once without the need to loop explicitly,
lastIndex behaves like exec()), REPLACE(without (g) replaces only the first match, (gy) anchors replaces all matches but each match is anchored to the previous one, 
SEARCH(same as checking if the pattern is found but instead of true/false 
it returns the index or -1,(g) is fully ignored (y) anchors the regex to index 0, search() ignores/doesn't modify lastIndex in any of the cases, SPLIT */
