/// @notice is machine code
/// @params p, q
/// @return p * q
let multiplication = [
    901,
    716,
    399,
    397,
    901,
    716,
    398,
    598,
    218,
    398,
    715,
    599,
    197,
    399,
    607,
    599,
    902,
    000,
    001
];

/// @notice should pass thru Translate
/// @params p, q
/// @return floor(p/q), p % q
let r_division = [
    "sto 97",
    "in",
    "brz 21",
    "sto 99",
    "in",
    "brz 21",
    "sto 98",
    "lda 99",
    "sub 98",
    "sto 99",
    "lda 97",
    "dat 123",
    "sto 97",
    "lda 99",
    "brz 16",
    "brp 8",
    "lda 97",
    "sub 23",
    "out",
    "lda 99",
    "add 98",
    "out",
    "hlt",
    "dat 1",
];

/// @notice should pass thru TranslateAlias
/// @params -
/// @return quine
let quine = [
    ["LOAD", "LDA", 0],
    ["", "OUT", ""],
    ["", "SUB", "ONE"],
    ["", "BRZ", "ONE"],
    ["", "LDA", "LOAD"],
    ["", "ADD", "ONE"],
    ["", "STA", "LOAD"],
    ["", "BRA", "LOAD"],
    ["ONE", "DAT", 1],
];