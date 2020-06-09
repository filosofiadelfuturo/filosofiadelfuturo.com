/*** Server Recieve ***/
let ServerRecieve = function (caller, cipher, isKeyExchange) {
    getById("server-main").innerText = cipher;

    // Server log
    const sender = _getUserName(caller);
    const recipient = _getOtherUserName(caller);

    if (isKeyExchange)
        Log(`Incoming key exchange from ${sender}, to ${recipient}.`);
    else
        Log(`Incoming message from ${sender}, to ${recipient}.`);

    Log(`Payload body: ${cipher}`);
};

/*** Server Send ***/
let ServerSend = function (to) {
    const message = getById("server-main").innerText;

    // User recieve
    UserRecieve(to, message);

    // Server log
    const recipient = _getUserName(to);
    Log(`Sending payload to ${recipient}`);
};