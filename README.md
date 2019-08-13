# Dublin apps
Верстка макета dublin apps.

## Требования
- node v6.7.0
- npm v3.10.3

## Технологии
### CSS
- [PostCSS](http://postcss.org/)
 - [postcss-import](https://github.com/postcss/postcss-import)
 - [postcss-preset-env](https://preset-env.cssdb.org/)
 - [postcss-advanced-variables](https://github.com/jonathantneal/postcss-advanced-variables)
 - [postcss-svg-inline](https://github.com/TrySound/postcss-inline-svg)
 - [postcss-short](https://github.com/jonathantneal/postcss-short)
- [css-mqpacker](https://github.com/hail2u/node-css-mqpacker)
- [cssnano](http://cssnano.co/)

### HTML
- [Pug](https://pugjs.org/api/getting-started.html)

## Поддержка браузеров
Автопрефиксер настроен под использование Flexbox Layout и на следующие браузеры:
- 3 последние версии современных браузеров. На момент написания это:
 - IE Edge 13+
 - Chrome 58+
 - FireFox 53+
 - Safari 8+
 - Opera 45+
- IE 11+

## Установка
Устонавливаем необходимые модули:
```
npm i
```

## Структура проекта
### _blocks
Содержит в себе "блоки", имена папок и файлов в них должны быть одинаковые.

### _images
Папка для изображений которые используются встраиванием непосредственно в HTML или CSS.

### _pages
Аналогично _blocks.
**Исключение:** Если в проекте используется общий файл стилей, то он должен находится тут: `_pages/common/common.css`.

### fonts
Папка для шрифтов. Все файлы каждого начертания шрифта должны находиться в отдельных папках и иметь одинаковые имена вместе с папкой в которой находятся.

### images
Папка для изображений.

### scripts
Папка для скриптов.

### stylesheets
Папка для стилей. Должна содержать в себе 2 вида CSS файла. Оригинальный и минимизированный с префиксом `.min`.

## Сборка проекта при помощи Gulp
Все таски по которым идет сборка проекта находятся в файле `gulpfile.js`.

### Gulp таски
#### `$ gulp go`
1. Запускает сервер.
2. Следит за изменениями всех файлов находящихся в папках `_blocks` и `_pages`.
3. Собирает CSS файлы из папок `_pages/имя-страницы` и кладет в папку `stylesheets`.
4. Минимизирует полученные CSS файлы и кладет рядом с оригиналами.
5. Собирает HTML файлы из папок `_pages/имя-страницы` и кладет в корень проекта.
6. Выравнивает отступы в полученных HTML файлах.

#### `$ gulp go -page index`
Помогает ускорить сборку за счет того, что собирается только обна страница.
1. Запускает сервер.
2. Следит за изменениями всех файлов находящихся в папке `_blocks` и **только** за `_pages/index.pug` и `_pages/index.сss`, все остальные файлы из папки `_pages` игнорируются.
3. Собирает CSS файл из файла `_pages/index/index.css` и кладет в папку `stylesheets`.
4. Минимизирует полученный CSS файл и кладет рядом с оригиналом.
5. Собирает HTML файл из файла `_pages/index/index.pug` и кладет в корень проекта.
6. Выравнивает отступы в полученных HTML файлах.

*`index` указан для примера, вместо него может быть любое название страницы.*

#### `$ gulp go -page index -style common`
Помогает ускорить сборку за счет того, что собирается только обна страница.
`-style common` следует использовать если на проекте общий CSS файл для всех страниц.
1. Запускает сервер.
2. Следит за изменениями всех файлов находящихся в папке `_blocks` и **только** за `_pages/index.pug` и `_pages/common/common.сss`, все остальные файлы из папки `_pages` игнорируются .
3. Собирает CSS файл из файла `_pages/common/common.css` и кладет в папку `stylesheets`.
4. Минимизирует полученный CSS файл и кладет рядом с оригиналом.
5. Собирает HTML файл из файла `_pages/index/index.pug` и кладет в корень проекта.
6. Выравнивает отступы в полученных HTML файлах.

*`index` указан для примера, вместо него может быть любое название страницы.*

#### `$ gulp build`
Финальная сборка перед коммитом.
1. Собирает CSS файлы из папок `_pages/имя-страницы` и кладет в папку `stylesheets`.
2. Минимизирует полученные CSS файлы и кладет рядом с оригиналами.
3. Собирает HTML файлы из папок `_pages/имя-страницы` и кладет в корень проекта.
4. Выравнивает отступы в полученных HTML файлах.

😊

Приятного кодинга!
