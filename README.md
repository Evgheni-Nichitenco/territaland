### Новый штурм редизайна шаблона Территы, начат 13.11.2017

## Самое подробрное и полное руководство по запуску проектов

01. Создаем директорию проекта
02. Открываем в VSCod папку проекта (или в JB WebStorm)
03. Создаем файл .gitignore
04. Создаем инициализируем гит:  **git init**
05. Делаем первый коммит **First commit**
06. Создаем удаленный репозиторий на Гитхабе или Битбукете
07. Связываем удаленный и локальный репозитории и делаем первый **push**,
отправляя первый уже сделанный коммит в удаленный репозиторий.
08. Проверка установки Нод: **node -v**
09. Иницилизация NPM: **npm init**. При этом в проекте появляется файл package.json
10. Установка npm-пакетов. Два варианта:  

a. Копируем из другого проекта из файла **package.json** строчки со всех их содержимым:

```
"devDependencies": {},

"dependencies": {},

"optionalDependencies": {}
```

И затем запускаем команду **npm install --save-dev**. Менеджер пакетов установит
все пакеты, которые там записаны.

b. Поочередно ставим нужные пакеты:

```
npm install gulpjs/gulp-cli#4.0 --sav-dev

npm install gulp-pug --save-dev

npm install gulp-sass --save-dev

npm install rimraf --save-dev

npm install browser-sync --save-dev  
```  

11. Проверить установленные пакеты и их версии можно командами, например:

```
gulp -v

npm npm browser-sync -v

npm gulp-pug -v
```  

## Подробнее об установке пакетов:

12. Все пакеты ставим локально, с помщью **--save-dev**

13. Непосредственно сам *gulp*

    ```
    npm install gulpjs/gulp#4.0 --save-dev
    ```

14. Пакет *browser-sync* для синхронизации с браузером

    ```
    npm install browser-sync --save-dev
    ```

15. Пакет *gulp-pug* язык разметки pug

    ```
    npm install gulp-pug --save-dev  
    ```

16. Пакет "gulp-sass* препроцессор

    ```
    npm install gulp-sass --save-dev  
    ```

17. Создаем файл **gulpile.js**. Подключаем Галп в файле командой

    ```
    const gulp = require('gulp');
    ```

18. Подключаем browser-sync

    ```
    const browserSync = require('browser-sync').create();
    ```

    Плюс копируем код для этого плагина, отсюда: https://browsersync.io/docs/gulp
    Указываем порт 9000.  
    Указываем какую папку надо следить: **build** 
    Указать какие файлы следить в папке. 
    Указать, какую задачу выполнять (reload -перезагрузка) 
    В строчке gulp.task('browser-sync') меняем название сервера с 'browser-sync'
    на 'start' как более удобное.

19. Проверяем работу сервера. В папке build создаем файлы index.htm, styles.css. Запускаем сервер командой 'gulp start', где start - измененное называние сервера. Вписываем стили с файл CSS, сохраняем, и наблюдаем изменения в браузере.

20. Вставляем код pug-компилятора, отсюда: https://www.npmjs.com/package/gulp-pug

21. Вписываем в код необходимые параметры: точку входа, несжатый код HTML на выходе, и папку, куда будет код складываться.

22. Запустить команду 

    ```
    gulp templates:compile 
    ```

    для проверки того, что *pug* компилирует как надо.

24. По той же схеме устанавливаем плагин **gulp-sasse**, отсюда: https://www.npmjs.com/package/gulp-sass

25. Устанавливаем плагин **gulp.spritesmith** для работы со спрайтами, отсюда: https://www.npmjs.com/package/gulp.spritesmith

26. Устанавливаем плагин **rimraf** для очистки мусора в папке *build* при различных изменениях, 
отсюда: https://www.npmjs.com/package/rimraf

27. Создаем задачу для копирования картинок в папку **build**

28. Создаем задачу для копирования шрифтов в папку **build**

29. Ставим "вотчи" (watch) для слежение изменения файлов SCSS и HTML для произведения компиляции.

38. Делаем таск (задачу для автоматического выполнения всех поставленных задач)

31. Чтобы работал таск **gulp.parallel** ставим 4-ю версию Галпа. Если ее нет,
    для этого из **pacage.json** удаляем запись о третьей версии ("gulp": "^3.9.1",)
    а также удаляем папку **node_modules**.
    Далее для установки версии пишем в консоли 

    ```
    npm install gulpjs/gulp#4.0 --save-dev
    ```

32. После установки Галпа смотрим запись в **pacage.json** что установлена четвертая версия. После этого по новой ставим нужные нам пакеты проекта командой

    ```
    npm install
    ```

Галп прочтет записи в файле **gulpfile.js** и установит прописанные там пакеты.

38. В файле **package.json** в разделе "Компиляция CSS" устанавливаем параметр
сжатия файла, и ставим плагин **gulp-rename** (сейчас не сделал для наглядности изучения).

39. В файл  **pacage.json** вписываем алиас *"start": "gulp"* для удобства запуска Галпа.

40. P.S. Вчера обновился Нод, после чего пакет gulp-sass перестал работать.
Вместо него поставил **gulp-ruby-sass**. Пока полет нормальный

------
## Инструкция по правильной установки Галпа 4-й версии

```
# Uninstall previous Gulp installation and related packages, if any
$ npm rm gulp -g
$ npm rm gulp-cli -g
$ cd [your-project-dir/]
$ npm rm gulp --save-dev
$ npm rm gulp --save
$ npm rm gulp --save-optional
$ npm cache clean

# Install the latest Gulp CLI tools globally
$ npm install gulpjs/gulp-cli -g

# Install Gulp 4 into your project from 4.0 GitHub branch as dev dependency
$ npm install gulpjs/gulp#4.0 --save-dev

# Check the versions installed. Make sure your versions are not lower than shown.
$ gulp -v
```

## gulp-autoprefixer

Поставил этот плагин https://www.npmjs.com/package/gulp-autoprefixer

Теперь будет поддержка старых браузеров.
