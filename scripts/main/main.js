(function () {
    'use strict';

    document.addEventListener('DOMContentLoaded', function () {
        var musicPlayer = new BrowserMusicPlayer();

        document.getElementById('input').addEventListener('change', function (event) {
            var file = this.files[0];
            var loadingMusic = musicPlayer.loadingMusic(file);

            loadingMusic.onloadend = function () {
                console.log(loadingMusic.result);
            };
        });
    }, false);
})();
