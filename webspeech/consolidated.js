window.SpeechRecognition = window.SpeechRecognition ||
                           window.webkitSpeechRecognition;

function Computer(continuous, outContainer) {
  this.recognizer = new window.SpeechRecognition();
  this.recognizer.continuous = continuous;
  this.outContainer = outContainer;

  this.recognizer.onresult = function(e) {
    if (this.onresult) {
      this.onresult(e);
    } else {
      // if (e.results.length) {
      //   var result = e.results[e.resultIndex];
      //   if (result.isFinal) {
      //     console.log('Speech result: ' + result[0].transcript);
      //     translate_(result[0].transcript);
      //   }
      // }
    }
  }.bind(this);

  //start listening
  this.recognizer.onstart = function(e) {
    if (this.onstart) {
      this.onstart(e);
    }
  }.bind(this);

  //stop listening
  this.recognizer.onend = function(e) {
    if (this.onend) {
      this.onend(e);
    }
  }.bind(this);
}

//set the destination language
Computer.prototype.DEST_LANG = 'en'; 

// True if the speech detector should be listening for commands.
Computer.prototype.payingAttention = false;

// True if voice just spoke. Good for preventing cycles.
Computer.prototype.justSpoke = false;

//if it's not listening then start and tell us that it's listening
Computer.prototype.listen = function() {
  if (!this.isListening) {
    this.recognizer.start();
  }
  this.isListening = true;
};

//if it's listening then stop and tell us that it's stopped listening
Computer.prototype.stopListening = function() {
  if (this.isListening) {
    this.recognizer.stop();
  }
  this.isListening = false;
};

//tranlation magic
Computer.prototype.translate = function(txt) {
  //set the translation url
  var translateURL = [
      'translate.google.com/translate_a/t?client=t&hl=en&sl=en&tl=',
      this.DEST_LANG,
      '&ie=UTF-8&oe=UTF-8&multires=1&otf=2&ssel=0&tsel=0&sc=1&q=',
      encodeURIComponent(txt)].join('');

  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'http://www.corsproxy.com/' + translateURL, true);

  xhr.onload = function(e) {
    var arr = eval(e.target.response); // JSON.parse flakes out on the response.
    var translateText = arr[0][0][0];

    //display the translated text here
    if (this.outContainer) {
      this.outContainer.innerHTML += '<div>' + translateText + '</div>';
      this.outContainer.scrollTop = this.outContainer.scrollHeight;
    }

    //read out the translated text
    this.speak(translateText);
  }.bind(this);

  xhr.send();
};

Computer.prototype.speak = function(txt) {

  console.log('Translated text: ', txt);

  // Need to latinize the text.
  // Remove when https://code.google.com/p/chromium/issues/detail?id=333515 is fixed.
  var sanitized = latinize(txt);
  console.log('sanitized speech: ' + sanitized);

  //begin speaking
  var msg = new SpeechSynthesisUtterance();
  // msg.voiceURI = 'native';
  //   msg.volume = 1; // 0 to 1
  //   var voices = window.speechSynthesis.getVoices();
  //   msg.voice = voices[10];
  //   msg.rate = 1; // 0.1 to 10
  //   msg.pitch = 1; //0 to 2
  msg.text = sanitized;
  msg.lang = this.DEST_LANG;

  msg.onend = function(e) {
    console.log('Finished at ' + e.elapsedTime + ' seconds.');
  };

  speechSynthesis.speak(msg);
};











var recogStatus = document.querySelector('#status');
var out = document.querySelector('output');
var langSelect = document.querySelector('#lang');
var startButton = document.querySelector('button.green');
var stopButton = document.querySelector('button.red');

var justSpoke = false;

// Toggle browser support messages.
if (!('speechSynthesis' in window)) {
  document.querySelector('#synth-support').classList.add('show');
}

if (!('SpeechRecognition' in window)) {
  document.querySelector('#recog-support').classList.add('show');
}

var computer = new Computer(true, out);

computer.onresult = function(e) {
  if (e.results.length) {
    var result = e.results[e.resultIndex];
    if (result.isFinal) {

      // Protection from spoken response through speakers creating a cycle.
      if (justSpoke) {
        justSpoke = false;
        return;
      }

      console.log('Speech result: ' + result[0].transcript);
      this.translate(result[0].transcript);
    }
  }
};

computer.onstart = function(e) {
  recogStatus.textContent = 'listening....';
  stopButton.disabled = false;
  startButton.disabled = true;
  justSpoke = false;
};

computer.onend = function(e) {
  recogStatus.textContent = '';
  startButton.disabled = false;
  stopButton.disabled = true;
  justSpoke = false;
};

langSelect.addEventListener('change', function(e) {
  computer.DEST_LANG = e.target.value;
});

startButton.addEventListener('click', function(e) {
  // e.target.classList.toggle('bold');
  // stopButton.classList.remove('bold');
  computer.listen();
});

stopButton.addEventListener('click', function(e) {
  // e.target.classList.toggle('bold');
  // startButton.classList.remove('bold');
  computer.stopListening();
});

document.addEventListener('DOMContentLoaded', function(e) {
  computer.DEST_LANG = langSelect.value;

  //computer.speak('test this out');
});

