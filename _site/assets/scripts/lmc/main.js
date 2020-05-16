// Settings
const Settings = {
    // ture => Throws error if ADD or SUB overflows
    // false => Loops back to 0 with % (non-standard)
    ErrOverflow: true,

    // Size limit of each Memory unit (in digits)
    // @warning: changing this might cause Memory loss, if data gets used as instruction
    // Standard: 3
    MemorySize: 3,
    // Memory Length limit
    // Standard: 100 (00-99)
    MemoryLength: 100,
    // @dev Validates Memory relationship.
    // Tail of mailboxes refer to memory addresses, therefore this relationship must hold
    MemoryValidate: () => {
        if (10 ** Settings.MemorySize != 10 * Settings.MemoryLength)
            throw ("Settings error. Please check MemorySize and MemoryLength");
    }
};

// Instructions and data are saved in Memory
let Memory = [];
// Working bench
let Accumulator = 0;
// Next instruction address
let Counter = 0;
// Array of input values. Read left to right
let Inputs = [];
// Array of output values. Output order left to right.
let Outputs = [];
// Halt the core Loop
let Halt = true;


// Starting point
// @param optional Memory
function Startup() {
    // Cleanup and variable prepare
    FillupMemory();
    Accumulator = 0;
    Counter = 0;
    Outputs = [];
    Halt = false;
    Settings.MemoryValidate();
    // Start Main Loop
    _loop();
}

// Core loop
function _loop() {
    // Counter is next mailbox address
    // Mailbox address contains next instruction
    let instruction = Memory[Counter].toString();
    // Opcode: operation to perform
    let opcode = Number(instruction.substring(0, 1));
    // Address: where to find the data
    let address = Number(instruction.substring(1));
    // Prepare next instruction
    _count();
    // Executes for IN / OUT
    if (opcode == 9) Instructions[instruction]();
    // Executes for the rest
    else Instructions[opcode](address);
    // If program hasn't stopped, performs next loop
    if (!Halt) _loop();
    // On halt, logs output
    else DisplayOutput();
}


// Utility functions
function _log(...a) {
    console.log(arguments);
}

// Empry Memory
function CleanMemory() {
    Memory = new Array(100).fill(0);
}

// Fills unused Memory with 0
function FillupMemory() {
    if (Memory.length > Settings.MemoryLength)
        Settings.MemoryLength = Memory.length;

    for (let i = 0; i < Settings.MemoryLength; i++)
        if (!Memory[i])
            Memory[i] = 0;
}

function _count() {
    Counter++;
    if (Counter > Memory.length)
        // Will not find memory in next loop
        _err("Counter overflow");
}

function _err(...a) {
    // Halts core loop
    Halt = true;
    // Outputs the result to ui
    _setResult(arguments[0]);
    // Shows the current Memory to ui
    _setProgram(Memory);
    // console.log
    _log(arguments);
    // Throws to console
    throw (arguments[0]);
}