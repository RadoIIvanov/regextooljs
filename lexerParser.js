/* We need some sort of tokenizer, lexer, parser that will do preliminary analysis on the regex and highlights important things - groups, quantifiers, metachars etc. */
//// start with the main info (i.e. escapes and other metachar functionality can be added later)

let someString = 'abc';

function anotateRegex (regex) {

    let objWithInfo = {};

    for (let i = 0; i < regex.length; ++i) {

        if 

    }

    /* info about: 
    1. metacharacters that impose conditions on surrounding environment, 
    2. metacharacters that form groups and which those groups are (treat them as a single character, type group instead of literal) )
    3. quantifiers and which characters they apply to */
}

//// relations between metacharacters, i.e. lookarounds impose conditions but are also groups (need to update file)

//// theoretically, you can have a significant amount of nested groups, to deal with this keep in mind that the last one that is openned needs to be 
//// the first one that is closed