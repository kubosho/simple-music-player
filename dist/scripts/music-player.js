(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/**
 * Music player in browser
 * author: kubosho_ <ta2@o2p.jp>
 * Repository: https://github.com/kubosho/music-player-in-browser
 * License: MIT
 */

window.MusicPlayer = function () {
    'use strict';

    var loader = require('./lib/loader');
    var create = require('./lib/create');
    var sound  = require('./lib/sound');

    function MusicPlayer () {
        if (!(this instanceof MusicPlayer)) {
            return new MusicPlayer();
        }

        this.loader = Object.create(loader);
        this.create = Object.create(create);
        this.sound = Object.create(sound);
    }

    return new MusicPlayer();
};

},{"./lib/create":3,"./lib/loader":4,"./lib/sound":5}],2:[function(require,module,exports){
'use strict';

module.exports = {
    audioContext: function () {
        var global = this.self,
            AudioContext = global.AudioContext || global.webkitAudioContext;

        return new AudioContext();
    }
};

},{}],3:[function(require,module,exports){
'use strict';

var context = require('./context');

module.exports = {
    createAudioElement: function (src) {
        var audio = document.createElement('audio');
        audio.src = src;
        return audio;
    },

    createSource: function (audioE) {
        var source = null;

        audioE.addEventListener('loadstart', function () {
            source = context.createMediaElementSource(audioE);
            source.connect(context.destination);
        }, false);

        return source;
    }
};

},{"./context":2}],4:[function(require,module,exports){
'use strict';

module.exports = {
    loadMusic: function (file, callback) {
        callback = callback || function(){};

        var that = this;
        var reader = new FileReader();

        reader.readAsDataURL(file);
        reader.onload = function () {
            if (!that.isMusicFile(file.type)) {
                return console.warn('Warning: Not a music file');
            }

            callback(reader.result);
        };

        return reader;
    },

    isMusicFile: function (filetype) {
        var type = filetype.substring(6, 9);

        if (/(mp3|wav|ogg)/.test(type)) {
            return true;
        }

        // ref: Mime types - http://help.dottoro.com/lapuadlp.php
        // type are (m4a || wma) ?
        if (/x-./.test(type)) {
            type = filetype.substring(6, 11);
            // type is wma ?
            type = type !== 'x-ms-' ? type : filetype.substring(6, 14);
        }

        if (/(^x-(m4a|ms-wma))/.test(type)) {
            return true;
        }

        return false;
    }
};

},{}],5:[function(require,module,exports){
'use strict';

module.exports = {
    play: function (audioE) {
        audioE.play();
    },

    pause: function (audioE) {
        audioE.pause();
    },

    stop: function (audioE) {
        this.pause(audioE);
        audioE.currentTime = 0;
    },

    rewind: function () {
        // TODO
    },

    forward: function () {
        // TODO
    }
};

},{}]},{},[1]);
