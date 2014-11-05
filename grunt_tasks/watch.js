module.exports = {
    test: {
        files: ['scripts/main/*.js'],
        tasks: ['test', 'script-build']
    },
    jade: {
        files: ['*.jade'],
        tasks: ['jade']
    }
};
