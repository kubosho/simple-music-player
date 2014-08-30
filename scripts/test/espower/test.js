describe('test', function () {
    it('Add numbers', function () {
        assert(assert._expr(assert._capt(assert._capt(add(1, 2), 'arguments/0/left') === 3, 'arguments/0'), {
            content: 'assert(add(1, 2) === 3)',
            filepath: 'scripts/test/test.js',
            line: 3
        }));
    });
    it('Add numbers', function () {
        assert(assert._expr(assert._capt(assert._capt(add(1, 2), 'arguments/0/left') === 2, 'arguments/0'), {
            content: 'assert(add(1, 2) === 2)',
            filepath: 'scripts/test/test.js',
            line: 7
        }));
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3QuanMiXSwibmFtZXMiOlsiZGVzY3JpYmUiLCJpdCIsImFzc2VydCIsIl9leHByIiwiX2NhcHQiLCJhZGQiLCJjb250ZW50IiwiZmlsZXBhdGgiLCJsaW5lIl0sIm1hcHBpbmdzIjoiQUFBQUEsUUFBQSxDQUFTLE1BQVQsRUFBaUIsWUFBWTtBQUFBLElBQ3pCQyxFQUFBLENBQUcsYUFBSCxFQUFrQixZQUFZO0FBQUEsUUFDMUJDLE1BQUEsQ0FBT0EsTUFBQSxDQUFBQyxLQUFBLENBQUFELE1BQUEsQ0FBQUUsS0FBQSxDQUFBRixNQUFBLENBQUFFLEtBQUEsQ0FBQUMsR0FBQSxDQUFJLENBQUosRUFBTyxDQUFQLDJCQUFjLENBQWQ7QUFBQSxZQUFBQyxPQUFBO0FBQUEsWUFBQUMsUUFBQTtBQUFBLFlBQUFDLElBQUE7QUFBQSxVQUFQLEVBRDBCO0FBQUEsS0FBOUIsRUFEeUI7QUFBQSxJQUt6QlAsRUFBQSxDQUFHLGFBQUgsRUFBa0IsWUFBWTtBQUFBLFFBQzFCQyxNQUFBLENBQU9BLE1BQUEsQ0FBQUMsS0FBQSxDQUFBRCxNQUFBLENBQUFFLEtBQUEsQ0FBQUYsTUFBQSxDQUFBRSxLQUFBLENBQUFDLEdBQUEsQ0FBSSxDQUFKLEVBQU8sQ0FBUCwyQkFBYyxDQUFkO0FBQUEsWUFBQUMsT0FBQTtBQUFBLFlBQUFDLFFBQUE7QUFBQSxZQUFBQyxJQUFBO0FBQUEsVUFBUCxFQUQwQjtBQUFBLEtBQTlCLEVBTHlCO0FBQUEsQ0FBN0IiLCJmaWxlIjoidGVzdC5qcyIsInNvdXJjZVJvb3QiOiIuLiIsInNvdXJjZXNDb250ZW50IjpbImRlc2NyaWJlKCd0ZXN0JywgZnVuY3Rpb24gKCkge1xuICAgIGl0KCdBZGQgbnVtYmVycycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgYXNzZXJ0KGFkZCgxLCAyKSA9PT0gMyk7XG4gICAgfSk7XG5cbiAgICBpdCgnQWRkIG51bWJlcnMnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGFzc2VydChhZGQoMSwgMikgPT09IDIpO1xuICAgIH0pO1xufSk7XG4iXX0=
