/**
 * Music player in browser
 * author: kubosho_ <ta2@o2p.jp>
 * Repository: https://github.com/kubosho/music-player-in-browser
 * License: MIT
 */

window.MusicPlayer = function () {
    'use strict';

    var loader = require('./lib/loader');
    var create = require('./lib/create');
    var sound  = require('./lib/sound');

    function MusicPlayer () {
        if (!(this instanceof MusicPlayer)) {
            return new MusicPlayer();
        }

        this.loader = Object.create(loader);
        this.create = Object.create(create);
        this.sound = Object.create(sound);
    }

    return new MusicPlayer();
};
