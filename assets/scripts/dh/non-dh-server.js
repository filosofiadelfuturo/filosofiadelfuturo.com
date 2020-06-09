/*** Server Recieve ***/
let ServerRecieve = function (caller, cipher) {
    getById("server-raw").innerText = cipher;

    // Server log
    const sender = _getUserName(caller);
    const recipient = _getOtherUserName(caller);
    Log(`Incoming message from ${sender}, to ${recipient}.`);
    Log(`Payload body: ${cipher}`);
};

let ServerRecieveKey = function (caller, key) {
    getById(`K${caller}s`).innerText = key;

    // Server log
    const sender = _getUserName(caller);
    Log(`Incoming key from ${sender}.`);
    Log(`Recieved key: ${key}`);
};

/*** Server Send ***/
let ServerSend = function (to) {
    if (!getById("server-encrypted").innerText)
        return Log(`Error: Tried to send non-encrypted message`);

    const cipher = getById("server-encrypted").innerText;

    // User recieve
    UserRecieve(to, cipher);

    // Server log
    const recipient = _getUserName(to);
    Log(`Sending payload to ${recipient}`);
};

/*** Encrypt / Decrypt ***/
let ServerDecrypt = function (keyId) {
    const key = getById(keyId).innerText;
    const cipher = getById("server-raw").innerText;
    const message = _otp(cipher, key);
    getById("server-decrypted").innerText = message;

    Log(`Decrypting cipher using key ${keyId}`);
    Log(`Decrypted: ${message}`);
};

let ServerEncrypt = function (keyId) {
    const key = getById(keyId).innerText;
    const message = getById("server-decrypted").innerText;
    const cipher = _otp(message, key);
    getById("server-encrypted").innerText = cipher;

    Log(`Encrypting message using key ${keyId}`);
    Log(`Encrypted: ${cipher}`);
};