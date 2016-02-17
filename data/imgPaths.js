var path = require('path');

/*** IMAGES ***/
var projectDir = path.join(__dirname + '/../');
console.log(projectDir);
var thumbImg   = projectDir + "/content/images/thumb.jpg";
var heartImg   = projectDir + "/content/images/heart.png";

module.exports = {
	heartImg: heartImg,
	thumbImg: thumbImg
};
