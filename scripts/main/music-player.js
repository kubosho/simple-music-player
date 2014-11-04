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
    function MusicPlayer () {
        var AudioContext = global.AudioContext || global.webkitAudioContext;
        this.ctx = new AudioContext();
    }

    MusicPlayer.prototype.loadMusic = function (file, callback) {
        callback = callback || function(){};

        var that = this;
        var reader = new FileReader();

        reader.readAsDataURL(file);
        reader.onload = function () {
            if (!that.isMusicFile(file)) {
                return console.warn('Warning: Not a music file');
            }

            callback(reader.result);
        };

        return reader;
    };

    MusicPlayer.prototype.isMusicFile = function (file) {
        var type = file.type.substring(6, 9);
        return /(mp3|wav|ogg|wma|m4a)/.test(type);
    };

    MusicPlayer.prototype.createAudioElement = function (src) {
        var audio = document.createElement('audio');
        audio.src = src;
        return audio;
    };

    MusicPlayer.prototype.createSource = function (audioE) {
        return this.ctx.createMediaElementSource(audioE);
    };

    MusicPlayer.prototype.play = function (audioE) {
        audioE.play();
    };

    MusicPlayer.prototype.stop = function (audioE) {
        audioE.pause();
    };

    MusicPlayer.prototype.rewind = function () {
        // TODO
    };

    MusicPlayer.prototype.forward = function () {
        // TODO
    };

    global.MusicPlayer = MusicPlayer;
})(this.self, void 0);
