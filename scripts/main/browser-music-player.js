(function (global, undefined) {
    'use strict';

    /**
     * @constructor
     */
    function BrowserMusicPlayer () {
        this.ctx = new (window.AudioContext || window.webkitAudioContext)();
    }

    /**
     * ファイルをFileReader.readAsDataURL()を使って読み込み、FileReaderオブジェクトを返します
     * 読み込み完了時にeventとFileReader.resultを引数としてcallback関数が実行できます
     * @param {File} file
     * @param {Function} callback
     * @returns {FileReader}
     */
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

    /**
     * audio要素をもとに、MediaElementAudioSourceNodeを作ります
     * @param {HTMLAudioElement} audioE
     * @returns {MediaElementAudioSourceNode}
     */
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
