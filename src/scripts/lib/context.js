'use strict';

module.exports = {
    audioContext: function () {
        var global = this.self,
            AudioContext = global.AudioContext || global.webkitAudioContext;

        return new AudioContext();
    }
};
