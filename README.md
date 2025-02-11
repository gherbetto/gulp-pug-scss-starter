## Build functionality:

- PUG template engine
- SCSS preprocessor compilation
- Automatic CSS prefixing
- CSS minification
- ECMAScript 2015+ code conversion to backwards compatible JavaScript using Babel
- JavaScript minification
- Combining multiple JavaScript files into one
- Image compression
- Copying files from libs folders
- Converting images to .webp format
- Tracking new images that have not yet been compressed
- Converting fonts to woff, woff2 formats
- Tracking file changes and automatically starting a rebuild
- Generating SourceMaps
- Displaying file sizes in the terminal
- Local server with automatic page refresh when files change
- Creating a .zip archive of the project

## Used NPM packages:

- ["@babel/core"](https://www.npmjs.com/package/@babel/core): Babel core
- ["@babel/preset-env"](https://www.npmjs.com/package/@babel/preset-env): Babel compilation preset
- ["browser-sync"](https://www.npmjs.com/package/browser-sync): Automatic site refresh when files change
- ["del"](https://www.npmjs.com/package/del): Delete directories and files
- ["gulp"](https://www.npmjs.com/package/gulp): Gulp bundler
- ["gulp-autoprefixer"](https://www.npmjs.com/package/gulp-autoprefixer): Automatic CSS prefixing
- ["gulp-babel"](https://www.npmjs.com/package/gulp-babel): Converts Java Script to the old standard
- ["gulp-clean-css"](https://www.npmjs.com/package/gulp-clean-css): Minification and optimization of CSS files
- ["gulp-concat"](https://www.npmjs.com/package/gulp-concat): Combining several files into one
- ["gulp-fonter"](https://www.npmjs.com/package/gulp-fonter): Converting fonts to .tff and woff formats
- ["gulp-htmlmin"](https://www.npmjs.com/package/gulp-htmlmin): Minification of HTML files
- ["gulp-imagemin"](https://www.npmjs.com/package/gulp-imagemin): Compress images
- ["gulp-newer"](https://www.npmjs.com/package/gulp-newer): Track only new files
- ["gulp-flatten"](https://www.npmjs.com/package/gulp-flatten): Remove or replace file paths
- ["gulp-rename"](https://www.npmjs.com/package/gulp-rename): Rename files
- ["gulp-sass"](https://www.npmjs.com/package/gulp-sass): Compile Sass and Scss files
- ["gulp-size"](https://www.npmjs.com/search?q=gulp-size): Display information about file sizes in the terminal
- ["gulp-sourcemaps"](https://www.npmjs.com/package/gulp-sourcemaps): Code line map for developer tools
- ["gulp-ttf2woff2"](https://www.npmjs.com/package/gulp-ttf2woff2): Font conversion from .ttf format to woff2
- ["gulp-uglify"](https://www.npmjs.com/package/gulp-uglify): JavaScript code compression and optimization
- ["gulp-zip"](https://www.npmjs.com/package/gulp-zip): Create a .zip archive
- ["sass"](https://www.npmjs.com/package/sass): Sass compiler
- ["gulp-webp"](https://www.npmjs.com/package/gulp-webp): Convert images to WebP

## Build commands:

- `gulp`: processes html, css, js files, optimizes new photos and moves everything to the **dist/** folder (but without fonts)
- `gulp fonts`: converts fonts to woff, woff2 formats and moves all this to the **dist/fonts/** folder
- `gulp zip`: creates a .zip archive of the dist folder (the name is taken from the main project folder) and places it in the main project folder along with the dist and src folders
- `gulp webp`: converts images to .webp format.