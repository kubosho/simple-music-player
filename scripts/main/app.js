/*global MusicPlayer, Vue */
(function (global, undefined) {
    'use strict';

    document.addEventListener('DOMContentLoaded', function () {
        var musicPlayer = new MusicPlayer();

        new Vue({
            el: '#app',
            data: {
                sources: []
            },
            methods: {
                loadMusic: function(event) {
                    var that = this;
                    var files = event.target.files;

                    [].forEach.call(files, function (file) {
                        musicPlayer.loadMusic(file, function (src) {
                            return that.$data.sources.push(src);
                        });
                    });
                }
            }
        });
    }, false);
})(this.self, void 0);
