chrome.browserAction.setIcon({path:"icon16.png"});

playSoundReminder = function() {
	document.addEventListener('DOMContentLoaded', function () {
	var audio = document.createElement('audio');
		audio.src = "https://s3.amazonaws.com/Laughing_yoga_extensions_sounds/Laughing_female.mp3";
		audio.setAttribute('id', "female_laugh");
		audio.setAttribute('type','"audio/mp3"');
		audio.setAttribute('style','display:hidden;');
		document.body.appendChild(audio)
		var sound = document.getElementById('female_laugh');
		sound.play();
		setInterval(function() {
			console.log("sound!");
			
			}, 86400000);
	});
};

playSoundReminder();


