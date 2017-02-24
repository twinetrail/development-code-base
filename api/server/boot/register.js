'use strict';

module.exports = function (app) {
	let Client = app.models.Client;
	Client.create({
		username: "ACE", 
		password: "password", 
		first_name: "Abhinav", 
		last_name: "Kumar", 
		email: "abhinav0624@hotmail.com",
		mobile: "9699948805",
		landline: "0641425080",
		industry: "Software",
		store_type: "retail"
	}, function (err, clientInstance) {
		console.log(clientInstance);
	});
}