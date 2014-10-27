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
        this.ctx = new (window.AudioContext || window.webkitAudioContext)();
    }

    BrowserMusicPlayer.prototype.loadMusic = function (file, callback) {
        if (!this.isMusicFile(file)) {
            throw new Error('Not a music file');
        }

        callback = callback || function(){};

        var reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function (event) {
            callback(e, reader.result);
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

    BrowserMusicPlayer.prototype.play = function () {
    };

    BrowserMusicPlayer.prototype.stop = function () {
    };

    BrowserMusicPlayer.prototype.rewind = function () {
    };

    BrowserMusicPlayer.prototype.forward = function () {
    };

    global.BrowserMusicPlayer = BrowserMusicPlayer;
})(this.self, void 0);
