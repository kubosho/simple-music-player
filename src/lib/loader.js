'use strict';

module.exports = {
    loadMusic: function (file, callback) {
        callback = callback || function(){};

        var that = this;
        var reader = new FileReader();

        reader.readAsDataURL(file);
        reader.onload = function () {
            if (!that.isMusicFile(file.type)) {
                return console.warn('Warning: Not a music file');
            }

            callback(reader.result);
        };

        return reader;
    },

    isMusicFile: function (filetype) {
        var type = filetype.substring(6, 9);

        if (/(mp3|wav|ogg)/.test(type)) {
            return true;
        }

        // ref: Mime types - http://help.dottoro.com/lapuadlp.php
        // type are (m4a || wma) ?
        if (/x-./.test(type)) {
            type = filetype.substring(6, 11);
            // type is wma ?
            type = type !== 'x-ms-' ? type : filetype.substring(6, 14);
        }

        if (/(^x-(m4a|ms-wma))/.test(type)) {
            return true;
        }

        return false;
    }
};
