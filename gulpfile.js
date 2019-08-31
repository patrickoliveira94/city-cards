"use strict";

const gulp = require("gulp");
const sass = require("gulp-sass");
const image = require('gulp-image');

sass.compiler = require("node-sass");

gulp.task('default', watch);
gulp.task("sass", compilaSass);
gulp.task("image", compressImage);

function compilaSass() {
  return gulp
    .src("src/sass/*.sass")
    .pipe(sass({ outputStyle: "compressed" }).on("error", sass.logError))
    .pipe(gulp.dest("assets/css"));
}

function compressImage() {
  return gulp
    .src('src/images/*')
    .pipe(image())
    .pipe(gulp.dest('assets/images'));
}

function watch() {
  gulp.watch("src/sass/*.sass", compilaSass);
  gulp.watch("src/images/*", compressImage);
}