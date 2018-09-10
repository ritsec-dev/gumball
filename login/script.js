'use strict';

window.onload = function(){
	init();
}

var feedback_error;
var feedback_info;

var field_username;
var field_password;

var init = function(){
	feedback_error = document.getElementById('feedback-error');
	feedback_info = document.getElementById('feedback-info');
	field_username = document.getElementById('username');
	field_password = document.getElementById('password');
}

var clicked_login = function(){
	show_info("Contacting Mothership...");
	hide_error();
	new Promise(function(yes, no){
		// TODO - Hit Up that Authentication API.
		if(field_username.value==='root' && field_password.value==='12345'){
			setTimeout(yes, 1000);
		}else{
			setTimeout(no, 1000);
		}
	}).then(function(){
		show_info("Yay!");
		window.location.href = "../index.html";
	},function(){
		hide_info();
		show_error("Invalid Credentials.");
	});
}

var clicked_register = function(){
	show_error("Registration Temporarily Disabled.");
}

var show_error = function(message){
	feedback_error.innerHTML = "<p>"+message+"</p>";
	feedback_error.style.display = "block";
}

var show_info = function(message){
	feedback_info.innerHTML = "<p>"+message+"</p>";
	feedback_info.style.display = "block";
}

var hide_error = function(){
	feedback_error.style.display = "none";
}

var hide_info = function(){
	feedback_info.style.display = "none";
}
