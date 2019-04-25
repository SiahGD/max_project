var gulp = require("gulp");

var browserSync = require("browser-sync").create();

function reload() {
    browserSync.reload();
}

function watch() {
    reload();
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
}

exports.start = watch