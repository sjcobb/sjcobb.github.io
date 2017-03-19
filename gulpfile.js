// Gulp
var gulp = require('gulp');

// Sass/CSS stuff
var sass = require('gulp-sass');

//

// compile all your Sass
	gulp.task('sass', function (){
		gulp.src(['./sass/*.scss'])
			.pipe(sass({
				includePaths: ['./sass'],
				outputStyle: 'expanded'
			}))
			.pipe(gulp.dest('./css'))

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