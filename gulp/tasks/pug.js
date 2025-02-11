import plumber from 'gulp-plumber'
import twig from 'gulp-pug'
import notify from 'gulp-notify'
import browsersync from 'browser-sync'

export function pug(){
    return app.gulp.src(app.path.src.pug)
        .pipe(plumber({
            errorHandler: notify.onError(function(err){
                return {
                    title: 'Pug',
                    sound: false,
                    message: err.message
                }
            })
        }))
		.pipe(twig({
			pretty: true,
		}))
        .pipe(app.gulp.dest(app.distFolder))
        .pipe(browsersync.stream())
}