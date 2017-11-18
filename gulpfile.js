const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const pug = require('gulp-pug');
const sass = require('gulp-sass');
const rimraf = require('rimraf');
const autoprefixer = require('gulp-autoprefixer');

/*------ Static server --------*/
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            port: 9000, // Вписан порт с адресом 9000 для браузера
            baseDir: "build" // Папка, которую должен отлеживать browser-sync
        }
    });
    gulp.watch('build/**/*').on('change', browserSync.reload); // За какими файлами следить и при измении перезагружать браузер
});

/*--------- Pug-компилятор ----------*/
gulp.task('templates:compile', function buildHTML() { // Задача Галпа: компилировать шаблон
    return gulp.src('source/template/*.pug') // Путь к шаблону. Точка входа
        .pipe(pug({
            pretty: true // Устанавливаем, что HTML код на выходе будет несжатым
        }))

        .pipe(gulp.dest('build')) // Указание, куда будет складываться скомпилированный код
});

// SASS compile
gulp.task('styles:compile', function () { // Вместо SASS вприсано styles:compile
    return gulp.src('source/styles/main.scss') // Точка входа. Откуда брать файл для компиляции
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('build'));
});

/*---------- Копирование картинок в папку buid -------*/
gulp.task('copy:images', function() {
    return gulp.src('./source/images/**/*.*')
        .pipe(gulp.dest('build/images'));
});

/*----- Очистка от мусора ---------*/
gulp.task('clean', function del(cb) {
    return rimraf('build', cb);
});

/*---------Галп-автопрефиксер------------*/
gulp.task('autoprefixer', () =>
gulp.src('build/main.css')
    .pipe(autoprefixer({
        browsers: ['last 2 versions'],
        cascade: false
    }))
    .pipe(gulp.dest('build'))
);

/* Watchers. Слежение за изменениями */
gulp.task('watch', function() {
    gulp.watch('source/template/**/*.pug', gulp.series('templates:compile')); // За какой папкой следить и какой таск выполнять при изменении
    gulp.watch('source/styles/**/*.scss', gulp.series('styles:compile', gulp.series('autoprefixer')));
});

/* Запуск поставленных задач по умолчанию при запуске Галпа */
gulp.task('default', gulp.series(
    'clean',
    gulp.parallel('templates:compile', 'styles:compile', 'copy:images'),
    gulp.parallel('watch', 'autoprefixer', 'browser-sync')
));
