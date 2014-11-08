describe('Music player in browser', function () {
    var musicPlayer = null;
    before(function () {
        musicPlayer = new MusicPlayer();
    });
    describe('Instance', function () {
        it('should be made MusicPlayer instance', function () {
            assert(assert._expr(assert._capt(assert._capt(assert._capt(musicPlayer, 'arguments/0/left/left') instanceof assert._capt(MusicPlayer, 'arguments/0/left/right'), 'arguments/0/left') === true, 'arguments/0'), {
                content: 'assert(musicPlayer instanceof MusicPlayer === true)',
                filepath: '/Users/s.kubota/src/github.com/kubosho/music-player-in-browser/test/scripts/test.js',
                line: 11
            }));
        });
    });
    describe('#loadMusic()', function () {
        it('should load music file', function () {
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
                assert(assert._expr(assert._capt(assert._capt(assert._capt(musicPlayer, 'arguments/0/left/callee/object').isMusicFile(assert._capt(assert._capt(types, 'arguments/0/left/arguments/0/object')[assert._capt(i, 'arguments/0/left/arguments/0/property')], 'arguments/0/left/arguments/0')), 'arguments/0/left') === true, 'arguments/0'), {
                    content: 'assert(musicPlayer.isMusicFile(types[i]) === true)',
                    filepath: '/Users/s.kubota/src/github.com/kubosho/music-player-in-browser/test/scripts/test.js',
                    line: 32
                }));
            }
        });
    });
    describe('#play()', function () {
        it('should play sound', function () {
        });
    });
    describe('#stop()', function () {
        it('should stop sound', function () {
        });
    });
    describe('#rewind()', function () {
        it('should rewind sound', function () {
        });
    });
    describe('#forward()', function () {
        it('should forward sound', function () {
        });
    });
});