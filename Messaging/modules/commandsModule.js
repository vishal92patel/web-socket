var CommandsModule = new Object();

CommandsModule = function(){
    return {
        CREATE_USER: "CREATE_USER",
        LOGIN_USER: "LOGIN_USER",
        AUTO_SIGNING: "AUTO_SIGNING",
        LOGOUT: "LOGOUT"
    }
}

module.exports = CommandsModule;