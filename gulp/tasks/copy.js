export function copyFav() {
  return app.gulp
    .src(app.path.src.favIcon)
    .pipe(app.gulp.dest(app.path.dist.html));
}

export function copyStylesLibs() {
  return app.gulp
    .src(app.path.src.libsStyles)
    .pipe(app.gulp.dest(`${app.path.dist.styles}/libs/`));
}

export function copyJsLibs() {
  return app.gulp
  .src(app.path.src.libsScripts)
  .pipe(app.gulp.dest(`${app.path.dist.scripts}/libs/`));
}