describe('test', function () {
    it('Add numbers', function () {
        assert(add(1, 2) === 3);
    });

    // failed
    it('Add numbers', function () {
        assert(add(1, 2) === 2);
    });
});
