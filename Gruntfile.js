module.exports = function (grunt) {

  // Time how long tasks take. Can help when optimizing build times
  require('time-grunt')(grunt);

  // Load grunt tasks automatically
  require('load-grunt-tasks')(grunt);

  // Listing Tasks
  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    // Sass all the style things
    sass: {
      default: {
        files: {
          'dist/css/<%= pkg.name %>.css': 'src/stylesheets/<%= pkg.name %>.scss',
          'dist/css/<%= pkg.name %>-docs.css': 'src/stylesheets/<%= pkg.name %>-docs.scss'
        },
        options: {
          sourceMap: true,
          outputStyle: 'expanded'
        },
      },
      minify: {
        files: {
          'dist/css/<%= pkg.name %>.min.css': 'src/stylesheets/<%= pkg.name %>.scss',
          'dist/css/<%= pkg.name %>-docs.min.css': 'src/stylesheets/<%= pkg.name %>-docs.scss'
        },
        options: {
          sourceMap: true,
          outputStyle: 'compressed'
        },
      },
    },

    // Copies templates and assets from dependencies and/or src
    copy: {

      uswds: {
        expand: true,
        src: '**',
        cwd: 'node_modules/uswds/src',
        dest: 'src'
      },

      fonts: {
        expand: true,
        src: '**',
        cwd: 'src/fonts',
        dest: 'dist/fonts'
      },

      img: {
        expand: true,
        src: '**',
        cwd: 'src/img',
        dest: 'dist/img'
      },

    },

    // Watches files for changes and run relevant tasks
    watch: {
      css: {
        files: [
          'src/stylesheets/*.scss',
          'src/stylesheets/**/*.scss'
        ],
        tasks: ['sass', 'scsslint', 'postcss'],
        options: { nospawn: true }
      },
      html: {
        files: [
          'src/*.html',
        ],
        tasks: ['prettify'] // 'simple_include'
      },
      img: {
        files: [
          'src/img/**/*.jpeg',
          'src/img/**/*.jpg',
          'src/img/**/*.gif',
          'src/img/**/*.svg',
        ],
        tasks: ['copy:img']
      },
    },

    // Clear files and folders
		clean: {
			dist: [ 'dist' ],
			uswds_main: [ 'src/stylesheets/all.scss' ],
		},

    // Make our HTML files perfectly formatted and humanly scannable
    prettify: {
      options: {
        config: '.prettifyrc'
      },
      all: {
        expand: true,
        cwd: 'src/',
        ext: '.html',
        src: ['*.html'],
        dest: 'dist/'
      },
    },

    // Lint scss files
    scsslint: {
      allFiles: [
        'src/stylesheets/*.scss',
        'src/stylesheets/**/*.scss'
      ],
      options: {
        bundleExec: false,
        colorizeOutput: true,
        config: '.scss-lint.yml',
        force: true,
        reporterOutput: null
      },
    },

    // PostCSS, primarily to autoprefix
    postcss: {
      options: {
        map: {
          inline: false, // save all sourcemaps as separate files...
          annotation: 'dist/css' // ...to the specified directory
        },
        processors: [
          require('pixrem')(), // add fallbacks for rem units
          require('postcss-quantity-queries')(), // do things like .asdf:at-least(4) {} ; https://github.com/pascalduez/postcss-quantity-queries
          require('autoprefixer')({ browsers: 'last 2 versions' }), // add vendor prefixes
          // require('cssnano')() // minify the result
        ]
      },
      dist: {
        src: 'dist/css/*.css'
      }
    },

    // Live Reload and Browser Sync'ing
    browserSync: {
      dev: {
        files: {
          src : [
            'dist/**/*.gif',
            'dist/**/*.svg',
            'dist/**/*.jpg',
            'dist/**/*.jpeg',
            'dist/*.html',
            'dist/css/*.css',
            'dist/js/*.js'
          ]
        },
        options: {
          watchTask: true,
          server: './dist/'
        }
      }
    },

    // Browserify them JSs
    browserify: {
      main: {
        files: {
          'dist/js/<%= pkg.name %>.js': [
            'src/js/test.js'
          ],
          // 'dist/js/uswds.js': [
          //   'node_modules/uswds/src/js/start.js',
          //   // 'path/to/another/file.js',
          // ],
        }
      }
    }

  });

  // Register Tasks
  grunt.registerTask('default', ['build', 'browserSync', 'watch']);
  grunt.registerTask('build', [
    'clean:dist',
    'copy:uswds',
    'clean:uswds_main',
    'copy:fonts',
    'copy:img',
    'sass',
    'postcss',
    'prettify',
    'browserify',
    'lint'
  ]);

  grunt.registerTask('lint', 'scsslint');
  grunt.registerTask('test', 'default', function () { grunt.log.writeln('Test that the app runs');});

};
