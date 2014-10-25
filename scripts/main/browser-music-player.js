(function (exports) {
    'use strict';

    /**
     * @constructor
     */
    function BrowserMusicPlayer () {
        this.ctx = new (window.AudioContext || window.webkitAudioContext)();
    }

    /**
     * ファイルをFileReader.readAsDataURL()を使って読み込み、FileReaderオブジェクトを返します
     * @param {File} file
     * @returns {FileReader}
     */
    BrowserMusicPlayer.prototype.loadMusic = function (file) {
        if (!this.isMusicFile(file)) {
            throw new Error('Not a music file');
        }

        var reader = new FileReader();
        reader.readAsDataURL(file);
        return reader;
    };

    /**
     * 指定されたファイルが音楽ファイルかどうか調べ、その結果を真偽値で返します
     * @param {File} file
     * @returns {boolean}
     */
    BrowserMusicPlayer.prototype.isMusicFile = function (file) {
        var type = file.type.substring(6, 9);
        return /(mp3|wav|ogg|wma|m4a)/.test(type);
    };

    /**
     * audio要素を作ります
     * @param {String} src
     * @returns {HTMLElement}
     */
    BrowserMusicPlayer.prototype.createAudioElement = function (src) {
        var audio = document.createElement('audio');
        audio.src = src;
        return audio;
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
