describe('Music player in browser', function () {
    var musicPlayer = null;
    before(function () {
        musicPlayer = new MusicPlayer();
    });
    describe('Instance', function () {
        it('should be made MusicPlayer instance', function () {
            assert(assert._expr(assert._capt(assert._capt(assert._capt(musicPlayer, 'arguments/0/left/left') instanceof assert._capt(MusicPlayer, 'arguments/0/left/right'), 'arguments/0/left') === true, 'arguments/0'), {
                content: 'assert(musicPlayer instanceof MusicPlayer === true)',
                filepath: 'scripts/test/test.js',
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
                    filepath: 'scripts/test/test.js',
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3QuanMiXSwibmFtZXMiOlsiZGVzY3JpYmUiLCJtdXNpY1BsYXllciIsImJlZm9yZSIsIk11c2ljUGxheWVyIiwiaXQiLCJhc3NlcnQiLCJfZXhwciIsIl9jYXB0IiwiY29udGVudCIsImZpbGVwYXRoIiwibGluZSIsInR5cGVzIiwibXAzIiwid2F2Iiwib2dnIiwibTRhIiwid21hIiwiaSIsImlzTXVzaWNGaWxlIl0sIm1hcHBpbmdzIjoiQUFDQUEsUUFBQSxDQUFTLHlCQUFULEVBQW9DLFlBQVk7QUFBQSxJQUM1QyxJQUFJQyxXQUFBLEdBQWMsSUFBbEIsQ0FENEM7QUFBQSxJQUc1Q0MsTUFBQSxDQUFPLFlBQVk7QUFBQSxRQUNmRCxXQUFBLEdBQWMsSUFBSUUsV0FBSixFQUFkLENBRGU7QUFBQSxLQUFuQixFQUg0QztBQUFBLElBTzVDSCxRQUFBLENBQVMsVUFBVCxFQUFxQixZQUFZO0FBQUEsUUFDN0JJLEVBQUEsQ0FBRyxxQ0FBSCxFQUEwQyxZQUFZO0FBQUEsWUFDbERDLE1BQUEsQ0FBT0EsTUFBQSxDQUFBQyxLQUFBLENBQUFELE1BQUEsQ0FBQUUsS0FBQSxDQUFBRixNQUFBLENBQUFFLEtBQUEsQ0FBQUYsTUFBQSxDQUFBRSxLQUFBLENBQUFOLFdBQUEsc0NBQXVCSSxNQUFBLENBQUFFLEtBQUEsQ0FBQUosV0FBQSwyQkFBdkIsMEJBQXVDLElBQXZDO0FBQUEsZ0JBQUFLLE9BQUE7QUFBQSxnQkFBQUMsUUFBQTtBQUFBLGdCQUFBQyxJQUFBO0FBQUEsY0FBUCxFQURrRDtBQUFBLFNBQXRELEVBRDZCO0FBQUEsS0FBakMsRUFQNEM7QUFBQSxJQWE1Q1YsUUFBQSxDQUFTLGNBQVQsRUFBeUIsWUFBWTtBQUFBLFFBQ2pDSSxFQUFBLENBQUcsd0JBQUgsRUFBNkIsWUFBWTtBQUFBLFNBQXpDLEVBRGlDO0FBQUEsS0FBckMsRUFiNEM7QUFBQSxJQW1CNUNKLFFBQUEsQ0FBUyxnQkFBVCxFQUEyQixZQUFZO0FBQUEsUUFDbkNJLEVBQUEsQ0FBRyxxQ0FBSCxFQUEwQyxZQUFZO0FBQUEsWUFDbEQsSUFBSU8sS0FBQSxHQUFRO0FBQUEsZ0JBQ1JDLEdBQUEsRUFBSyxXQURHO0FBQUEsZ0JBRVJDLEdBQUEsRUFBSyxXQUZHO0FBQUEsZ0JBR1JDLEdBQUEsRUFBSyxXQUhHO0FBQUEsZ0JBSVJDLEdBQUEsRUFBSyxhQUpHO0FBQUEsZ0JBS1JDLEdBQUEsRUFBSyxnQkFMRztBQUFBLGFBQVosQ0FEa0Q7QUFBQSxZQVNsRCxTQUFTQyxDQUFULElBQWMsS0FBS04sS0FBbkIsRUFBMEI7QUFBQSxnQkFDdEJOLE1BQUEsQ0FBT0EsTUFBQSxDQUFBQyxLQUFBLENBQUFELE1BQUEsQ0FBQUUsS0FBQSxDQUFBRixNQUFBLENBQUFFLEtBQUEsQ0FBQUYsTUFBQSxDQUFBRSxLQUFBLENBQUFOLFdBQUEsb0NBQVlpQixXQUFaLENBQXdCYixNQUFBLENBQUFFLEtBQUEsQ0FBQUYsTUFBQSxDQUFBRSxLQUFBLENBQUFJLEtBQUEseUNBQU1OLE1BQUEsQ0FBQUUsS0FBQSxDQUFBVSxDQUFBLDBDQUFOLGtDQUF4QiwyQkFBc0MsSUFBdEM7QUFBQSxvQkFBQVQsT0FBQTtBQUFBLG9CQUFBQyxRQUFBO0FBQUEsb0JBQUFDLElBQUE7QUFBQSxrQkFBUCxFQURzQjtBQUFBLGFBVHdCO0FBQUEsU0FBdEQsRUFEbUM7QUFBQSxLQUF2QyxFQW5CNEM7QUFBQSxJQW1DNUNWLFFBQUEsQ0FBUyxTQUFULEVBQW9CLFlBQVk7QUFBQSxRQUM1QkksRUFBQSxDQUFHLG1CQUFILEVBQXdCLFlBQVk7QUFBQSxTQUFwQyxFQUQ0QjtBQUFBLEtBQWhDLEVBbkM0QztBQUFBLElBeUM1Q0osUUFBQSxDQUFTLFNBQVQsRUFBb0IsWUFBWTtBQUFBLFFBQzVCSSxFQUFBLENBQUcsbUJBQUgsRUFBd0IsWUFBWTtBQUFBLFNBQXBDLEVBRDRCO0FBQUEsS0FBaEMsRUF6QzRDO0FBQUEsSUErQzVDSixRQUFBLENBQVMsV0FBVCxFQUFzQixZQUFZO0FBQUEsUUFDOUJJLEVBQUEsQ0FBRyxxQkFBSCxFQUEwQixZQUFZO0FBQUEsU0FBdEMsRUFEOEI7QUFBQSxLQUFsQyxFQS9DNEM7QUFBQSxJQXFENUNKLFFBQUEsQ0FBUyxZQUFULEVBQXVCLFlBQVk7QUFBQSxRQUMvQkksRUFBQSxDQUFHLHNCQUFILEVBQTJCLFlBQVk7QUFBQSxTQUF2QyxFQUQrQjtBQUFBLEtBQW5DLEVBckQ0QztBQUFBLENBQWhEIiwiZmlsZSI6InRlc3QuanMiLCJzb3VyY2VSb290IjoiLi4iLCJzb3VyY2VzQ29udGVudCI6WyIvKmdsb2JhbCBkZXNjcmliZSwgYmVmb3JlLCBpdCwgYXNzZXJ0LCBNdXNpY1BsYXllciAqL1xuZGVzY3JpYmUoJ011c2ljIHBsYXllciBpbiBicm93c2VyJywgZnVuY3Rpb24gKCkge1xuICAgIHZhciBtdXNpY1BsYXllciA9IG51bGw7XG5cbiAgICBiZWZvcmUoZnVuY3Rpb24gKCkge1xuICAgICAgICBtdXNpY1BsYXllciA9IG5ldyBNdXNpY1BsYXllcigpO1xuICAgIH0pO1xuXG4gICAgZGVzY3JpYmUoJ0luc3RhbmNlJywgZnVuY3Rpb24gKCkge1xuICAgICAgICBpdCgnc2hvdWxkIGJlIG1hZGUgTXVzaWNQbGF5ZXIgaW5zdGFuY2UnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBhc3NlcnQobXVzaWNQbGF5ZXIgaW5zdGFuY2VvZiBNdXNpY1BsYXllciA9PT0gdHJ1ZSk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgZGVzY3JpYmUoJyNsb2FkTXVzaWMoKScsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaXQoJ3Nob3VsZCBsb2FkIG11c2ljIGZpbGUnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAvLyBUT0RPXG4gICAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgZGVzY3JpYmUoJyNpc011c2ljRmlsZSgpJywgZnVuY3Rpb24gKCkge1xuICAgICAgICBpdCgnc2hvdWxkIGJlIGZpbGUgaXMgbXVzaWMgZmlsZSBmb3JtYXQnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgdHlwZXMgPSB7XG4gICAgICAgICAgICAgICAgbXAzOiAnYXVkaW8vbXAzJyxcbiAgICAgICAgICAgICAgICB3YXY6ICdhdWRpby93YXYnLFxuICAgICAgICAgICAgICAgIG9nZzogJ2F1ZGlvL29nZycsXG4gICAgICAgICAgICAgICAgbTRhOiAnYXVkaW8veC1tNGEnLFxuICAgICAgICAgICAgICAgIHdtYTogJ2F1ZGlvL3gtbXMtd21hJ1xuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgZm9yICh2YXIgaSBpbiB0aGlzLnR5cGVzKSB7XG4gICAgICAgICAgICAgICAgYXNzZXJ0KG11c2ljUGxheWVyLmlzTXVzaWNGaWxlKHR5cGVzW2ldKSA9PT0gdHJ1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgZGVzY3JpYmUoJyNwbGF5KCknLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGl0KCdzaG91bGQgcGxheSBzb3VuZCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIC8vIFRPRE9cbiAgICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICBkZXNjcmliZSgnI3N0b3AoKScsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaXQoJ3Nob3VsZCBzdG9wIHNvdW5kJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgLy8gVE9ET1xuICAgICAgICB9KTtcbiAgICB9KTtcblxuICAgIGRlc2NyaWJlKCcjcmV3aW5kKCknLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGl0KCdzaG91bGQgcmV3aW5kIHNvdW5kJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgLy8gVE9ET1xuICAgICAgICB9KTtcbiAgICB9KTtcblxuICAgIGRlc2NyaWJlKCcjZm9yd2FyZCgpJywgZnVuY3Rpb24gKCkge1xuICAgICAgICBpdCgnc2hvdWxkIGZvcndhcmQgc291bmQnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAvLyBUT0RPXG4gICAgICAgIH0pO1xuICAgIH0pO1xufSk7XG4iXX0=
