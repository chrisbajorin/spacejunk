'use strict';

module.exports = function (grunt) {

  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    watch: {
      options: {
        livereload: true
      },
      // scripts: {
        // files:
      // }
      express: {
        files: ['server.js', '!**/node_modules/**', '!gruntfile.js', 'lib/**'],
        options: {
          nospawn: true
        }
      }
    },

    jshint: {
      options: {
        jshintrc: '.jshintrc'
      },
      files: [
        'gruntfile.js',
        'lib/**/*.js'
      ]
    },

    express: {
      dev: {
        options: {
          script: 'server.js',
          debug: true
        }
      }
    },

    env: {
      local: {
        NODE_ENV: 'local'
      }
    }

  });

  grunt.registerTask('workon', 'start work on project', [
    'jshint',
    'env:local',
    'express:dev',
    'watch'
    ]);

};
