/*global describe, before, it, assert, MusicPlayer */
describe('Music player in browser', function () {
    var musicPlayer = null;

    before(function () {
        musicPlayer = new MusicPlayer();
    });

    describe('Instance', function () {
        it('should be made MusicPlayer instance', function () {
            assert(musicPlayer instanceof MusicPlayer === true);
        });
    });

    describe('#loadMusic()', function () {
        it('should load music file', function () {
            // TODO
        });
    });

    describe('#isMusicFile()', function () {
        it('should be file is music file format', function () {
            var types = {
                mp3: 'audio/mp3',
                wav: 'audio/wav',
                ogg: 'audio/ogg',
                m4a: 'audio/x-m4a',
                wma: 'audio/x-ms-wma'
            };

            for (var i in this.types) {
                assert(musicPlayer.isMusicFile(types[i]) === true);
            }
        });
    });

    describe('#play()', function () {
        it('should play sound', function () {
            // TODO
        });
    });

    describe('#stop()', function () {
        it('should stop sound', function () {
            // TODO
        });
    });

    describe('#rewind()', function () {
        it('should rewind sound', function () {
            // TODO
        });
    });

    describe('#forward()', function () {
        it('should forward sound', function () {
            // TODO
        });
    });
});
