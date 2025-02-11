//Получаем имя папки проекта
import * as nodePath from "path";
export const rootFolder = nodePath.basename(nodePath.resolve());

//Путь исходных файлов и путь результирующих файлов
export const distFolder = "assets";
export const srcFolder = "src";
export const path = {
  dist: {
    html: `${distFolder}/`,
    styles: `${distFolder}/css/`,
    scripts: `${distFolder}/js/`,
    images: `${distFolder}/img/`,
    fonts: `${distFolder}/fonts/`,
  },
  src: {
    html: `${srcFolder}/*.html`,
    pug: `${srcFolder}/pug/pages/*.pug`,
    libsStyles: `${srcFolder}/scss/libs/*.css`,
    styles: `${srcFolder}/scss/styles.scss`,
    scripts: `${srcFolder}/js/index.js`,
    libsScripts: `${srcFolder}/js/libs/*.js`,
    images: `${srcFolder}/img/**/*.{jpg,png,svg,gif,ico,webp}`,
    imagesWebp: `${srcFolder}/img/**/*.{jpg,jpeg,png}`,
    fonts: `${srcFolder}/fonts/`,
    favIcon: `${srcFolder}/fav.svg`,
  },
  watch: {
    js: `${srcFolder}/js/**/*.js`,
    scss: `${srcFolder}/scss/**/*.scss`,
    pug: `${srcFolder}/pug/**/*.pug`,
    images: `${srcFolder}/img/**/*.{jpg,jpeg,png,svg,gif,ico,webp}`,
  },
};