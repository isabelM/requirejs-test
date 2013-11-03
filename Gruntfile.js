module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
                    '<%= grunt.template.today("yyyy-mm-dd") %> */'
            },
            build: {
                src: 'src/js/*.js',
                dest: 'build/<%= pkg.name %>.min.js'
            }
        },
        requirejs: {
            compile: {
                options: {
                    name: "../page1",
                    "baseUrl": "src/js/lib",
                    mainConfigFile: "src/js/page1.js",
                    out: "build/optimized1.js",
                    "paths": {
                        "app": "../app",
                        "jquery": "jquery/jquery-1.10.2.min",
                        "bootstrap": "bootstrap/js/bootstrap.min",
                        "styles": "../../styles"
                    }
                }
            }
        }
    });

    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-requirejs');

    // Default task(s).
    grunt.registerTask('default', ['requirejs']);
}
