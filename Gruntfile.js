module.exports = function (grunt) {
   
   grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),

      concat: {
         dist: {
            src: [
               'src/js/app.js', 
               'src/js/libs/*.js',
            ],
            dest: 'build/js/script.js',
         },
      },

      uglify: {
         build: {
            src: 'build/js/script.js',
            dest: 'build/js/script.min.js',
         },
      },

      imagemin: {
         dynamic: {
            files: [
               {
                  expand: true,
                  cwd: 'src/assets',
                  src: ['**/*.{png,jpg,gif}'],
                  dest: 'build/assets/',
               },
            ],
         },
      },

      sass: {
         dist: {
            options: {
               style: 'compress',
            },
            files: [
               {
                  // 'src/css/style.css': 'src/sass/**/*.scss',
                  expand: true,
                  cwd: 'src/sass',
                  src: ['**/*.scss'],
                  dest: 'build/css/',
                  ext: '.css',
               },
            ],
         },
      },

      cssmin: {
         target: {
            files: [
               {
                  expand: true,
                  cwd: 'build/css',
                  src: ['*.css', '!*.min.css'],
                  dest: 'build/css',
                  ext: '.min.css',
               },
            ],
         },
      },

      postcss: {
         options: {
            map: true, // inline sourcemaps

            processors: [
               require('pixrem')(), // add fallbacks for rem units
               require('autoprefixer'),
            ],
         },
         dist: {
            src: 'build/css/style.css',
         },
      },

      jshint: {
         all: ['Gruntfile.js', 'src/js/app.js'],
      },
      // =======================================
      watch: {
         scripts: {
            files: ['src/js/**/*.js'],
            tasks: ['concat', 'uglify'],
            options: {
               spawn: false,
            },
         },
         css: {
            files: ['src/sass/**/*.scss'],
            tasks: ['sass', 'postcss', 'cssmin'],
            options: {
               spawn: false,
               livereload: true,
            },
         },
      },
   });

   grunt.loadNpmTasks('grunt-contrib-concat');
   grunt.loadNpmTasks('grunt-contrib-uglify');
   grunt.loadNpmTasks('grunt-contrib-jshint');
   grunt.loadNpmTasks('grunt-contrib-imagemin');
   grunt.loadNpmTasks('grunt-contrib-sass');
   grunt.loadNpmTasks('grunt-contrib-cssmin');
   grunt.loadNpmTasks('grunt-postcss');
   grunt.loadNpmTasks('grunt-contrib-watch');

   grunt.registerTask('default', [
      'concat',
      'uglify',
      'sass',
      'postcss',
      'cssmin',
      'imagemin',
      'jshint',
   ]);
};
