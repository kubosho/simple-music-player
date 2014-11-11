'use strict';

var context = require('./context');

module.exports = {
    source: function (audioE) {
        var source = null;

        audioE.addEventListener('loadstart', function () {
            source = context.createMediaElementSource(audioE);
        }, false);

        return source;
    },

    connect: function (input, output) {
        input.connect(output);
    }
};
