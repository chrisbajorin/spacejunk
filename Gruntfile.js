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
    },

    mochaTest: {
      parse: {
        options: {
          reporter: 'spec',
          colors: true
        },
        src: ['./test/parse/*.js']
      }
    },

    mongobackup: {
      options: {
        host : 'localhost',
        port: '27017',
        db : 'sj-local',
        dump: {
          out : './dump',
        },
        restore:{
          path : './dump/sj-local',
          drop : true
        }
      }
    },

    testbackup: {
      options: {
        host: 'localhost',
        port: '27017',
        db: 'sj-test',
        dump: {
          out: './dump',
        },
        restore: {
          path: './dump/sj-test',
          drop: true
        }
      }
    }

  });

  grunt.registerTask('parse', 'parsing csv data', [
    'env:local',
    'express:dev',
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
        'express:dev',
        'mochaTest:parse'
      ]);
    }
  });

  grunt.registerTask('testbackup', function(task) {
    var done = this.async();
    var args = [];
    var baseArgs = ['--host=localhost', '--port=27017', '--db=sj-test'];
    var restoreArgs = ['--drop', './dump/sj-test'];
    var dumpArgs = ['-o ./dump'];

    if (task === 'dump') {
      args = baseArgs.concat(dumpArgs);
    }
    if (task === 'restore') {
      args = baseArgs.concat(restoreArgs);
    }

    grunt.util.spawn({
      cmd: 'mongo' + task,
      args: args,
      opts: { stdio: [ process.stdin,
        process.stout,
        process.stderr
        ]
      }
    },
    function (error, result) {
      if (error) {
        grunt.log.error(result.stderr);
      }
      grunt.log.writeln(result.stdout);
      done();
    });
  });

};
