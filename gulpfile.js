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
    return gulp.src(['node_modules/bootstrap/scss/bootstrap.scss','src/scss/*.scss'])
        .pipe(sass())
        .pipe(gulp.dest('src/css'))
        .pipe(browserSync.stream());
});

// Concatenate & Minify JS
gulp.task('scripts', function() {
    return gulp.src('node_modules/bootstrap/js/*.js')
        .pipe(concat('all.js'))
        .pipe(gulp.dest('dist'))
        .pipe(rename('all.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'));
});

// Static server 
gulp.task('serve', ['sass'], function() {
	browserSync.init({
		server: "./src",
		watch: true
	});			
	gulp.watch(['node_modules/bootstrap/scss/bootstrap.scss', 'src/scss/*.scss'], ['sass']);
	gulp.watch("/src/*.html").on('change', browserSync.reload);
});

gulp.task('default',
    gulp.series(['sass', 'scripts', 'serve'])
);

// const defaultTasks = gulp.parallel(serve, watch)
// export default defaultTasks
