let gulp = require("gulp");
let less = require("gulp-less");
let autoprefixer = require("gulp-autoprefixer");
let cleanCSS = require("gulp-clean-css");
let sourcemaps = require("gulp-sourcemaps");
let del = require("del");
let browserSync = require("browser-sync");
let svgstore = require("gulp-svgstore");
let svgmin = require("gulp-svgmin");
let path = require("path");
let inject = require("gulp-inject");
let rename = require("gulp-rename");

gulp.task("svgstore", () => {
    let svgs = gulp.src("src/assets/themes/base/icons/*.svg")
        .pipe(svgmin((file) => {
            let prefix = path.basename(file.relative, path.extname(file.relative));
            return {
                plugins: [{
                    cleanupIDs: {
                        prefix: prefix + "-",
                        minify: true
                    }
                }]
            };
        }))
        .pipe(rename({prefix: "icon-"}))
        .pipe(svgstore({inlineSvg: true}));


    function fileContents (filePath, file) {
        return file.contents.toString();
    }

    return gulp
        .src("src/*.html")
        .pipe(inject(svgs, { transform: fileContents }))
        .pipe(gulp.dest("src"));
});

gulp.task("markup", () => {
    return gulp.src("src/*.html")
        .pipe(gulp.dest("dist"))
        .pipe(browserSync.reload({stream: true}));
});

gulp.task("images", () => {
    return gulp.src("src/assets/themes/base/images/**/*.*", {base: "src/assets/themes/base"})
        .pipe(gulp.dest("dist"))
        .pipe(browserSync.reload({stream: true}));
});

gulp.task("less", () => {
    return gulp.src("src/assets/themes/base/styles/base.less")
        .pipe(sourcemaps.init())
        .pipe(less())
        .pipe(autoprefixer({
            browsers: [
                "last 2 versions",
                "safari 5",
                "ie 10",
                "ie 11"
            ],
            cascade: true
        }))
        .pipe(cleanCSS())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest("dist"))
        .pipe(browserSync.reload({stream: true}));
});

gulp.task("clean", () => {
    return del("dist");
});

gulp.task("bs", () => {
    browserSync({
        server: {
            baseDir: "dist"
        },
        startPath: "./yandex.html",
        port: 9191,
        files: [
            "./*.html"
        ]
    });
});

gulp.task("watch", ["bs", "less", "markup", "images"], () => {
    gulp.watch("src/assets/themes/base/styles/**/*.less", ["less"]);
    gulp.watch("src/*.html", ["markup"]);
    gulp.watch("src/assets/themes/base/images/**/*.*",  ["images"]);
});

gulp.task("dev", ["clean", "watch"]);

gulp.task("default", ["dev"]);