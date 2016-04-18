module.exports = function (grunt) {

  grunt.initConfig({

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
    ''
  ]);

  grunt.registerTask(
    'test',
    'default', function () {
      grunt.log.writeln('Test that the app runs');
    }
  );

};
