var gulp =require('gulp')
    less=require('gulp-less')
    cleanCSS = require('gulp-clean-css')
    concatCss = require('gulp-concat-css');
var browserSync = require('browser-sync').create();
var LessPluginAutoPrefix = require('less-plugin-autoprefix'),
    autoprefixPlugin = new LessPluginAutoPrefix({browsers: ["last 20 versions"]});


    /**
     * less
     */
gulp.task('less',function(){
    
        console.log('rewrite', (new Date()).getMinutes());
        return gulp.src('./app/less/*.less')
            .pipe(less({ plugins: [autoprefixPlugin] }))
            .pipe(cleanCSS({compatibility: 'ie8'}))
            .pipe(concatCss("style.css"))
            .pipe(gulp.dest('./app/css'))
            .pipe(browserSync.stream());
    
});
/**browsersync
 * 
 */
gulp.task('serve',['less'],function(){
    browserSync.init({
        server:"./app"
    });
    gulp.watch("app/less/*.less",['less']);
    gulp.watch("app/*.html").on("change",browserSync.reload);

});
gulp.task('default',['serve']);