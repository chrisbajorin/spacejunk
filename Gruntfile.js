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

    execute: {
      parse: {
        options: {
          cwd: './lib/util'
        },
        src: ['./lib/util/parser.js']
      }
    },

    env: {
      local: {
        NODE_ENV: 'local'
      },
      test: {
        NODE_ENV: 'test'
      }
    }

  });

  grunt.registerTask('parse', 'parsing csv data', [
    'env:local',
    // 'express:dev',
    'execute:parse'
  ]);

  grunt.registerTask('workon', 'start work on project', [
    'jshint',
    'env:local',
    'express:dev',
    'watch'
  ]);

  grunt.registerTask('test', function(target) {
    if (target === 'parse') {
      return grunt.task.run([
        'env:test',
        'mochaTest:parse'
        ]);
    }
  });

};
