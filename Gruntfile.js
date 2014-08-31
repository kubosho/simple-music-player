module.exports = function (grunt) {
    'use strict';

    var config = require('./grunt_tasks/config');
    grunt.config.init(config);

    var packages = grunt.file.readJSON('./package.json');
    Object.keys(packages.devDependencies).forEach(function (p) {
        if (p.match(/^grunt-/)) {
            grunt.loadNpmTasks(p);
        }
    });

    grunt.registerTask('test', ['espower', 'karma']);
    grunt.registerTask('development', ['sass:development']);
    grunt.registerTask('production', ['sass:production']);
};
