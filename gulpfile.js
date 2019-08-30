"use strict";

const gulp = require("gulp");
const sass = require("gulp-sass");

sass.compiler = require("node-sass");

gulp.task('default', watch);

gulp.task("sass", compilaSass);

function compilaSass() {
  return gulp
    .src("src/sass/*.sass")
    .pipe(sass({ outputStyle: "compressed" }).on("error", sass.logError))
    .pipe(gulp.dest("assets/css"));
}

function watch() {
  gulp.watch("src/sass/*.sass", compilaSass);
}