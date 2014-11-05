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
        var fileType = file.type;
        var type = fileType.substring(6, 9);

        if (/(mp3|wav|ogg)/.test(type)) {
            return true;
        }

        // ref: Mime types - http://help.dottoro.com/lapuadlp.php
        // type are (m4a || wma) ?
        if (/x-./.test(type)) {
            type = fileType.substring(6, 11);
            // type is wma ?
            type = type !== 'x-ms-' ? type : fileType.substring(6, 14);
        }

        if (/(^x-(m4a|ms-wma))/.test(type)) {
            return true;
        }

        return false;
    };

    MusicPlayer.prototype.createAudioElement = function (src) {
        var audio = document.createElement('audio');
        audio.src = src;
        return audio;
    };

    MusicPlayer.prototype.createSource = function (audioE) {
        var source = null;

        audioE.addEventListener('loadstart', function () {
            source = this.ctx.createMediaElementSource(audioE);
            source.connect(this.ctx.destination);
        }, false);

        return source;
    };

    MusicPlayer.prototype.play = function (audioE) {
        audioE.play();
    };

    MusicPlayer.prototype.pause = function (audioE) {
        audioE.pause();
    };

    MusicPlayer.prototype.stop = function (audioE) {
        this.pause(audioE);
        audioE.currentTime = 0;
    };

    MusicPlayer.prototype.rewind = function () {
        // TODO
    };

    MusicPlayer.prototype.forward = function () {
        // TODO
    };

    global.MusicPlayer = MusicPlayer;
})(this.self, void 0);
