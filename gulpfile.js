let gulp         = require("gulp"),
    less         = require("gulp-less"),
    autoprefixer = require("gulp-autoprefixer"),
    cleanCSS    = require("gulp-clean-css"),
    sourcemaps      = require("gulp-sourcemaps");
    notify      = require("gulp-notify");
    browserSync  = require("browser-sync").create();

gulp.task("index", function() {
    return gulp.src("src/index.html")
        .pipe(gulp.dest("dist"));
});

gulp.task("images", function() {
    return gulp.src("src/assets/themes/base/images/**/*.*", {base: "src/assets/themes/base"})
        .pipe(gulp.dest("dist"));
});

gulp.task("less", function() {
    return gulp.src("src/assets/themes/base/styles/base.less")
        //.pipe(sourcemaps.init())
        .pipe(less())
        .on("error", function() {
            console.log('error in less')
        })
        .pipe(autoprefixer({
            browsers: [
                "last 2 versions",
                "safari 5",
                "ie 10",
                "ie 11"
            ],
            cascade: true
        }))
        .on("error", notify.onError({
            title: "style"
        }))
        .pipe(cleanCSS())
        //.pipe(sourcemaps.write())
        .pipe(gulp.dest("dist"));
});

gulp.task("watch", function() {
    gulp.watch("src/index.html", gulp.series("index"));
    gulp.watch("src/assets/themes/base/images/**/*.*", gulp.series("images"));
    gulp.watch("src/assets/themes/base/styles/**/*.less", gulp.series("less"));
});

gulp.task("default", gulp.series(gulp.parallel("index", "less", "images"), "watch"));