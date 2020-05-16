// Variables
const TranslateInstructions = {
    ADD: 1,
    SUB: 2,
    STO: 3,
    STA: 3,
    LDA: 5,
    BR: 6,
    BRA: 6,
    BRZ: 7,
    BRP: 8,
    IN: 901,
    OUT: 902,
    HLT: 0,
    COB: 0,
    DAT: 0
};

// Checks what translation is needed by using first item in the object
function Translate(Memory) {
    // Don't translate
    if (Number(Memory[0]) == Memory[0])
        return Memory;
    // Index based translation
    else if (typeof Memory[0] == "string")
        return _translateIndex(Memory);
    // Alias based translation
    else if (typeof Memory[0] == "object")
        return _translateAlias(Memory);
    // Default
    else
        throw ("Wrong Memory type");
}

// Translates instructions in letters to numeric source code
function _translateIndex(instructions) {
    let Memory = [];
    instructions = instructions.map((val) => val.split(" "));

    for (i in instructions) {
        // Current Instruction
        let c_instruction = instructions[i];
        let opcode = c_instruction[0].toUpperCase();
        let data = c_instruction[1];
        // Corrects data length
        data = data && data.length == 1 ? "0" + data : data;
        let t_instruction = TranslateInstructions[opcode];

        // Validations
        if (typeof opcode != "string") throw ("Only translate from string values");
        if (t_instruction === undefined) throw ("Instruction not known");

        // Assign and push into Memory
        c_instruction = data == undefined ? t_instruction : t_instruction + data;
        Memory.push(Number(c_instruction));
    }

    return Memory;
}

// Translates Aliased instructions to source code
function _translateAlias(instructions) {
    let preMemory = [];
    let Memory = [];
    let alias = {};

    // Generates prememory and alias array
    for (i in instructions) {
        let c_instruction = instructions[i];

        // Alias array
        let a = c_instruction[0].toUpperCase();
        if (c_instruction[0]) alias[a] = i;
        // Corrects alias length
        alias[a] = alias[a] && alias[a].length == 1 ? "0" + alias[a] : alias[a];

        // opcode
        let opcode = c_instruction[1].toUpperCase();
        if (typeof opcode != "string") throw ("Only translate from string values");
        let t_instruction = TranslateInstructions[opcode];
        if (t_instruction === undefined) throw ("Unknown instruction");

        // Data
        let data = c_instruction[2] ? c_instruction[2] : "";
        // Correct data length
        data = typeof data == "number" && data.toString().length == 1 ? "0" + data : data;

        // Assign and push into prememory
        if (data && isNaN(Number(data))) c_instruction = [t_instruction, data.toUpperCase()];
        else c_instruction = t_instruction.toString() + data.toString();
        preMemory.push(c_instruction);
    }

    // Populates Memory with prememory and alias
    for (p in preMemory) {
        let instruction = preMemory[p];
        if (typeof instruction == "string")
            instruction = Number(instruction);
        else if (typeof instruction == "object")
            instruction = Number(instruction[0] + alias[instruction[1]]);
        Memory.push(instruction);
    }

    return Memory;
}