const path = require('path');

module.exports = grunt => {
    grunt.initConfig({
        ts: {
            default: {
                tsconfig: true,
            }
        }
    });

    grunt.loadNpmTasks('grunt-ts');

    grunt.registerTask('build', ['ts']);
}