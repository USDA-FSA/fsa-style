module.exports = function (grunt) {

  // Time how long tasks take. Can help when optimizing build times
  require('time-grunt')(grunt);

  // Load grunt tasks automatically
  require('load-grunt-tasks')(grunt);

  // Listing Tasks
  grunt.initConfig({

    // Builds Sass
    sass: {
      dev: {
        files: {
          'public/stylesheets/prism.css': 'public/sass/prism.scss',
        },
        options: {
          includePaths: ['govuk_modules/public/sass'],
          outputStyle: 'expanded',
          imagePath: '../images'
        }
      }
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
        files: ['public/sass/**/*.scss'],
        tasks: ['sass'],
        options: { nospawn: true }
      }
    },

    // Lint scss files
    scsslint: {
      allFiles: [
        'public/sass/elements/*.scss',
        'public/sass/elements/forms/*.scss'
      ],
      options: {
        bundleExec: false,
        colorizeOutput: true,
        config: '.scss-lint.yml',
        force: true,
        reporterOutput: null
      },
    }

  });

  // Register Tasks
  grunt.registerTask('default', ['copy:uswds_assets', 'sass',]);
  grunt.registerTask(
    'test', 'default', function () {
      grunt.log.writeln('Test that the app runs');
    }
  );
  grunt.registerTask('lint', 'scsslint');

};
