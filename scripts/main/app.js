/*global MusicPlayer, Vue */
(function (global, undefined) {
    'use strict';

    document.addEventListener('DOMContentLoaded', function () {
        var musicPlayer = new MusicPlayer();
        var hasSource = false;
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
                            return that.$data.sources.push(src);
                        });

                        if (!musicPlayer.isMusicFile) {
                            return;
                        }
                        that.$data.names.push(file.name);
                    });
                },
                toggle: function (event) {
                    var elm = event.currentTarget;
                    var index = this.$data.names.indexOf(elm.textContent);
                    var audioElms = document.getElementsByTagName('audio'),
                        audioE = audioElms[index];

                    if (!hasSource) {
                        musicPlayer.createSource(audioE);
                        hasSource = true;
                    }

                    if (!isPlay) {
                        musicPlayer.play(audioE);
                        isPlay = true;
                        return;
                    }

                    musicPlayer.pause(audioE);
                    isPlay = false;
                }
            }
        });
    }, false);
})(this.self, void 0);
