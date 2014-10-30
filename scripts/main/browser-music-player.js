/**
 * Music player in browser
 * author: kubosho_ <ta2@o2p.jp>
 * Repository: https://github.com/kubosho/browser-music-player
 * License: MIT
 */

(function (global, undefined) {
    'use strict';

    /**
     * @constructor
     */
    function BrowserMusicPlayer () {
        var AudioContext = window.AudioContext || window.webkitAudioContext;
        this.ctx = new AudioContext();
    }

    BrowserMusicPlayer.prototype.loadMusic = function (file, callback) {
        callback = callback || function(){};

        var that = this;
        var reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function (event) {
            if (!that.isMusicFile(file)) {
                return console.warn('Warning: Not a music file');
            }
            callback(event, reader.result);
        };

        return reader;
    };

    BrowserMusicPlayer.prototype.isMusicFile = function (file) {
        var type = file.type.substring(6, 9);
        return /(mp3|wav|ogg|wma|m4a)/.test(type);
    };

    BrowserMusicPlayer.prototype.createAudioElement = function (src) {
        var audio = document.createElement('audio');
        audio.src = src;
        return audio;
    };

    BrowserMusicPlayer.prototype.createSource = function (audioE) {
        return this.ctx.createMediaElementSource(audioE);
    };

    BrowserMusicPlayer.prototype.play = function (source) {
        source.connect(this.ctx.destination);
        source.start();
    };

    BrowserMusicPlayer.prototype.stop = function () {
    };

    BrowserMusicPlayer.prototype.rewind = function () {
    };

    BrowserMusicPlayer.prototype.forward = function () {
    };

    global.BrowserMusicPlayer = BrowserMusicPlayer;
})(this.self, void 0);
