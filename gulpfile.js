const { src, dest } = require("gulp");
const uswds = require("@uswds/compile");

uswds.settings.version = 3;

/*
----------------------------------------
PATHS
----------------------------------------
- All paths are relative to the
  project root
- Don't use a trailing `/` for path
  names
----------------------------------------
*/

// Project Sass source directory
uswds.paths.dist.theme = './_sass';

// Images destination
uswds.paths.dist.img = './assets/uswds/img';

// Fonts destination
uswds.paths.dist.fonts = './assets/uswds/fonts';

// Javascript destination
uswds.paths.dist.js = './assets/uswds/js';

// Compiled CSS destination
uswds.paths.dist.css = './assets/uswds/css';

// Swagger UI dist destination
const swaggerUiDest = './assets/swaggerui-dist';

/*
----------------------------------------
TASKS
----------------------------------------
*/

// Copy Swagger UI dist files from node_modules to the assets folder
function copySwaggerUi() {
  return src('./node_modules/swagger-ui/dist/**/*').pipe(dest(swaggerUiDest));
}

exports.copySwaggerUi = copySwaggerUi;
exports.compile = uswds.compile;
exports.compileIcons = uswds.compileIcons;
exports.compileSass = uswds.compileSass;
exports.copyAll = uswds.copyAll;
exports.copyAssets = uswds.copyAssets;
exports.copyFonts = uswds.copyFonts;
exports.copyImages = uswds.copyImages;
exports.copyJS = uswds.copyJS;
exports.copyTheme = uswds.copyTheme;
exports.default = uswds.watch;
exports.init = uswds.init;
exports.updateUswds = uswds.updateUswds;
exports.watch = uswds.watch;
