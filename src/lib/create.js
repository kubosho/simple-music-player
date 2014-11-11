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
