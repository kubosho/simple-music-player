module.exports = {
    unit: {
        options: {
            configFile: 'karma.conf.js',
            autoWatch: false,
            browsers: ["PhantomJS"],
            reporters: ["progress"],
            singleRun: true,
            keepalive: true
        }
    }
};
