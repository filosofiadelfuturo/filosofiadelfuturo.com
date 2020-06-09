/*** Private Data ***/
let NewPrivateData = function (caller) {
    const newKey = GetRandomInteger(99999999999);
    getById(`K${caller}`).innerText = newKey;
};

/*** Encrypt ***/
let Encrypt = function (caller) {
    const message = getById(`${caller}-message`).value.toString();
    const key = getById(`K${caller}`).innerText;
    const cipher = _otp(message, key);

    getById(`${caller}-cipher-data`).innerText = cipher;
    getById(`${caller}-cipher-data-label`).innerText = "Encrypted Data";
};

/*** Decrypt ***/
let Decrypt = function (caller) {
    const cipher = getById(`${caller}-cipher-data`).innerText;
    const key = getById(`K${caller}`).innerText;
    const message = _otp(cipher, key);

    getById(`${caller}-cipher-data`).innerText = message;
    getById(`${caller}-cipher-data-label`).innerText = "Decrypted Data";

    // Write to message board
    _writeToBoard(caller == 'a' ? 'b' : 'a', caller, message);
};

/*** Send ***/
let Send = function (caller) {
    if (!getById(`${caller}-cipher-data`).innerText)
        Encrypt(caller);

    // Send to Server
    const cipher = getById(`${caller}-cipher-data`).innerText;
    ServerRecieve(caller, cipher);

    // Write to message board
    const message = getById(`${caller}-message`).value;
    _writeToBoard(caller, caller, message);
};

let SendKey = function (caller) {
    const key = getById(`K${caller}`).innerText;
    ServerRecieveKey(caller, key);
};

/*** Recieve ***/
let UserRecieve = function (user, message) {
    getById(`${user}-cipher-data`).innerText = message;
};

/*** Write to Board ***/
let _writeToBoard = function (from, user, message) {
    const userName = _getUserName(from);
    getById(`${user}-message-board`).innerHTML += `<p>${userName}: ${message}</p>`;
};

/*** Clear ***/
let Clear = function (caller) {
    getById(`${caller}-cipher-data-label`).innerText = "Encrypted Data";
    getById(`${caller}-cipher-data`).innerText = "";
    getById(`${caller}-message`).value = "";
};