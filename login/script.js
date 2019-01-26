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

var login = function(){
    let username = field_username.value;
    let password = field_password.value;

    let headers = new Headers();
    headers.append('Authorization', 'Basic '+window.btoa(username+':'+password));

    // Cross Origin Request Bullshittery is ruining my Friday.

    // no-cors bypasses cross-origin forbidden bullshit
    return fetch('http://portcullis.op-staging.space/api/auth', {method: 'POST', mode: 'no-cors', headers: headers});
}

var clicked_login = function(){
	show_info("Contacting Mothership...");
	hide_error();
    /*
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
	});//*/
    login().then(
        function(response){
            console.log(response);
        }
    ).catch(
        function(response){
            console.log(response);
        }
    );
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
