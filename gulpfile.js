var gulp = require('gulp');
	gutil = require('fancy-log');

gulp.task('log', function() {
	gutil('Workflows are awesome');
});