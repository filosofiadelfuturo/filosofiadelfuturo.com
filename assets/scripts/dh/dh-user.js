/*** Private Data ***/
let NewPrivateData = function (caller) {
    const x = _getX();
    const G = getById("G").innerHTML;
    const p = getById("p").innerHTML;
    // gx = g^x mod p
    const Gx = expmod(G, x, p);

    getById(`${caller}`).innerText = "****************";
    getById(`${caller}`).value = x;

    getById(`G${caller}`).innerText = Gx;
    getById(`G${caller}`).value = Gx;

    getById(`K${caller}`).innerText = "";
    getById(`K${caller}`).value = 0;
};

let _getX = function () {
    const p = getById("p").innerHTML;
    return GetRandomInteger(p);
};

let CreateKey = function (caller) {
    const x = getById(`${caller}`).value;
    const Gy = getById(`${caller}-cipher-data`).innerText;
    const p = getById("p").innerHTML;
    // k = gy^x mod p
    const k = expmod(Gy, x, p);

    getById(`K${caller}`).innerText = "****************";
    getById(`K${caller}`).value = k;
};

let ShowPrivate = function (caller) {
    const isShown = getById(`${caller}`).innerText != "****************";

    const x = isShown ? "****************" : getById(`${caller}`).value;
    getById(`${caller}`).innerText = x;

    const Kx = isShown ? "****************" : getById(`K${caller}`).value;
    getById(`K${caller}`).innerText = Kx;
};

/*** Encrypt ***/
let Encrypt = function (caller) {
    const message = getById(`${caller}-message`).value.toString();
    const key = getById(`K${caller}`).value;
    const cipher = _otp(message, key);

    getById(`${caller}-cipher-data`).innerText = cipher;
    getById(`${caller}-cipher-data-label`).innerText = "Encrypted Data";
};

/*** Decrypt ***/
let Decrypt = function (caller) {
    const cipher = getById(`${caller}-cipher-data`).innerText;
    const key = getById(`K${caller}`).value;
    const message = _otp(cipher, key);

    getById(`${caller}-cipher-data`).innerText = message;
    getById(`${caller}-cipher-data-label`).innerText = "Decrypted Data";

    // Write to message board
    _writeToBoard(caller == 'a' ? 'b' : 'a', caller, message);
};

/*** Send ***/
let Send = function (caller) {
    // Send to Server
    const cipher = getById(`${caller}-cipher-data`).innerText;
    const payload = cipher ? cipher : getById(`${caller}-message`).value.toString();
    ServerRecieve(caller, payload);

    // Write to message board
    const message = getById(`${caller}-message`).value;
    _writeToBoard(caller, caller, message);
};

let SendKey = function (caller) {
    if (!getById(`G${caller}`).innerText)
        NewPrivateData(caller);

    const key = getById(`G${caller}`).innerText;
    ServerRecieve(caller, key, true);
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