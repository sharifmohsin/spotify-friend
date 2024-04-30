const buddyList = require('./')
var lastPlayedTrack = ''

async function main () {
  const spDcCookie = 'your_sp_dc_cookie'

  const { accessToken } = await buddyList.getWebAccessToken(spDcCookie)
  const friendActivity = await buddyList.getFriendActivity(accessToken)
 
  let arrayFound = friendActivity.friends.filter(function(item) {
      return item.user.name == 'zulaikhasael';
  });
  
  if (lastPlayedTrack !== arrayFound[0].track.name + arrayFound[0].track.artist.name){
	let nodemailer = require('nodemailer');
	let transporter = nodemailer.createTransport({
	  host: 'smtp.host.here',
	  port: 000,
	  auth: {
		user: 'your.mail@here.com',
		pass: 'Password'
	  }
	});

	let mailOptions = {
	  from: 'sender@mail',
	  to: 'receiver@mail',
	  subject: arrayFound[0].track.name + " - " + arrayFound[0].track.artist.name
	};

	transporter.sendMail(mailOptions, function(error, info){
	  if (error) {
		console.log(error);
	  } else {
		console.log('Email sent. Current Track: ' + arrayFound[0].track.name + arrayFound[0].track.artist.name)
	  }
	});
	
  }
lastPlayedTrack = JSON.stringify(arrayFound[0].track.name + " - "  + arrayFound[0].track.artist.name)
}

main()

//Run every 30 seconds
setInterval(() => main(), 1000 * 30)
