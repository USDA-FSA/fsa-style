module.exports = function (grunt) {

  grunt.initConfig({

    // Builds Sass
    sass: {
      dev: {
        files: {
          'public/stylesheets/main.css': 'public/sass/main.scss',
          'public/stylesheets/main-ie6.css': 'public/sass/main-ie6.scss',
          'public/stylesheets/main-ie7.css': 'public/sass/main-ie7.scss',
          'public/stylesheets/main-ie8.css': 'public/sass/main-ie8.scss',
          'public/stylesheets/elements-page.css': 'public/sass/elements-page.scss',
          'public/stylesheets/elements-page-ie6.css': 'public/sass/elements-page-ie6.scss',
          'public/stylesheets/elements-page-ie7.css': 'public/sass/elements-page-ie7.scss',
          'public/stylesheets/elements-page-ie8.css': 'public/sass/elements-page-ie8.scss',
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

      govuk_template: {
        src: 'node_modules/govuk_template_mustache/views/layouts/govuk_template.html',
        dest: 'govuk_modules/views/',
        expand: true,
        flatten: true,
        filter: 'isFile'
      },

      govuk_assets: {
        files: [
          {
            expand: true,
            src: '**',
            cwd: 'node_modules/govuk_template_mustache/assets',
            dest: 'govuk_modules/public/'
          }
        ]
      },

      govuk_frontend_toolkit_scss: {
        expand: true,
        src: '**',
        cwd: 'node_modules/govuk_frontend_toolkit/stylesheets/',
        dest: 'govuk_modules/public/sass/'
      },

      govuk_frontend_toolkit_js: {
        expand: true,
        src: '**',
        cwd: 'node_modules/govuk_frontend_toolkit/javascripts/',
        dest: 'govuk_modules/public/javascripts/'
      },

      govuk_frontend_toolkit_img: {
        expand: true,
        src: '**',
        cwd: 'node_modules/govuk_frontend_toolkit/images/',
        dest: 'govuk_modules/public/images/icons/'
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

  [
    'grunt-contrib-copy',
    'grunt-contrib-watch',
    'grunt-sass',
    'grunt-scss-lint'
  ].forEach(function (task) {
    grunt.loadNpmTasks(task);
  });

  grunt.registerTask('default', [
    'copy:govuk_assets',
    'copy:govuk_frontend_toolkit_scss',
    'copy:govuk_frontend_toolkit_js',
    'copy:govuk_frontend_toolkit_img',
    'sass',
  ]);

  grunt.registerTask(
    'test',
    'default',
    function () {
      grunt.log.writeln('Test that the app runs');
    }
  );

  grunt.registerTask(
    'lint',
    'scsslint'
  );

};
