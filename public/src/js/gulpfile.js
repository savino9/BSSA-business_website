// Include gulp
var gulp = require('gulp');
// Include Our Plugins
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');

var browserSync = require('browser-sync').create();

// Compile Our Sass
gulp.task('sass', function() {
  return gulp.src(['src/scss/*.scss'])
    .pipe(sass())
    .pipe(gulp.dest('src/css'))
    // pipe(rename({suffix: '.min'}))
    .pipe(browserSync.stream());
});

// Concatenate & Minify JS
// gulp.task('scripts', function() {
//     return gulp.src('node_modules/bootstrap/js/*.js')
//         .pipe(concat('all.js'))
//         .pipe(gulp.dest('dist'))
//         .pipe(rename('all.min.js'))
//         .pipe(uglify())
//         .pipe(gulp.dest('dist/js'));
// });

// Static server 
gulp.task('serve',  function() {
	browserSync.init({
		server: "./src",
		watch: true
	});	
  // gulp.watch("scss/**/*.scss", ['sass']);
  // gulp.watch("public/*.html").on('change', browserSync.reload);	
});

// Watch File change
gulp.task('watch', function() {
  gulp.watch("scss/**/*.scss", ['sass']); 
  gulp.watch('src/css/*.css');
  // gulp.watch('src/js/*.js');
  gulp.watch('src/*.html').on('change', browserSync.reload);
  // gulp.watch('src/img/*', gulp.series('images'));
});

browserSync.watch("css/*.css", function (event, file) {
    if (event === "change") {
        bs.reload("*.css");
    }
});

// Default task
gulp.task('default', gulp.series('sass','serve'));
