var gulp =require('gulp')
    less=require('gulp-less')
    cleanCSS = require('gulp-clean-css')
    concatCss = require('gulp-concat-css');
    
var LessPluginAutoPrefix = require('less-plugin-autoprefix'),
    autoprefixPlugin = new LessPluginAutoPrefix({browsers: ["last 20 versions"]});

gulp.task('default',function(){
    return gulp.watch('./app/less/*.less',function(){
        //console.log('rewrite');
        return gulp.src('./app/less/*.less')
            .pipe(less({ plugins: [autoprefixPlugin] }))
            .pipe(cleanCSS({compatibility: 'ie8'}))
            .pipe(concatCss("style.css"))
            .pipe(gulp.dest('./app/css'));
    });
});
