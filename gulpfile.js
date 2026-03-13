//Импорт модулей
import gulp from "gulp";

//Импорт путей
import { path } from "./gulp/config/path.js";
import { distFolder } from "./gulp/config/path.js";
import { srcFolder } from "./gulp/config/path.js";

//Передача значений в глобальную переменную
global.app = {
  path: path,
  gulp: gulp,
  distFolder: distFolder,
  srcFolder: srcFolder,
};

//Импорт задач
import { clean } from "./gulp/tasks/clean.js";
import { styles } from "./gulp/tasks/styles.js";
import { scripts } from "./gulp/tasks/scripts.js";
import { img } from "./gulp/tasks/img.js";
import { watch } from "./gulp/tasks/watch.js";
import { pug } from "./gulp/tasks/pug.js";
import { copyFav } from "./gulp/tasks/copy.js";
import { copyJsLibs } from "./gulp/tasks/copy.js";
import { copyStylesLibs } from "./gulp/tasks/copy.js";
import { cleanFonts } from "./gulp/tasks/clean.js";
import { otfConvert } from "./gulp/tasks/fonts.js";
import { ttfConvert } from "./gulp/tasks/fonts.js";
import { exportFonts } from "./gulp/tasks/fonts.js";
import { zipRun } from "./gulp/tasks/zip.js";
import { webpRun } from "./gulp/tasks/webp.js";

// Отдельные задачи (чтобы работали команды вида `gulp styles`)
gulp.task("clean", clean);
gulp.task("pug", pug);
gulp.task("styles", styles);
gulp.task("scripts", scripts);
gulp.task("img", img);
gulp.task("copy", gulp.parallel(copyFav, copyStylesLibs, copyJsLibs));

// Сборка без watch
gulp.task(
  "build",
  gulp.series(
    clean,
    gulp.parallel(copyFav, copyStylesLibs, copyJsLibs),
    gulp.parallel(pug, styles, scripts, img, webpRun)
  )
);

//Выполнение сценария по умолчанию
gulp.task(
  "default",
  gulp.series(
    clean,
    gulp.parallel(copyFav, copyStylesLibs, copyJsLibs),
    gulp.parallel(pug, styles, scripts, img, webpRun),
    watch
  )
);

//Сценарий обработки шрифтов
gulp.task(
  "fonts",
  gulp.series(cleanFonts, otfConvert, ttfConvert, exportFonts)
);

//Cценарий архивирования готовой версии проекта
gulp.task("zip", zipRun);

//Сценарий конвертации изображений в формат .webp
gulp.task("webp", webpRun);
