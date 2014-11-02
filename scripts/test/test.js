/*global describe, it, assert, MusicPlayer */
describe('Music player in browser', function () {
    this.musicPlayer = new MusicPlayer();

    describe('Instance', function () {
        it('should MusicPlayer instance', function () {
            assert(this.musicPlayer instanceof MusicPlayer === true);
        });
    });

    describe('#loadMusic()', function () {
        it('should load music file', function () {
            assert(0 === 1);
        });
    });

    describe('#isMusicFile()', function () {
        it('should is music file', function () {
            assert(0 === 1);
        });
    });

    describe('#play()', function () {
        it('should play sound', function () {
            assert(0 === 1);
        });
    });

    describe('#stop()', function () {
        it('should stop sound', function () {
            assert(0 === 1);
        });
    });

    describe('#rewind()', function () {
        it('should rewind sound', function () {
            assert(0 === 1);
        });
    });

    describe('#forward()', function () {
        it('should forward sound', function () {
            assert(0 === 1);
        });
    });
});
