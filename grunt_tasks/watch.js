module.exports = {
    scripts: {
        files: ['scripts/main/*.js'],
        tasks: ['test', 'build:scripts']
    },
    jade: {
        files: ['views/*.jade'],
        tasks: ['jade']
    }
};
