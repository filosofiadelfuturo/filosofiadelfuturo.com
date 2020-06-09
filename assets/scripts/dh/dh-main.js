/*** Encryption / Decryption ***/
let _otp = function (string, key) {
    var byteString = _getByteArray(string);
    const byteKey = _getByteArray(key);

    byteString = byteString.map((value, index) =>
        value ^ byteKey[index % byteKey.length]);

    return _getStringFromByteArray(byteString);
};

/*** Datatype / ByteArray ***/
let _getByteArray = function (string) {
    let bytes = [];
    for (let i = 0; i < string.length; i++)
        bytes.push(string.charCodeAt(i));

    return bytes;
};

let _getStringFromByteArray = function (byteArray) {
    byteArray = byteArray.map(x => String.fromCharCode(x));
    return byteArray.join("");
};

/*** User names ***/
let _getUserName = function (caller) {
    return caller == 'a' ? "Alice" : "Bob";
};

let _getOtherUserName = function (caller) {
    return caller == 'a' ? "Bob" : "Alice";
};

/*** Math ***/
let GetRandomInteger = function (max) {
    return Math.floor(Math.random() * (max - 1)) + 1;
};

let expmod = function (base, exp, mod) {
    if (exp == 0)
        return 1;
    if (exp % 2 == 0)
        return Math.pow(expmod(base, (exp / 2), mod), 2) % mod;
    return (base * expmod(base, (exp - 1), mod)) % mod;
};

/*** Calculator ***/
let ShowCalculator = function () {
    getById("calculator-segment").classList.toggle("hidden");
};

let CalcLog = function (log) {
    getById("calc-log").innerHTML += `<p>${log}</p>`;
};

let CalculatorOTP = function () {
    let payload = getById("calc-otp-payload").value;
    let key = getById("calc-otp-key").value;
    let cipher = _otp(payload, key);

    CalcLog(`(OTP) ${cipher} = ${payload} xor ${key}|extended`);
};

let CalculatorExponent = function () {
    let base = getById("calc-exp-base").value;
    let exp = getById("calc-exp-exp").value;
    let mod = getById("calc-exp-mod").value;
    let result = expmod(base, exp, mod);

    CalcLog(`(EXP-MOD) ${result} = ${base} ^ ${exp} mod ${mod}`);
};

let CalculatorRandom = function () {
    const max = getById("calc-rand-max").value;
    const random = GetRandomInteger(max);

    CalcLog(`(RAND) ${random} : pseudo-random integer between ${max} & 0`);
};

/*** Server Logs ***/
let ClearLogs = function (id) {
    getById(id).innerHTML = "";
};

let Log = function (log) {
    console.log(log);
    const date = new Date();
    const stringDate = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}:${date.getMilliseconds()}`;
    getById("log").innerHTML += `<p>${stringDate}: ${log}</p>`;
};