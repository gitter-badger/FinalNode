var app = module.parent.exports.app;
var Empleado = require('../models/employee.js');
var passport = module.parent.exports.passport;

//get Login
app.get('/admin',function(req, res){
//Empleado.find({}, function(err, docs){
	res.render('login', {title:'Login'});
});

//Post login 
app.post('/admin', passport.authenticate('AdminLogin',
{
	successRedirect:'/panel',
	failureRedirect: '/admin',
	failureFlash: true
}));
