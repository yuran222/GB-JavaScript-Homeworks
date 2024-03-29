// Задание 1
// Дан объект numbers. Необходимо в консоль вывести все значения больше или равные 3.

 const numbers = {
        keyin1: 1,
        keyin2: 2,
        keyin3: 3,
        keyin4: 4,
        keyin5: 5,
        keyin6: 6,
        keyin7: 7,
        }
    
const arrayNumbers = Object.values(numbers);
    
console.log (arrayNumbers)
    
function MoreThanThree(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] >= 3) {
            console.log(array[i])
        }
    }
}
MoreThanThree(arrayNumbers);
    
// Задание 2
// Необходимо из объекта, который лежит в константе post вывести значения, к которым приписан комментарий, в консоль.
    
const post = {
    author: "John", // вывести этот текст
    postId: 23,
    comments: [
    {
    userId: 10,
    userName: "Alex",
    text: "lorem ipsum",
    rating: {
    likes: 10,
    dislikes: 2, // вывести это число
    },
    },
    {
    userId: 5, // вывести это число
    userName: "Jane",
    text: "lorem ipsum 2", // вывести этот текст
    rating: {
    likes: 3,
    dislikes: 1,
    },
    },
    ],
    };
    
        console.log(post.author);
        console.log(post.comments[0].rating.dislikes);
        console.log(post.comments[1].userId);
        console.log(post.comments[1].text);
        
    
        // Задание 3
        // Дан массив products, необходимо цену каждого продукта уменьшить на 15% используя метод forEach.
    
        const products1 = [
        {
        id: 3,
        price: 200,
        },
        {
        id: 4,
        price: 900,
        },
        {
        id: 1,
        price: 1000,
        },
        ];
    
        products1.forEach(element => {
            element.price = element.price * 0.85;
            console.log(element.price);
        });


    
        // Задание 4
        // 1. Необходимо вывести в консоль массив продуктов в котором есть хоть одна фотография используя метод filter. Исходные данные - массив products.
        // 2. Необходимо отсортировать массив products используя метод sort по цене, начиная с самой маленькой, заканчивая самой большой ценой, после чего вывести отсортированный массив в консоль.
    
        
        const products = [
        {
        id: 3,
        price: 127,
        photos: [
        "1.jpg",
        "2.jpg",
        ],
        },
        {
        id: 5,
        price: 499,
        photos: [],
        },
        {
        id: 10,
        price: 26,
        photos: [
        "3.jpg",
        ],
        },
        {
        id: 8,
        price: 78,
        },
        ];
    
        const photos = products.filter(array => array.photos != 0 && array.photos);
        console.log (photos);
    
        products.sort (function(x,y){ 
        return x.price - y.price
        });
    
        console.log(products);
    
