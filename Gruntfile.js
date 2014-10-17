module.exports = function(grunt) {
    grunt.initConfig({
        htmlmin: {                                     // Task
            dist: {                                      // Target
                options: {                                 // Target options
                    removeComments: true,
                    collapseWhitespace: true
                },
                files: {                                   // Dictionary of files
                    'dist/index.html': 'test1.html'     // 'destination': 'source'
                }
            },
            dev: {                                       // Another target
                files: {
                    'dist/index.html': 'test1.html'
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-htmlmin');

    grunt.registerTask('default', ['htmlmin']);
}