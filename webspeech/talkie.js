window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition || null;

function Computer(continuous, outContainer) {
	this.recognizer = new window.SpeechRecognition();
	this.recognizer.continuous = continuous;
	this.outContainer = outContainer;

	this.recognizer.onresult = function(e) {
		if (this.onresult) {
			this.onresult(e);
		} else {
			if (e.results.length) {
				var result = e.results[e.resultIndex];
				if (result.isFinal) {
					console.log('Speech result: ' + result[0].transcript)
				}
			}
		}
	}
}