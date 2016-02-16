var fs 		 = require('fs');
var request	 = require('request').defaults({encoding: null});
var botlog   = require('./botlog');
var urls	 = require("./data/urls");
var arrays	 = require("./data/arrays");
var imgs	 = require("./data/imgPaths");
var config	 = require("./data/config");

/** SERIOUS **/
exports.game = function(message, user, game){
	try{
		message.author.client.setStatus('online', game, function(err){
			console.log(err);
			botlog.botlog(err);
		});
	}catch(err){
		console.log(err);
	}
};

/** SILLY **/
exports.love = function(message, user, tyusUsername){
	var arr = arrays.love;
	if(!(user.username === tyusUsername)){
		var index = Math.floor(Math.random() * arr.length);
		var loveMsg = arr[index];
		message.client.reply(message, loveMsg, function(err){
			console.log(err);
		});
	}
	else
		message.client.reply(message, '.....', function(err){
			console.log(err);
		});
};
exports.thumb = function(message){
	var thumbStream = fs.createReadStream(imgs.thumbImg);
	message.client.sendFile(message.channel, thumbStream, 'thumb.jpg');
};

exports.heart = function(message){
	var heartStream = fs.createReadStream(imgs.heartImg);
	message.client.sendFile(message.channel, heartStream, 'thumb.jpg');
};

exports.google = function(message, searchCriteria){
	try{
		var url = "https://www.google.com/search?q=" + encodeURI(searchCriteria);	
		console.log(url);
		message.client.sendMessage(message.channel, 
									"Google search for " + searchCriteria + ": " + url,
									function(err){
										botlog.botlog(err);
									});
		
		//var win = window.open(url, '_blank');
	  	//win.focus();
	}catch(err){
		console.log(err);
	}
};

exports.help = function(message){
	message.client.sendMessage(message.channel, manual(config.version), function(err){
		console.log(err);
	});
};

function manual(){
	var man = "cookiE_bot Version " + config.version + 
	"\nUSAGE: \n\t![command] [optional:parameter]" +
	"\n\nCommands (not case sensative):" +
	"\n!thumb \t\t\t\t\t\t - Print the Facebook Thumb image" +
	"\n!heart \t\t\t\t\t\t - Print a Heart image" +
	"\n!google <keyword> \t- Google search on keyword" +
	"\n!love \t\t\t\t\t\t\t  - Print a loving and motivational message!" +
	"\n!game \t\t\t\t\t\t\t- Set the game eSports_bot is playing" +
	"\n!Help \t\t\t\t\t\t\t - Print the manual for cookiE_bot" +
	"\n";
	return man;
};