//Импорт задач
import { pug } from "./pug.js";
import { styles } from "./styles.js";
import { scripts } from "./scripts.js";
import { img } from "./img.js";
import browsersync from "browser-sync";

// Отслеживание изменений в файлах и запуск лайв сервера
export function watch() {
  browsersync.init({
    server: {
      baseDir: `./${app.distFolder}`,
    }
  });
  app.gulp.watch(app.path.dist.html).on("change", browsersync.reload);
  app.gulp.watch(app.path.watch.pug, app.gulp.parallel(pug));
  app.gulp.watch(app.path.watch.scss, styles);
  app.gulp.watch(app.path.watch.js, scripts);
  app.gulp.watch(app.path.watch.images, img);
}