var UsersModule = new Object();

UsersModule.createUser = function(req, res){
   console.log(req.query)
   res.send(req.query);
}

UsersModule.getUser = function(req, res){
   console.log(req.query)
   res.send(req.query);
}
module.exports = UsersModule;