function generatePromo(){
    const productPopcrons = ["butttered popcron", 
        "caramel popcron", 
        "Takis popcron", 
        "chili popcron",
        "regular popcorn"
    ];
    const drinks = ["cola drink", 
        "apple soda",
        "apple Ice",
        "mango juice",
        "peach juice"
    ];
    const candies = ["Chocolate bar",
        "M&Ms",
        "white chocolate bar",
        "gummies",
        "nachos"
    ]
    const promos =["2 x 1", 
        "50% OFF", 
        "Free", 
        "buy 1 get 3",
        "30% OFF"
    ]

    const productPopcron = productPopcrons [Math.floor(Math.random() * productPopcrons .length)]
    const drink = drinks[Math.floor(Math.random() * drinks.length)]
    const candy = candies[Math.floor(Math.random() * candies.length)]
    const promo = promos[Math.floor(Math.random() * promos.length)]

    const result = (`Your perfect combo: ${productPopcron}🍿 + ${drink} 🥤and a delicious ${candy} 🍫and your promo is **${promo}**! Enjoy your movie! `)

    document.getElementById("output").innerText = result
}



































const product = "Coca-Cola";
const product2 = "Chetos"

console.log(product)

//Know how many words have
console.log(product.length)

//Know in what position is
console.log(product.indexOf('a'))

//know if is in my text
console.log(product.includes('Coca'))

//Join 2 strings with " + "
console.log("you will buy a " + product + " and " + product2)

//Join 2 string with " ${} "
console.log(`You will buy a ${product} ⚫ and ${product2} 🟠`)

//Delete the start with " trimStart "" 
 var product3 = "        Lays    "
 console.log(product3.length);

 console.log(product3.trimStart());

 console.log(product3.length);

 //Delete the end with
 console.log(product3.trimEnd());
 
 console.log(product3.length);

 console.log(product3);
 console.log(product);

 //remplace a word for other word
 console.log(product.replace("Coca", "Red"));

 //.slice for cut
 console.log(product.slice(0,3));

 //Show the frist word
 console.log(product.charAt(0))

 //Repeat text
 const text = 'Free!!!'.repeat(3);
 console.log(text)
 console.log(`STOP the ${product} is ${text}`)

 //Create an array with the text

 const hobbies = "leer, caminar, jugar, patear ancianas, dormir, programar"
console.log(hobbies.split(","))

//change a uppercase
console.log(product.toUpperCase())

//Chenage to lowercase
console.log(product.toLowerCase())