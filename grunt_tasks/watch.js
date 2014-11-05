module.exports = {
    scripts: {
        files: ['scripts/main/*.js'],
        tasks: ['test', 'build:scripts']
    },
    jade: {
        files: ['*.jade'],
        tasks: ['jade']
    }
};
