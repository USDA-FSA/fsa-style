// \projects\sandbox\govuk\govuk_elements\Gruntfile.js
// \projects\sandbox\govuk\govuk_elements\Gruntfile.js
// \projects\sandbox\govuk\govuk_elements\Gruntfile.js
// \projects\sandbox\govuk\govuk_elements\Gruntfile.js
// \projects\sandbox\govuk\govuk_elements\Gruntfile.js
// \projects\sandbox\govuk\govuk_elements\Gruntfile.js
// \projects\sandbox\govuk\govuk_elements\Gruntfile.js
// \projects\sandbox\govuk\govuk_elements\Gruntfile.js
// \projects\sandbox\govuk\govuk_elements\Gruntfile.js
// \projects\sandbox\govuk\govuk_elements\Gruntfile.js
// \projects\sandbox\govuk\govuk_elements\Gruntfile.js
// \projects\sandbox\govuk\govuk_elements\Gruntfile.js
// \projects\sandbox\govuk\govuk_elements\Gruntfile.js
// \projects\sandbox\govuk\govuk_elements\Gruntfile.js
// \projects\sandbox\govuk\govuk_elements\Gruntfile.js
// \projects\sandbox\govuk\govuk_elements\Gruntfile.js
// \projects\sandbox\govuk\govuk_elements\Gruntfile.js
// \projects\sandbox\govuk\govuk_elements\Gruntfile.js
// \projects\sandbox\govuk\govuk_elements\Gruntfile.js
// \projects\sandbox\govuk\govuk_elements\Gruntfile.js
// \projects\sandbox\govuk\govuk_elements\Gruntfile.js
// \projects\sandbox\govuk\govuk_elements\Gruntfile.js
// \projects\sandbox\govuk\govuk_elements\Gruntfile.js
// \projects\sandbox\govuk\govuk_elements\Gruntfile.js
// \projects\sandbox\govuk\govuk_elements\Gruntfile.js
// \projects\sandbox\govuk\govuk_elements\Gruntfile.js

module.exports = function (grunt) {

  grunt.initConfig({

    // Copies templates and assets from external modules and dirs
    copy: {
      USWDS_ASSETS: {
        files: [
          {
            expand: true,
            src: '**',
            cwd: 'node_modules/uswds/src/stylesheets',
            dest: 'src/lib/'
          }
        ]
      },
    }

  });

  [
    'grunt-contrib-copy',
    'grunt-contrib-watch',
    'grunt-sass',
    'grunt-nodemon',
    'grunt-text-replace',
    'grunt-concurrent',
    'grunt-scss-lint'
  ].forEach(function (task) {
    grunt.loadNpmTasks(task);
  });


  grunt.registerTask('default', [
    'copy:USWDS_ASSETS'
  ]);

  grunt.registerTask(
    'test',
    'default', function () {
      grunt.log.writeln('Test that the app runs');
    }
  );

};
