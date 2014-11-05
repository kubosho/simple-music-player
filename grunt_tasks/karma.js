module.exports = {
    unit: {
        options: {
            configFile: 'karma.conf.js',
            autoWatch: false,
            browsers: ['Chrome'],
            reporters: ["progress"],
            singleRun: true,
            keepalive: true
        }
    }
};
