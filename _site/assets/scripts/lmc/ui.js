$(document).ready(function () {
    // Populates index field with line numbers
    let _populateIndex = function () {
        let index = [];
        for (let i = 0; i < 100; i++)
            index.push(i);
        document.getElementById("index").value = index.join("\n");
    };

    _populateIndex();
});

// Show More options
let OnShowMore = function () {
    document.getElementById("more").classList.toggle("hidden");
};

// Loads examples
let OnLoadExample = function (name) {
    _memory = eval(name);
    _setProgram(_memory);
};

let OnLoadExampleIndex = function (name, isAlias) {
    let _memory = eval(name);
    _setIndexCode(_memory, isAlias);
};

// Fills up Machine-based program with 0's
let OnFillupMemory = function () {
    Memory = _getProgram();
    FillupMemory();
    _setProgram(Memory);
};

// Translates Index-based to Machine-based
let OnTranslateMemory = function () {
    let program;
    try {
        if (_isIndexMode())
            program = _translateIndex(_getIndexCode());
        else
            program = _translateAlias(_getAliasCode());
    } catch (e) {
        console.log(e);
        _setResult("Error in translation. Check assembly version.");
        return;
    }

    _setProgram(program);
};

// Startup program
let OnStartup = function () {
    _resetResult();

    if (_getProgram().length > 1) {
        Memory = _getProgram();
        _setResult("Using Machine-based code");
    } else if (_getIndexCode().length > 1) {
        // Memory = _translateIndex(_getIndexCode());
        return _setResult("Translate your program before executing.");
    } else {
        return _setResult("No program set.");
    }

    _setOutputs([]);
    Inputs = _getInputs();

    try {
        Startup();
    } catch (e) {
        _setResult(e);
    }
};

// Clears memory
let OnClearMemory = function () {
    _setProgram([]);
    _setIndexCode([]);
    CleanMemory();
};

// Displays output - called from `core loop`
let DisplayOutput = function () {
    _setOutputs(Outputs);
    _setProgram(Memory);
};

/// Local Functions
// Machine Code
let _getProgram = function () {
    return document.getElementById("machine_code").value.split("\n")
        .map(x => isNaN(Number(x)) ? 0 : Number(x));
};

let _setProgram = function (Memory) {
    document.getElementById("machine_code").value = Memory.join("\n");
};

// Index Based Code
let _getIndexCode = function () {
    return document.getElementById("index_code").value.split("\n");
};

let _getAliasCode = function () {
    return max = document.getElementById("index_code").value.split("\n").map(x => x.split(" "));
};

let _isIndexMode = function () {
    return document.getElementById("index_code_radio").checked;
};

let _setIndexCode = function (value, isAlias) {
    value = isAlias ? value.join("\n").split(",").join(" ") : value.join("\n");
    document.getElementById("index_code").value = value;
};

// Inputs
let _getInputs = function () {
    return document.getElementById("inputs").value.split("\n")
        .map(x => isNaN(Number(x)) ? 0 : Number(x));
};

let _setInputs = function (value) {
    document.getElementById("inputs").value = value.join("\n");
};

// Outputs
let _getOutputs = function () {
    return document.getElementById("outputs").value.split("\n")
        .map(x => isNaN(Number(x)) ? 0 : Number(x));
};

let _setOutputs = function (value) {
    document.getElementById("outputs").value = value.join("\n");
};

// Push message to result
let _setResult = function (value) {
    document.getElementById("result").innerHTML += `${value}<br>`;
};

let _resetResult = function () {
    document.getElementById("result").innerHTML = "";
};