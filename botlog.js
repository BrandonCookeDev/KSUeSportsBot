/** JAVASCRIPT TO CREATE AND LOG TO A FILE **/
var fs 		= require('fs');
var logDir 	= './log';
var logFile = '/cookiEbot.log';


exports.botlog = function(msg)
{
	if(!msg) throw Exception("No message in botlog");
	console.log(msg);
	try{
		//Ensure file existence
		var file = logDir + logFile;
		if(!fs.existsSync(logDir)){
			console.log("Directory missing. Creating...");
		    fs.mkdirSync(logDir);
		}
		
		try{
			var fileStat = fs.statSync(file);
		}
		catch(err){
			console.log("Log file missing. Creating...");
			fs.writeFileSync(file, 'Top of log...\n', 'utf8', function(err){
				console.log(err);
			});
		}		
		
		console.log("Writing to log...");
		var date = new Date();
		fs.appendFile(file, date + ": " + msg + "\n", 'utf8', function(err){
			console.log(err);
		});
		
	}catch(err)
	{
		console.log(err);
	}
};

function error(err){
	console.log(err)
}
