/*global describe, before, it, assert, MusicPlayer */
describe('Music player in browser', function () {
    before(function () {
        this.musicPlayer = new MusicPlayer();
    });

    describe('Instance', function () {
        it('should be made MusicPlayer instance', function () {
            assert(this.musicPlayer instanceof MusicPlayer === true);
        });
    });

    describe('#loadMusic()', function () {
        it('should load music file', function () {
            // TODO
        });
    });

    describe('#isMusicFile()', function () {
        it('should is music file', function () {
            // TODO
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
