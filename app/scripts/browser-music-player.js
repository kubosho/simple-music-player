(function (exports) {
    'use strict';

    function BrowserMusicPlayer () {
        var AudioContext = window.AudioContext || window.webkitAudioContext;
        this.ctx = new AudioContext();
    }

    BrowserMusicPlayer.prototype.loadingMusic = function () {
    };

    /**
     * 指定されたファイルが音楽ファイルかどうか調べ、その結果を真偽値で返します
     * @param file
     * @returns {boolean}
     */
    BrowserMusicPlayer.prototype.isMusicFile = function (file) {
        var type = file.type.substring(6, 9);
        return /(mp3|wav|ogg|wma|m4a)/.test(type);
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
