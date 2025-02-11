// import babel from "gulp-babel";
// import concat from "gulp-concat";
// import uglify from "gulp-uglify";
// import sourcemaps from "gulp-sourcemaps";
// import size from "gulp-size";
// import browsersync from "browser-sync";
import webpack from 'webpack-stream';
import browsersync from "browser-sync";


export function scripts() {
  return app.gulp
    .src(app.path.src.scripts)
    .pipe(
      webpack({
        mode: 'production',
        output: {
          filename: 'index.min.js',
        },
      }),
    )
    .pipe(app.gulp.dest(app.path.dist.scripts))
    .pipe(browsersync.stream());
}
