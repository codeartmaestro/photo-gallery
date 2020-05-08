module.exports = function (grunt) {
   grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),
      concat: {
         js: {
            src: ['src/js/libs/*.js', 'src/js/app.js'],
            dest: 'build/js/script.js',
         },
         css: {
            src: ['src/css/**/*.css'],
            dest: 'build/css/style.css',
         },
      },
      uglify: {
         build: {
            src: 'build/js/script.js',
            dest: 'build/js/script.min.js',
         },
      },
      jshint: {
         all: ['Gruntfile.js', 'src/js/app.js'],
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
                  dest: 'src/css/',
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
      sprite: {
         all: {
            src: 'src/assets/icon/*.png',
            dest: 'build/assets/icon/_sprites.png',
            destCss: 'src/css/sprites.css',
         },
      },
      responsive_images: {
         options: {
            engine: 'im',
            newFilesOnly: true,
            size: [
               { name: 'small', width: 320 },
               { name: 'medium', width: 640 },
               { name: 'large', width: 1024 },
               {
                  name: 'large',
                  width: 2000,
                  suffix: '_x2',
                  quality: 60,
               },
            ],
         },
         files: {
            expand: true,
            cwd: 'zarchive/img-full',
            src: ['**/*.{png,jpg,gif}'],
            dest: 'build/assets/full/',
         },
      },
      copy: {
         dev: {
            files: [
               {
                  expand: true,
                  cwd: 'src/assets/icon',
                  src: ['**/*.{svg,jpg,png}'],
                  dest: 'build/assets/icon',
               },
            ],
         },
      },
      htmlmin: {
         dist: {
            options: {
               removeComments: true,
               collapseWhitespace: true,
            },
            files: [
               {
                  expand: true,
                  cwd: 'src',
                  src: ['*.html'],
                  dest: 'build',
               },
            ],
         },
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
   grunt.loadNpmTasks('grunt-contrib-sass');
   grunt.loadNpmTasks('grunt-contrib-cssmin');
   grunt.loadNpmTasks('grunt-postcss');
   grunt.loadNpmTasks('grunt-responsive-images');
   grunt.loadNpmTasks('grunt-contrib-copy');
   grunt.loadNpmTasks('grunt-spritesmith');
   grunt.loadNpmTasks('grunt-contrib-htmlmin');
   grunt.loadNpmTasks('grunt-contrib-watch');

   grunt.registerTask('default', [
      'htmlmin',
      'concat:js',
      'uglify',
      'sass',
      'concat:css',
      'postcss',
      'cssmin',
      'copy',
      'sprite',
      'responsive_images',
      'jshint',
   ]);
   grunt.registerTask('css', ['sass', 'concat:css', 'postcss', 'cssmin']);
   grunt.registerTask('js', ['jshint', 'concat:js', 'uglify']);
   grunt.registerTask('img', ['copy', 'sprite', 'responsive_images']);
   grunt.registerTask('html', ['htmlmin']);
};
