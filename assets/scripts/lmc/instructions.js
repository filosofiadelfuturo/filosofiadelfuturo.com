// Variables
const Instructions = {
    // Add the value in mailbox
    // to value in the accumulator
    1: function (mailbox) {
        Accumulator += Memory[mailbox];
        this._manageOverflow(mailbox);
    },
    // Subtract the value in mailbox
    // from value in the accumulator
    2: function (mailbox) {
        Accumulator -= Memory[mailbox];
        this._manageOverflow(mailbox);
    },
    // Store the value in the accumulator
    // to the mailbox address
    3: function (mailbox) {
        Memory[mailbox] = Accumulator;
    },
    // Load value from mailbox
    // to accumulator
    5: function (mailbox) {
        Accumulator = Memory[mailbox];
    },
    // Branch for next instruction
    6: function (mailbox) {
        Counter = mailbox;
    },
    // If accumulator is <= 0
    // Branch for next instruction
    7: function (mailbox) {
        if (Accumulator <= 0)
            Counter = mailbox;
    },
    // If accumulator is > 0
    // Branch for next instruction
    8: function (mailbox) {
        if (Accumulator != 0)
            Counter = mailbox;
    },
    // Fetch first value in Inputs
    // to the accumulator
    901: function () {
        Accumulator = Inputs.shift();
    },
    // Concat value in accumulator
    // to output
    902: function () {
        Outputs.push(Accumulator);
    },
    // Halt the program
    0: function () {
        Halt = true;
    },
    // Manages overflow depending on settings
    _manageOverflow: function (mailbox) {
        if (Math.abs(Accumulator) > 10 ** Settings.MemorySize)
            if (Settings.ErrOverflow)
                _err("Overflow", Accumulator, mailbox);
            else
                // Loops back to 0 after the max memory size, using mod
                Accumulator = Accumulator % (10 ** Settings.MemorySize);
    }
};