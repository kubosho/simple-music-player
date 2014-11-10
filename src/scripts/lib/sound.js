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
