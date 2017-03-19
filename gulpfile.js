// Deep Breaths //
//////////////////

// Gulp
var gulp = require('gulp');

// Sass/CSS stuff
var sass = require('gulp-sass');
var prefix = require('gulp-autoprefixer');
var minifycss = require('gulp-minify-css');

// JavaScript
var uglify = require('gulp-uglify');

//

// compile all your Sass
	gulp.task('sass', function (){
		gulp.src(['./sass/*.scss'])
			.pipe(sass({
				includePaths: ['./sass'],
				outputStyle: 'expanded'
			}))
			.pipe(prefix(
				"last 1 version", "> 1%", "ie 8", "ie 7"
				))
			.pipe(gulp.dest('./css'))
			//.pipe(minifycss())
			//.pipe(gulp.dest('./prod/css'));
	});

// Uglify JS
	gulp.task('uglify', function(){
		gulp.src('./dev/js/*.js')
			.pipe(uglify())
			.pipe(gulp.dest('./prod/js'));
	});

gulp.task('default', function(){

	// watch me getting Sassy
	gulp.watch("./sass/**/*.scss", function(event){
		gulp.run('sass');
	});
	
	//gulp.watch("./dev/js/**/*.js", function(event){
	//	gulp.run('uglify');
	//});
	
	//gulp.watch("./dev/img/**/*", function(event){
	//	gulp.run('imagemin');
	//	gulp.run('svgmin');
	//});

});