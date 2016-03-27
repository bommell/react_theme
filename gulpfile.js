var gulp = require('gulp');
var webpack = require('gulp-webpack');
var browserSync = require('browser-sync').create();
var reload = browserSync.reload;


gulp.task('webpack', function(){
	return gulp.src('src/js/script.js')
		.pipe(webpack(require('./webpack.config.js')))
		.pipe(gulp.dest('dist/'))
		.pipe(reload({stream:true}));
});


gulp.task('browser-sync', function(){
	var files = [
		'./src/scss/**/*scss',
		'./*.php',
		'./src/js/**/*.js'
	];
	browserSync.init(files, {
		proxy: 'http://localhost:8888/wp_react/'	
	})
});

gulp.task('watch', function(){
	gulp.watch('src/js/**/*.js', ['webpack']);
	gulp.watch('src/scss/**/*.scss', ['webpack']);
});

gulp.task('default', ['webpack', 'browser-sync', 'watch']);