var CommandsModule = new Object();

CommandsModule = function(){
    return {
        CREATE_USER: "CREATE_USER",
        LOGIN_USER: "LOGIN_USER",
        AUTO_SIGNING: "AUTO_SIGNING",
        LOGOUT: "LOGOUT",
        BROADCAST_TO_ALL: "BROADCAST_TO_ALL",
        BROADCAST_TO_ALL_EXCEPT_SENDER: "BROADCAST_TO_ALL_EXCEPT_SENDER",
        SELF_EXECUTE : "SELF_EXECUTE",
        GET_USERS_PANEL: "GET_USERS_PANEL"
    }
}

module.exports = CommandsModule;