(function (exports) {
    'use strict';

    function BrowserMusicPlayer () {
        var AudioContext = window.AudioContext || window.webkitAudioContext;
        this.ctx = new AudioContext();
    }

    BrowserMusicPlayer.prototype.loadingMusic = function () {
    };

    BrowserMusicPlayer.prototype.play = function () {
    };

    BrowserMusicPlayer.prototype.stop = function () {
    };

    BrowserMusicPlayer.prototype.rewind = function () {
    };

    BrowserMusicPlayer.prototype.forward = function () {
    };

    exports.BrowserMusicPlayer = BrowserMusicPlayer;
})(window);
