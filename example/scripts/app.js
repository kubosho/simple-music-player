/*global MusicPlayer, Vue */
(function (global, undefined) {
    'use strict';

    document.addEventListener('DOMContentLoaded', function () {
        var musicPlayer = new MusicPlayer();

        var audioElms = document.getElementsByTagName('audio');

        var currentPlay = -1;
        var isPlay = false;

        new Vue({
            el: '#app',
            data: {
                names: [],
                sources: []
            },
            methods: {
                loadMusic: function (event) {
                    var that = this;
                    var files = event.target.files;

                    [].forEach.call(files, function (file) {
                        musicPlayer.loadMusic(file, function (src) {
                            that.$data.names.push(file.name);
                            that.$data.sources.push(src);
                        });
                    });
                },
                toggle: function (event) {
                    var index = this.$data.names.indexOf(event.currentTarget.textContent);
                    var audioE = audioElms[index];

                    if (isPlay && currentPlay !== index) {
                        musicPlayer.stop(audioElms[currentPlay]);
                        musicPlayer.play(audioE);
                        currentPlay = index;
                        return;
                    }

                    if (isPlay) {
                        musicPlayer.pause(audioE);
                        isPlay = false;
                        currentPlay = -1;
                        return;
                    }

                    musicPlayer.play(audioE);
                    currentPlay = index;
                    isPlay = true;
                }
            }
        });
    }, false);
})(this.self, void 0);
