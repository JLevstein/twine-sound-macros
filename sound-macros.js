macros["playSound"] = {
  handler: function (bodyElement, macroName, params, parser) {
    var soundFile, audioElement;

    soundFile = eval(parser.fullArgs()).toString();

    if(document.querySelectorAll("audio[src='"+soundFile+"']")[0]) {
      audioElement = document.querySelectorAll("audio[src='"+soundFile+"']")[0];
    } else {
      audioElement = document.createElement('audio');
      audioElement.setAttribute('class', 'audio');
      audioElement.setAttribute('src', soundFile);

      /*
       * HERE IS WHERE YOU CAN ADJUST THE STARTING VOLUME
       */
      audioElement.volume = 1;

      document.body.appendChild(audioElement);
    }

    audioElement.play();
  }
}

macros["loopSound"] = {
  handler: function (bodyElement, macroName, params, parser) {
    var soundFile, audioElement;

    soundFile = eval(parser.fullArgs()).toString();
    if(document.querySelectorAll("audio[src='"+soundFile+"']")[0]) {
      audioElement = document.querySelectorAll("audio[src='"+soundFile+"']")[0];
    } else {
      audioElement = document.createElement('audio');
      audioElement.setAttribute('class', 'audio');
      audioElement.setAttribute('src', soundFile);

      /*
       * HERE IS WHERE YOU CAN ADJUST THE STARTING VOLUME
       */
      audioElement.volume = 1;

      document.body.appendChild(audioElement);
    }

    audioElement.play();
    audioElement.setAttribute('loop', true);
  }
}

macros["pauseSound"] = {
  handler: function (bodyElement, macroName, params, parser) {
    var soundFile, audioElement;

    soundFile = eval(parser.fullArgs()).toString();
    audioElement = document.querySelectorAll("audio[src='"+soundFile+"']")[0];

    audioElement.pause();
  }
}

macros["increaseVolume"] = {
  handler: function (bodyElement, macroName, params, parser) {
    var soundFile, audioElement;

    soundFile = eval(parser.fullArgs()).toString();
    audioElement = document.querySelectorAll("audio[src='"+soundFile+"']")[0];

    if(audioElement.volume < 0.99) {
      /*
       * HERE IS WHERE YOU CAN ADJUST THE VOLUME SETTINGS
       */
      audioElement.volume += 0.1;
    } else {
      return false;
    }
  }
}

macros["decreaseVolume"] = {
  handler: function (bodyElement, macroName, params, parser) {
    var soundFile, audioElement;

    soundFile = eval(parser.fullArgs()).toString();
    audioElement = document.querySelectorAll("audio[src='"+soundFile+"']")[0];

    if(audioElement.volume > 0.1) {
      /*
       * HERE IS WHERE YOU CAN ADJUST THE VOLUME SETTINGS
       */
      audioElement.volume -= 0.1;
    } else {
      return false;
    }
  }
}

macros["increasePlayback"] = {
  handler: function (bodyElement, macroName, params, parser) {
    var soundFile, audioElement;

    soundFile = eval(parser.fullArgs()).toString();
    audioElement = document.querySelectorAll("audio[src='"+soundFile+"']")[0];

    /*
     * HERE IS WHERE YOU CAN ADJUST THE PLAYBACK RATES
     */
    audioElement.playbackRate += 0.1;
  }
}

macros["decreasePlayback"] = {
  handler: function (bodyElement, macroName, params, parser) {
    var soundFile, audioElement;

    soundFile = eval(parser.fullArgs()).toString();
    audioElement = document.querySelectorAll("audio[src='"+soundFile+"']")[0];

    /*
     * HERE IS WHERE YOU CAN ADJUST THE PLAYBACK RATES
     */
    audioElement.playbackRate -= 0.1;
  }
}
