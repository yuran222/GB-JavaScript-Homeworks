// 1. Поиск в интернете (бесплатные api примеры)
// 2. Найти любые данные, на произвольную тему
// 3. Установить расширение в браузер “JSON viewer”
// 4. Пример найденного json объекта

// 1. Создать файл data.js
// 2. Создать переменную dataInfo
// 3. Добавить несколько данных в dataInfo

// Создать файл index.html
// 2. Подключить data.js
// 3. Добавить блок <div class="content"></div>
// 4. Создать переменную data и добавить в нее JSON parse данные из
// файла data.js
// 5. Вывести в консоль объект data
// 6. С помощью foreach обойти массив data
// 7. Вывести все изображения из данных

const dataInfo = `[
    {

        "activity": "Write a list of things you are grateful for",
        "type": "relaxation",
        "participants": 1,
        "price": 321,
        "link": "https://miridei.com/sucess-ideas/success-secrets/100_veschej_za_kotorye_stoit_byt_blagodarnym_kazhdyj_den/",
        "key": "2062010",
        "accessibility": 0
    },
    {

        "activity": "Learn Kotlin",
        "type": "education",
        "participants": 1,
        "price": 222,
        "link": "https://kotlinlang.org/",
        "key": "3950821",
        "accessibility": 0.8
    
    },
    {

        "activity": "Write a short story",
        "type": "recreational",
        "participants": 1,
        "price": 115,
        "link": "https://blog.selfpub.ru/story",
        "key": "6301585",
        "accessibility": 0.1
    
    },
    {
        "activity": "Take a caffeine nap",
        "type": "relaxation",
        "participants": 1,
        "price": 414,
        "link": "https://medium.com/the-personal-growth-project/what-caffeine-naps-are-and-how-they-work-79b49bf5b489",
        "key": "5092652",
        "accessibility": 0.08
    },
    {

        "activity": "Learn Express.js",
        "type": "education",
        "participants": 1,
        "price": 141,
        "link": "https://expressjs.com/",
        "key": "3943506",
        "accessibility": 0.25
    
    },
    {

        "activity": "Go see a movie in theaters with a few friends",
        "type": "social",
        "participants": 4,
        "price": 3333,
        "link": "https://kinoteatr.ru/sankt-peterburg/",
        "key": "5262759",
        "accessibility": 0.3
    
    }
]`;
