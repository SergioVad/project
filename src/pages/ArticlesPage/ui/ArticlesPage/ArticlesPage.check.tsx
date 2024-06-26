// import type { Meta, StoryObj } from '@storybook/react';
// import ArticlesPage, { reducerArticlesPage } from './ArticlesPage';
// import {
//     ArticleBlocksType, ArticleType, ArticlesView, sortByEntities,
// } from '@/entities/Article';
// import { StoreDecorator } from '@/shared/config/decorators/StoreDecorator';

// const meta = {
//     title: 'pages/ArticlesPage',
//     component: ArticlesPage,
//     parameters: {
//     },
//     tags: ['autodocs'],
//     argTypes: {
//     },
// } satisfies Meta<typeof ArticlesPage>;

// export default meta;
// type Story = StoryObj<typeof meta>;

// export const TestComponent: Story = {
//     args: {

//     },
//     decorators: [
//         StoreDecorator(
//             {
//                 ArticlesPage: {
//                     view: ArticlesView.SMALL,
//                     hasMore: false,
//                     page: 1,
//                     _inited: false,
//                     limit: 9,
//                     order: 'asc',
//                     sort: sortByEntities.CREATED,
//                     search: '',
//                     type: ArticleType.ALL,
//                     entities: {
//                         1: {
//                             id: '1',
//                             title: 'Javascript news СВЕЖАЯ',
//                             subtitle: 'Что нового в JS за 2022 год?',
//                             img: 'https://teknotower.com/wp-content/uploads/2020/11/js.png',
//                             views: 1022,
//                             createdAt: '26.04.2022',
//                             type: [
//                                 ArticleType.IT,
//                             ],
//                             user: {
//                                 id: '1',
//                                 username: 'Q',
//                                 role: ['USER'],
//                             },
//                             blocks: [
//                                 {
//                                     id: '1',
//                                     type: ArticleBlocksType.TEXT,
//                                     title: 'Заголовок этого блока',
//                                     paragraphs: [
//                                         'Программа, которую по традиции называют «Hello, world!», очень проста. Она выводит куда-либо фразу «Hello, world!», или другую подобную, средствами некоего языка.',
//                                         'JavaScript — это язык, программы на котором можно выполнять в разных средах. В нашем случае речь идёт о браузерах и о серверной платформе Node.js. Если до сих пор вы не написали ни строчки кода на JS и читаете этот текст в браузере, на настольном компьютере, это значит, что вы буквально в считанных секундах от своей первой JavaScript-программы.',
//                                         'Существуют и другие способы запуска JS-кода в браузере. Так, если говорить об обычном использовании программ на JavaScript, они загружаются в браузер для обеспечения работы веб-страниц. Как правило, код оформляют в виде отдельных файлов с расширением .js, которые подключают к веб-страницам, но программный код можно включать и непосредственно в код страницы. Всё это делается с помощью тега <script>. Когда браузер обнаруживает такой код, он выполняет его. Подробности о теге script можно посмотреть на сайте w3school.com. В частности, рассмотрим пример, демонстрирующий работу с веб-страницей средствами JavaScript, приведённый на этом ресурсе. Этот пример можно запустить и средствами данного ресурса (ищите кнопку Try it Yourself), но мы поступим немного иначе. А именно, создадим в каком-нибудь текстовом редакторе (например — в VS Code или в Notepad++) новый файл, который назовём hello.html, и добавим в него следующий код:',
//                                     ],
//                                 },
//                                 {
//                                     id: '4',
//                                     type: ArticleBlocksType.CODE,
//                                     code: '<!DOCTYPE html>\n<html>\n  <body>\n    <p id="hello"></p>\n\n    <script>\n      document.getElementById("hello").innerHTML = "Hello, world!";\n    </script>\n  </body>\n</html>;',
//                                 },
//                                 {
//                                     id: '5',
//                                     type: ArticleBlocksType.TEXT,
//                                     title: 'Заголовок этого блока',
//                                     paragraphs: [
//                                         'Программа, которую по традиции называют «Hello, world!», очень проста. Она выводит куда-либо фразу «Hello, world!», или другую подобную, средствами некоего языка.',
//                                         'Существуют и другие способы запуска JS-кода в браузере. Так, если говорить об обычном использовании программ на JavaScript, они загружаются в браузер для обеспечения работы веб-страниц. Как правило, код оформляют в виде отдельных файлов с расширением .js, которые подключают к веб-страницам, но программный код можно включать и непосредственно в код страницы. Всё это делается с помощью тега <script>. Когда браузер обнаруживает такой код, он выполняет его. Подробности о теге script можно посмотреть на сайте w3school.com. В частности, рассмотрим пример, демонстрирующий работу с веб-страницей средствами JavaScript, приведённый на этом ресурсе. Этот пример можно запустить и средствами данного ресурса (ищите кнопку Try it Yourself), но мы поступим немного иначе. А именно, создадим в каком-нибудь текстовом редакторе (например — в VS Code или в Notepad++) новый файл, который назовём hello.html, и добавим в него следующий код:',
//                                     ],
//                                 },
//                                 {
//                                     id: '2',
//                                     type: ArticleBlocksType.IMAGE,
//                                     src: 'https://hsto.org/r/w1560/getpro/habr/post_images/d56/a02/ffc/d56a02ffc62949b42904ca00c63d8cc1.png',
//                                     title: 'Рисунок 1 - скриншот сайта',
//                                 },
//                                 {
//                                     id: '3',
//                                     type: ArticleBlocksType.CODE,
//                                     code: "const path = require('path');\n\nconst server = jsonServer.create();\n\nconst router = jsonServer.router(path.resolve(__dirname, 'db.json'));\n\nserver.use(jsonServer.defaults({}));\nserver.use(jsonServer.bodyParser);",
//                                 },
//                                 {
//                                     id: '7',
//                                     type: ArticleBlocksType.TEXT,
//                                     title: 'Заголовок этого блока',
//                                     paragraphs: [
//                                         'JavaScript — это язык, программы на котором можно выполнять в разных средах. В нашем случае речь идёт о браузерах и о серверной платформе Node.js. Если до сих пор вы не написали ни строчки кода на JS и читаете этот текст в браузере, на настольном компьютере, это значит, что вы буквально в считанных секундах от своей первой JavaScript-программы.',
//                                         'Существуют и другие способы запуска JS-кода в браузере. Так, если говорить об обычном использовании программ на JavaScript, они загружаются в браузер для обеспечения работы веб-страниц. Как правило, код оформляют в виде отдельных файлов с расширением .js, которые подключают к веб-страницам, но программный код можно включать и непосредственно в код страницы. Всё это делается с помощью тега <script>. Когда браузер обнаруживает такой код, он выполняет его. Подробности о теге script можно посмотреть на сайте w3school.com. В частности, рассмотрим пример, демонстрирующий работу с веб-страницей средствами JavaScript, приведённый на этом ресурсе. Этот пример можно запустить и средствами данного ресурса (ищите кнопку Try it Yourself), но мы поступим немного иначе. А именно, создадим в каком-нибудь текстовом редакторе (например — в VS Code или в Notepad++) новый файл, который назовём hello.html, и добавим в него следующий код:',
//                                     ],
//                                 },
//                                 {
//                                     id: '8',
//                                     type: ArticleBlocksType.IMAGE,
//                                     src: 'https://hsto.org/r/w1560/getpro/habr/post_images/d56/a02/ffc/d56a02ffc62949b42904ca00c63d8cc1.png',
//                                     title: 'Рисунок 1 - скриншот сайта',
//                                 },
//                                 {
//                                     id: '9',
//                                     type: ArticleBlocksType.TEXT,
//                                     title: 'Заголовок этого блока',
//                                     paragraphs: [
//                                         'JavaScript — это язык, программы на котором можно выполнять в разных средах. В нашем случае речь идёт о браузерах и о серверной платформе Node.js. Если до сих пор вы не написали ни строчки кода на JS и читаете этот текст в браузере, на настольном компьютере, это значит, что вы буквально в считанных секундах от своей первой JavaScript-программы.',
//                                     ],
//                                 },
//                             ],
//                         },
//                         2: {
//                             id: '2',
//                             title: 'Python news',
//                             subtitle: 'Что нового в JS за 2022 год?',
//                             img: 'https://zsfond.ru/wp-content/uploads/2021/03/piton-1-1024x578.jpg',
//                             views: 5204,
//                             createdAt: '26.02.2022',
//                             type: [
//                                 ArticleType.IT,
//                             ],
//                             user: {
//                                 id: '2',
//                                 username: 'W',
//                                 role: ['USER'],
//                             },
//                             blocks: [
//                                 {
//                                     id: '1',
//                                     type: ArticleBlocksType.TEXT,
//                                     title: 'Заголовок этого блока',
//                                     paragraphs: [
//                                         'Программа, которую по традиции называют «Hello, world!», очень проста. Она выводит куда-либо фразу «Hello, world!», или другую подобную, средствами некоего языка.',
//                                         'JavaScript — это язык, программы на котором можно выполнять в разных средах. В нашем случае речь идёт о браузерах и о серверной платформе Node.js. Если до сих пор вы не написали ни строчки кода на JS и читаете этот текст в браузере, на настольном компьютере, это значит, что вы буквально в считанных секундах от своей первой JavaScript-программы.',
//                                         'Существуют и другие способы запуска JS-кода в браузере. Так, если говорить об обычном использовании программ на JavaScript, они загружаются в браузер для обеспечения работы веб-страниц. Как правило, код оформляют в виде отдельных файлов с расширением .js, которые подключают к веб-страницам, но программный код можно включать и непосредственно в код страницы. Всё это делается с помощью тега <script>. Когда браузер обнаруживает такой код, он выполняет его. Подробности о теге script можно посмотреть на сайте w3school.com. В частности, рассмотрим пример, демонстрирующий работу с веб-страницей средствами JavaScript, приведённый на этом ресурсе. Этот пример можно запустить и средствами данного ресурса (ищите кнопку Try it Yourself), но мы поступим немного иначе. А именно, создадим в каком-нибудь текстовом редакторе (например — в VS Code или в Notepad++) новый файл, который назовём hello.html, и добавим в него следующий код:',
//                                     ],
//                                 },
//                             ],
//                         },
//                         3: {
//                             id: '3',
//                             title: 'Kotlin news 2019',
//                             subtitle: 'Что нового в JS за 2022 год?',
//                             img: 'https://miro.medium.com/max/1200/1*FNakkrty3kjOvNU8m5iQfw.png',
//                             views: 94002,
//                             createdAt: '26.02.2019',
//                             type: [
//                                 ArticleType.IT,
//                             ],
//                             user: {
//                                 id: '3',
//                                 username: 'E',
//                                 role: ['USER'],
//                             },
//                             blocks: [
//                                 {
//                                     id: '1',
//                                     type: ArticleBlocksType.TEXT,
//                                     title: 'Заголовок этого блока',
//                                     paragraphs: [
//                                         'Программа, которую по традиции называют «Hello, world!», очень проста. Она выводит куда-либо фразу «Hello, world!», или другую подобную, средствами некоего языка.',
//                                         'JavaScript — это язык, программы на котором можно выполнять в разных средах. В нашем случае речь идёт о браузерах и о серверной платформе Node.js. Если до сих пор вы не написали ни строчки кода на JS и читаете этот текст в браузере, на настольном компьютере, это значит, что вы буквально в считанных секундах от своей первой JavaScript-программы.',
//                                         'Существуют и другие способы запуска JS-кода в браузере. Так, если говорить об обычном использовании программ на JavaScript, они загружаются в браузер для обеспечения работы веб-страниц. Как правило, код оформляют в виде отдельных файлов с расширением .js, которые подключают к веб-страницам, но программный код можно включать и непосредственно в код страницы. Всё это делается с помощью тега <script>. Когда браузер обнаруживает такой код, он выполняет его. Подробности о теге script можно посмотреть на сайте w3school.com. В частности, рассмотрим пример, демонстрирующий работу с веб-страницей средствами JavaScript, приведённый на этом ресурсе. Этот пример можно запустить и средствами данного ресурса (ищите кнопку Try it Yourself), но мы поступим немного иначе. А именно, создадим в каком-нибудь текстовом редакторе (например — в VS Code или в Notepad++) новый файл, который назовём hello.html, и добавим в него следующий код:',
//                                     ],
//                                 },
//                             ],
//                         },
//                     },
//                 },
//             },
//             reducerArticlesPage,
//         ),
//     ],
// };
export default {};
