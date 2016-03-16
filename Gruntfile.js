module.exports = function (grunt) {

  // Time how long tasks take. Can help when optimizing build times
  require('time-grunt')(grunt);

  // Load grunt tasks automatically
  require('load-grunt-tasks')(grunt);

  // Listing Tasks
  grunt.initConfig({

    sass: {
      dist: {
        files: {
          'dist/css/test.css': 'src/stylesheets/test.scss'
        }
      },
      options: {
        sourceMap: true,
        outputStyle: 'expanded'
      },
    },

    // Copies templates and assets from external modules and dirs
    copy: {

      uswds_assets: {
        expand: true,
        src: '**',
        cwd: 'node_modules/uswds/src',
        dest: 'src/lib/uswds'
      },

    },

    // Watches styles and specs for changes
    watch: {
      css: {
        files: ['src/stylesheets/*.scss'],
        tasks: ['sass','lint'],
        options: { nospawn: true }
      }
    },

    // Lint scss files
    scsslint: {
      allFiles: [
        'src/stylesheets/*.scss'
      ],
      options: {
        bundleExec: false,
        colorizeOutput: true,
        config: '.scss-lint.yml',
        force: true,
        reporterOutput: null
      },
    },

    // Live Reload and Browser Sync'ing
    browserSync: {
      dev: {
        files: {
          src : [
            '*.html',
            'dist/css/*.css',
            'dist/js/*.js'
          ]
        },
        options: {
          watchTask: true,
          server: './'
        }
      }
    }

  });

  // Register Tasks
  grunt.registerTask('default', ['copy:uswds_assets', 'sass', 'browserSync', 'watch']);
  grunt.registerTask('lint', 'scsslint');
  grunt.registerTask('test', 'default', function () { grunt.log.writeln('Test that the app runs');});

};
