module.exports = {
    test: {
        files: [
            {
                expand: true,
                cwd: 'scripts/test/',
                src: ['*.js'],
                dest: 'scripts/test/espower/',
                ext: '.js'
            }
        ]
    }
};
