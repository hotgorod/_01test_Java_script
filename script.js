// console.log('Hello world!');
// let a = 3;
// console.log(a);
// const b = 10;
// console.log(b);
// let c;
// console.log(c);

// const apple = 47;
// const grapes = 136;
// const total = apple + grapes;
// console.log(total);
// const diff = apple - grapes;
// console.log(diff);
// let students = 100;
// students += 50;
// console.log(students);
// const result = 100 - 10 + 45 * 3;
// console.log(result);

// const value = 26.5;
// console.log(Math.ceil(value));
// console.log(Math.floor(value));
// console.log(Math.round(value));


// const name = "Marina";
// const age = 41;
// const result = name + " years " + age;
// console.log(result);

// const c = 11 + 33 + "Marina" + 44;
// console.log(typeof c);

// const companyName = 'Visma';
// const repairBots = 150;
// const defenceBots = 50;
// // const message = companyName + ' has ' + (repairBots + defenceBots) + ' bots in stock ';

// const message = `${companyName} has ${repairBots + defenceBots} bots in stock`;
// console.log(message);

// const pricePerItem = 20;
// const result = pricePerItem + Number('4');
// console.log(result);
// const defaultMessage = 'Неправильно введене число'
// const value = result || defaultMessage;
// console.log(value);

// const value = 0;
// if (value) {
// console.log('if')
// } else {
// console.log('else')
// }


// function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
//     let message;
//     // Change code below this line
//     const totalPrice = pricePerDroid * orderedQuantity;
//     if (totalPrice >= customerCredits) {
//         message = `"Insufficient funds!"`
//     }
//     else {
//         message = `'You ordered ${orderedQuantity} droids, you have ${customerCredits - totalPrice} credits left'`
// }
//   // Change code above this line
//     return message;
    
// }

// console.log(makeTransaction(3000, 5, 23000));

// function getShippingCost(country) {
//   let message;
//   let price;
      
//     if (country === "China") {
//         price = 100;
//         message = `"Shipping to ${country} will cost ${price} credits"`;
//     }
//     else if (country === "Chile") {
//         price = 250;
//         message = `"Shipping to ${country} will cost ${price} credits"`;
//     }
//     else if (country === "Australia") {
//         price = 170;
//         message = `"Shipping to ${country} will cost ${price} credits"`;
//     }
//     else if (country === "Jamaica") {
//         price = 120;
//         message = `"Shipping to ${country} will cost ${price} credits"`;
//     }
//     else {
//         message = "Sorry, there is no delivery to your country";
//      }
// return message;
//     }
// console.log(getShippingCost("China"));

// function getShippingCost(country) {
//     let message;
//     let price;
//     switch (country) {
//         case "China":
//             price = 100;
//             message = `"Shipping to ${country} will cost ${price} credits"`;
//             break;
        
//         case "Chile":
//             price = 250;
//             message = `"Shipping to ${country} will cost ${price} credits"`;
//             break;
        
//         case "Australia":
//             price = 170;
//             message = `"Shipping to ${country} will cost ${price} credits"`;
//             break;
//         case "Jamaica":
//             price = 120;
//             message = `"Shipping to ${country} will cost ${price} credits"`;
//             break;
        
//         default:
//             message = "Sorry, there is no delivery to your country";

//     }
//     return message;
// }

//     console.log(getShippingCost("Jamaica"));

// ===================================

// const friends = ["Hello", "world", "glory", "to", "Ukraine"];
// console.table(friends);

// let i = friends.length - 1;
// console.log(friends.sl[0, i])

// =================================
// знайти суму всіх елементів масиву

// const order = [32, 45, 15, 4, 57,45,67,89];
// let sum = 0;
// for (let i = 0; i < order.length; i+=1) {
//     console.table(order[i])
//     sum = sum + order[i]
// }
// console.log(sum)


// ================================
// Знайти суму всіх не четних елементів масиву

// const order = [32, 45, 15, 4,56,64, 57,45,67,89,88,66,24];
// let sum = 0;
// for (let i = 0; i < order.length; i += 1) {
//     console.table(order[i])
//     if (order[i] % 2 !== 0) {
//         console.log("Не Четное");
//         sum = sum + order[i];
//     }
       
// }
// console.log(sum)

// =============================
// Знайти суму всіх не четних елементів масиву за допомогою функції

// const totalSum = function (numbers) {
//     let total = 0;
//     for (const number of numbers) {
//         total += number;
//     }
//     return total;
// }

// console.log(totalSum([10, 20, 30, 40]));



// ======================================
// Знайти найменше число


// const numbers = [32, 45, 15, 4, 56, 64, 57, 45, 67, 89, 88, 66, 24];
// let smallestNumber = numbers[0];

// for (const number of numbers) {
    
//     if (number < smallestNumber) {
//         smallestNumber = number;
//     }
// }

// console.log(`Smallest Number: ${smallestNumber}`);

// ======================================
// Знайти найменше число за допомогою функції

// const smallestNumber = function(numbers) {
//     let sNumber = numbers[0];
//     for (const number of numbers) {
//         if (number < sNumber) {
//             sNumber = number;
//         }
//     }
//     return sNumber;

// }

// console.log(smallestNumber([2, 5, 1, 0, -3]));



// ======================================
// Знайти набільше число

// const numbers = [32, 45, 15, 4, 56, 64, 57, 45, 67, 89, 88, 66, 24];
// let biggestNumber = numbers[0];

// for (const number of numbers) {
//     console.log(number)
//     if (biggestNumber < number) {
//         biggestNumber = number
//     }
// }

// console.log(`Biggest number is  ${biggestNumber}`)


// ======================================
// Знайти найбільше число за допомогою функції

// const biggestNumber = function (numbers) {
//     let bNumber = numbers[0];
//     for (const number of numbers) {
//         if (number > bNumber) {
//             bNumber = number
//         }
//     }
//     return bNumber
        
// }

// console.log(biggestNumber([2,7,9,25,-1]))



// ================================
// Method "Join"

// const numbers = [32, 45, 15, 4, 56, 64, 57, 45, 67, 89, 88, 66, 24];
// const string = numbers.join('_ _');
// console.log(string)


// =================================
// Method "Concat" - зшиває 2 масиви в один і просумувати всі елементи

// const array1 = [12, 14, 67, 34];
// const array2 = [87, 34, 2];
// const newArray = array1.concat(array2);
// console.log(newArray);
// let sum = 0;
// for (const number of newArray) {
//     sum += number;
// }
// console.log(sum);


// ==================================
// Функції

// const add = function () {
//     console.log("виповнюється функція");
// }

// add();
// =================================================
// function getExtremeElements(array) {
//   // Change code below this line
//     const firstAndLastElenents=[];

//     firstAndLastElenents[0] = array[0];
//     firstAndLastElenents[1] = array[array.length-1];
//     return firstAndLastElenents;
//   // Change code above this line
// }

// console.log(getExtremeElements([1, 2, 3, 4, 5]));

// ================================================


// function calculateEngravingPrice(message, pricePerWord) {
//    // Change code below this line
// let words = [];
//   let totalPrice = 0;
//     words = message.split(" ");
//     console.log(words);
//   totalPrice = (words.length * pricePerWord)
//   return totalPrice;
  


//    // Change code above this line
// }
// console.log(calculateEngravingPrice("JavaScript is in my blood", 10));
// ===================================================================

// function slugify(title) {
//   // Change code below this line
//     // let slug = title.toLowerCase();
//     // console.log(slug);
//     // let slugNew = slug.split(' ');
//     // console.log(slugNew);
//     // let slug1 = slugNew.join('-');

//     let slug = title.toLowerCase().split(' ').join('-');


//     return slug;
    


//   // Change code above this line
// }
// console.log(slugify("How to become a JUNIOR developer in TWO WEEKS"));

// =================================================

// const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];

// // Change code below this line
// const firstTwoEls = fruits.slice(0, 2);
// const nonExtremeEls = fruits.slice(1, fruits.length-1);
// const lastThreeEls = fruits.slice(-3);

// console.log(firstTwoEls);
// console.log(nonExtremeEls);
// console.log(lastThreeEls);

// ===============================================

// function makeArray(firstArray, secondArray, maxLength) {
//     // Change code below this line
//     const commonArray = firstArray.concat(secondArray);
//     if (commonArray < maxLength) {
// return commonArray
//     } else {
//         return commonArray.slice(0, maxLength);
        
//     }

//     // Change code above this line
// }
// console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 3));

// ===============================================

// const start = 3;
// const end = 7;

// for (let i = start; i <= end; i += 1) { // Change this line
//   console.log(i);
// }

// ===============================================
// function calculateTotal(number) {
//  // Change code below this line
//     let sum = 0;
//     for (let i = 0; i <= number; i += 1) {
//         sum += i;
//     }
//     return sum;


//   // Change code above this line
// }
// console.log(calculateTotal(24));

// ===============================================
// function calculateTotalPrice(order) {
//   let total = 0;
//     for (i = 0; i < order.length; i += 1) {
//         total += order[i]
//     }
//   return total;
// }

// console.log(calculateTotalPrice([12, 85, 37, 4]));

// ===============================================
// 21
// function findLongestWord(string) {
//   // Change code below this line
//     const arrayFromString = string.split(' ');
//     console.log(arrayFromString);
//     let longestWord = arrayFromString[0];
//     for (i = 0; i < arrayFromString.length; i += 1) {
//         if (arrayFromString[i].length > longestWord.length) {
//             longestWord = arrayFromString[i]
//         }
//     }
//     return longestWord;


//   // Change code above this line
// }
// console.log(findLongestWord("Google do a roll"));

// ===============================================
// 22
// function createArrayOfNumbers(min, max) {
//   const numbers = [min];
//   // Change code below this line
//     for (i = 1; i <= max-min; i += 1){
//         numbers.push(min+i)
//     }
//   // Change code above this line
//   return numbers;
// }
// console.log(createArrayOfNumbers(14, 17));

// ===============================================
// 23
// function filterArray(numbers, value) {
//    // Change code below this line
//     const newArray = [];
//     for (i = 0; i < numbers.length; i += 1) {
//         if (numbers[i] > value) {
//             newArray.push(numbers[i])
            
//         }
            
//     }
// return newArray

//   // Change code above this line
// }
// console.log(filterArray([12, 24, 8, 41, 76], 38));

// ===============================================
// 24
// function checkFruit(fruit) {
//     const fruits = ["apple", "plum", "pear", "orange"];
    
    
//     return fruits.includes(fruit);
//   // Change this line
// }
// console.log(checkFruit("plum"));

// ===============================================
// 25
// function getCommonElements(array1, array2) {
//   // Change code below this line
//     const commonNumbers = [];
//     for (i = 0; i < array1.length; i += 1){
//         for (k = 0; k < array2.length; k += 1) {
//             if (array1[i] === array2[k]) {
//                 commonNumbers.push(array1[i])
//             }
//         }

//     }
//     return commonNumbers;


//  // Change code above this line
// }
// console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]));
// ===============================================
// function getCommonElements(array1, array2) {
//   // Change code below this line
//     const commonNumbers = [];
//     for (let i = 0; i < array1.length; i += 1) {
//         if (array2.includes(array1[i])) {
//             commonNumbers.push(array1[i])
//         }
//     }
//     return commonNumbers;


//  // Change code above this line
// }
// console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]));

// ===============================================
// 26
// function calculateTotalPrice(order) {
//   let total = 0;
//   // Change code below this line

//   for (item of order) {
//     total += item;
//   }

//   // Change code above this line
//   return total;
// }
// console.log(calculateTotalPrice([12, 85, 37, 4]));

// ===============================================
// 27
// function filterArray(numbers, value) {
//   // Change code below this line
//   const filteredNumbers = [];

//   for (const number of numbers) {
    
//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   }

//   return filteredNumbers;
//   // Change code above this line
// }
// console.log(filterArray([12, 24, 8, 41, 76], 38));

// ===============================================
// 29
// function getEvenNumbers(start, end) {
//    // Change code below this line
//     const evenNumbers = [];
//     for (let i = start; i <= end; i += 1){
//         if (i % 2 === 0)
//             evenNumbers.push(i);
//     }
//     return evenNumbers;


//     // Change code above this line
// }
// console.log(getEvenNumbers(3, 11));

// ===============================================
// 32
// function includes(array, value) {
//   // Change code below this line
//     for (let item of array) {
//         if (item === value) {
//             return true;
//         }
        
// }
    
//    return false
//   // Change code above this line
// }
// console.log(includes([1, 2, 3, 4, 5], 3))


// function includes(array, value) {
//   // Change code below this line
//     for (let i = 0; i < array.length; i+=1) {
//         if (array[i] === value) {
//             return true;
//         }
        
// }
//     return false
//   // Change code above this line
// }
// console.log( includes([1, 2, 3, 4, 5], 3))

// =============================================
// OBJECTS
// =============================================

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   rating: 8.38,
// };

// for (const key in book) {
//   // Ключ
//   console.log(key);
//   // Значення властивості з таким ключем
//   console.log(book[key]);
// }

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   rating: 8.38,
// };

// for (const key in book) {
//   // Якщо це власна властивість - виконуємо тіло if
//   if (book.hasOwnProperty(key)) {
//     console.log(key);
//     console.log(book[key]);
//   }

//   // Якщо це невласна властивість - нічого не робимо
// }


// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   rating: 8.38,
// };
// const keys = Object.keys(book);
// console.log(keys); // ['title', 'author', 'rating']

// const values = Object.values(book);
// console.log(values); // ['The Last Kingdom', 'Bernard Cornwell', 8.38]

// const entries = Object.entries(book);
// console.log(entries);
// // [["title", "The Last Kingdom"], ["author", "Bernard Cornwell"], ["rating", 8.38]]


// =========================================
// 4
// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
//   owner: {
//     name: "Henry",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };

// // Change code below this line
// const ownerName = apartment.owner.name;
// const ownerPhone = apartment.owner.phone;
// const ownerEmail = apartment.owner.email;
// const numberOfTags = apartment.tags.length;
// const firstTag = apartment.tags[0];
// const lastTag = apartment.tags[apartment.tags.length-1];
// // Change code above this line
// console.log(ownerName);
// console.log(lastTag)

// =========================================
// 7
// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4.7,
//   price: 5000,
//   tags: ["premium", "promoted", "top", "trusted"],
//   owner: {
//     name: "Henry Sibola",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };

// // Change code below this line
// apartment.area = 60;
// apartment.rooms = 3;
// apartment.location = {
//   country : "Jamaica",
//   city : "Kingston",
// }
// console.log(apartment.location)

// =========================================
// 9
// const propName = "name";
// const user = {
//   age: 25,
//   // Ім'я цієї властивості буде взято зі значення змінної propName
//   [propName]: "Генрі Сибола",
// };

// console.log(user.name); // "Генрі Сибола"

// const emailInputName = "email";
// const passwordInputName = "password";

// const credentials = {
//   // Change code below this line
// [emailInputName]: "henry.carter@aptmail.com",
// [passwordInputName]: "jqueryismyjam",

//   // Change code above this line
// };

// =========================================
// 10
// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const keys = [];
// const values = [];
// // Change code below this line
// for (key in apartment) {
//     keys.push(key);
//     values.push(apartment[key])
// }
// console.log(keys);
// console.log(values);

// =========================================
// 11
// const keys = [];
// const values = [];

// const advert = {
//   service: "apt",
// };
// const apartment = Object.create(advert);
// apartment.descr = "Spacious apartment in the city center";
// apartment.rating = 4;
// apartment.price = 2153;

// for (const key in apartment) {
//   // Change code below this line
//     if (apartment.hasOwnProperty(key)) {
//     keys.push(key);
//   values.push(apartment[key]);
// }
  

//   // Change code above this line
// }
// console.log(keys);
// console.log(values);

// =========================================
// 12
// function countProps(object) {
//   let propCount = 0;
//   // Change code below this line
//     for (key in object) {
//         if (object.hasOwnProperty(key)) {
//         propCount +=1
//     }
// }
//   // Change code above this line
//   return propCount;
// }
// console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }));

// =========================================
// 13
// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const values = [];
// // Change code below this line
// const keys = Object.keys(apartment);
// console.log(keys);
// for (const key of keys) {
   
//     values.push(apartment[key])
//     }

// =========================================
// 14
// function countProps(object) {
//   // Change code below this line
//   let propCount = 0;
// const keys = Object.keys(object)
//   for (const key of keys) {
//      {
//       propCount += 1;
//     }
//   }

//   return propCount;
//   // Change code above this line
// }
// console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }))

// =========================================
// 15
// function countTotalSalary(salaries) {
//   let totalSalary = 0;
//   // Change code below this line
//     const values = Object.values(salaries);
//     console.log(values)
//     for (const value of values) {
//         totalSalary += value
//     }
        
//   // Change code above this line
//   return totalSalary;
// }

// console.log(countTotalSalary({ mango: 100, poly: 150, alfred: 80 }));

// =========================================
// 17
// const colors = [
//   { hex: "#f44336", rgb: "244,67,54" },
//   { hex: "#2196f3", rgb: "33,150,243" },
//   { hex: "#4caf50", rgb: "76,175,80" },
//   { hex: "#ffeb3b", rgb: "255,235,59" },
// ];

// const hexColors = [];
// const rgbColors = [];
// // Change code below this line

// for (const color of colors) {
//  hexColors.push(color.hex)
//   rgbColors.push(color.rgb)
  
// }
// console.log(hexColors);
// console.log(rgbColors);

// =========================================
// 18
// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getProductPrice(productName) {
//   // Change code below this line
//     let selectedPrice = null;
    
//     for (const product of products) {
//         if (productName === product.name) {
//             selectedPrice = product.price
           
//         }
       
    
// }
// return selectedPrice

//   // Change code above this line
// }
// console.log(getProductPrice("Scanner"));

// =========================================
// 19
// const products = [
//   { name: "Radar", price: 1300, quantity: null },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {
//   // Change code below this line
//     const propValues = [];
//     for (const product of products) {
//         const keys = Object.keys(product)

//         if (keys.includes(propName)) {
//             propValues.push(product[propName])
//         }
    
//     }
//     return propValues

//   // Change code above this line
// }
// console.log(getAllPropValues('quantity'));

// =========================================
// 20
// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function calculateTotalPrice(productName) {
//   // Change code below this line
//     let totalPrice = 0;
//     for (const product of products) {
        
//         if (productName === product.name) {
//             totalPrice = product.price * product.quantity;
//         }
        
//     }
// return totalPrice

//   // Change code above this line
// }
// console.log(calculateTotalPrice("dsg"));


// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "На березі спокійних вод",
//     author: "Роберт Шеклі",
//     rating: 8.51,
//   },
// ];

// for (const book of books) {
//   console.log(book.title);
//   console.log(book.author);
//   console.log(book.rating);
// }


// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// // Change code below this line
// const { yesterday: highYesterday, today: highToday, tomorrow: highTomorrow, highIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg" } = highTemperatures;


// // Change code above this line
// const meanTemperature = (highYesterday + highToday + highTomorrow) / 3;
// console.log(highIcon)


// const colors = [
//   { hex: "#f44336", rgb: "244,67,54" },
//   { hex: "#2196f3", rgb: "33,150,243" },
//   { hex: "#4caf50", rgb: "76,175,80" },
//   { hex: "#ffeb3b", rgb: "255,235,59" },
// ];

// const hexColors = [];
// const rgbColors = [];
// // Change code below this line

// for (const color of colors) {
//   hexColors.push(color.hex);
//   rgbColors.push(color.rgb);
// }
// console.log(colors);
// console.log(hexColors);
// console.log(rgbColors);

// ==========================================

// function makeTask(data) {
//   // const completed = false;
//   // const category = "General";
//   // const priority = "Normal";
//   // Change code below this line
//   const defaultSettings = {
//     completed: false,
//     category: "General",
//     priority: "Normal"
//   }
//   const NewData = data;

//   const resultFinal = { ...defaultSettings, ...NewData };
//   return resultFinal;
//   // Change code above this line
// }
// console.log(makeTask({ category: "Homemade", priority: "Low", text: "Take out the trash" }));

// ==========================================
// function multiply(...args) {
//   console.log(args); // масив усіх аргументів
// }

// multiply(1, 2);
// multiply(1, 2, 3);
// multiply(1, 2, 3, 4);

// ==========================================

// Change code below this line
// function add(...args) {
//   let total = 0;
//   for (let arg of args) {
//     total += arg
//   }
//   return total
//   // Change code above this line
// }

// console.log(add(12, 4, 11, 48));

// ==========================================
// function multiply(firstNumber, secondNumber, ...otherArgs) {
//   console.log(firstNumber); // Значення першого аргументу
//   console.log(secondNumber); // Значення другого аргументу
//   console.log(otherArgs); // Масив інших аргументів
// }

// multiply(1, 2);
// multiply(1, 2, 3);
// multiply(1, 2, 3, 4);

// ==========================================
// Change code below this line
// function addOverNum(etalonNumber, ...args) {
//   let total = 0;

//   for (const arg of args) {
//     if (arg > etalonNumber) {
//       total += arg;
//     }
    
//   }

//   return total;
//   // Change code above this line
// }
// console.log(addOverNum(10, 12, 4, 11, 48, 10, 8));

// ==========================================
// Change code below this line
// function findMatches(etalonArray, ...args) {
//   const matches = []; // Don't change this line
  
//   for (let i = 0; i < args.length; i += 1) {
//     for (let k = 0; k < etalonArray.length; k += 1) {
     
//       if (args[i] === etalonArray[k]){
//         matches.push(args[i]);
//       }
//     }
//   }
//   // Change code above this line
//   return matches;
// }
// console.log(findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7))

// ==========================================
// const bookShelf = {
//   // Change code below this line
//   books: ["The last kingdom", "The guardian of dreams"],
//   getBooks() {
//     return "Returning all books";
//   },
//   addBook(bookName) {
//     return `Adding book ${bookName}`;
//   },
//   removeBook(bookName) {
//     return `Deleting book ${bookName}`
//   },
//   updateBook(oldName, newName) {
//     return `Updating book ${oldName} to ${newName}`
//   }
//   // Change code above this line
// };
// console.log(bookShelf.removeBook("Red sunset"));

// ==========================================
// const bookShelf = {
//   books: ["The last kingdom", "Haze", "The guardian of dreams"],
//   updateBook(oldName, newName) {
//     // Change code below this line
//     console.log(this.books)
//     const booksArray = Object.values(bookShelf);
//     console.log(booksArray)
   
//     let tempIndex = 0;
    
//     for (let book of booksArray) {
//       if (book == oldName) {
//         tempIndex = indefOf(book);
              
//         this.books.splice(tempIndex, 1, newName)
//   }
// }
//     return this.books;

//     // Change code above this line
//   },
// };
// console.log(bookShelf.updateBook("Haze", "Dungeon chronicles"));
// ================

// const bookShelf = {
//   books: ["The last kingdom", "Haze", "The guardian of dreams"],
//   updateBook(oldName, newName) {
//     // Change code below this line
//     const arrayFromBooks = Object.values(this.books);
//     for (let i = 0; i<arrayFromBooks.length; i+=1) {
//       if (arrayFromBooks[i] === oldName) {
        
//     this.books.splice(i, 1, newName)
//   }
// }

//     return this.books;
//     // Change code above this line
//   },
// };
// console.log(bookShelf.updateBook("Haze", "Dungeon chronicles"));

// ==========================================
// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   addPotion(potionName) {
//     // Change code below this line
//     const arrayFromPotions = Object.values(this.potions);
//     this.potions.splice(arrayFromPotions.length, 0, potionName)
// return this.potions

//     // Change code above this line
//   },
// };
// console.log(atTheOldToad.addPotion("Invisibility"));
// console.log(atTheOldToad.addPotion("Power potion"));

// ==========================================
// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   removePotion(potionName) {
//     // Change code below this line
//     const arrayFromPotions = Object.values(this.potions);
//     for (i = 0; i < arrayFromPotions.length; i += 1){
//       if (potionName === arrayFromPotions[i]) {
//         this.potions.splice(i, 1)
//       }
//     }
// return this.potions

//     // Change code above this line
//   },
// };
// console.log(atTheOldToad.removePotion("Dragon breath"));
// console.log(atTheOldToad.removePotion("Speed potion"));

// ==========================================
// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   updatePotionName(oldName, newName) {
//     // Change code below this line
//     const potionIndex = this.potions.indexOf(oldName)
//     this.potions.splice(potionIndex, 1, newName)
//     return this.potions
//       }
//     }

//     // Change code above this line

// console.log(atTheOldToad.updatePotionName("Dragon breath", "Polymorth"));
// console.log(atTheOldToad.updatePotionName("Stone skin", "Invisibility"));

// ==========================================

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "На березі спокійних вод",
//     author: "Роберт Шеклі",
//     rating: 8.51,
//   },
//   {
//     title: "Сон смішної людини",
//     author: "Федір Достоєвський",
//     rating: 7.75,
//   },

// ];
//   function addNewObject(newObject) {
//   books.push(newObject)
//   return books
// }

    
// console.log(addNewObject({
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
// }))
  // ===================================
// const atTheOldToad = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Dragon breath", price: 780 },
//     { name: "Stone skin", price: 520 },
//   ],
//   // Change code below this line
//   getPotions() {
//     return this.potions;
//   },
//   addPotion(newPotion) {

//     for (const potion of this.potions) {
//       if (potion.name === newPotion.name) {
//         return `Error! Potion ${potion.name} is already in your inventory!`;
//       }
//     }

    
//     this.potions.push(newPotion);
//   },
//   removePotion(potionName) {

//     let potionFound = false;

//     for (i = 0; i < this.potions.length; i += 1) {
//       if (this.potions[i].name === potionName) {
//         potionFound = true;
//         this.potions.splice(i, 1);
//         break;
//       }
//     }

//     if (!potionFound) {
//       return `Potion ${potionName} is not in inventory!`;
//     }
        
//   },
//   updatePotionName(oldName, newName) {

//     let positionFound = false;

//     for (let i = 0; i < this.potions.length; i += 1) {
//       if (this.potions[i].name === oldName) {
//         positionFound = true;
//         this.potions[i].name = newName;
//         break;
//       }
//     }
//     if (!positionFound) {
//       return `Potion ${oldName} is not in inventory!`;
//     }
    
//     // Change code above this line
//   }
// }


// console.log(atTheOldToad.updatePotionName("Dragon breath", "Polymorth"));

// ========================================================
// function greet(name) {
//   console.log(`Ласкаво просимо ${name}.`);
// }

// // Функція вищого порядку
// function registerGuest(name, callback) {
//   console.log(`Реєструємо гостя ${name}.`);
//   callback(name);
// }

// registerGuest("Манго", greet);

//Напишіть код, який перетворює та поєднує всі елементи масиву в одне рядкове значення. Елементи масиву будуть розділені комою. Отримайте результат двома різними методами.

// const vegetables = ["Капуста", "Ріпа", "Редиска", "Морква"];
// // console.log(vegetables.join(`, `))
// let ourString = "";
// for (const vegetable of vegetables) {
//   ourString += vegetable + ', '
// }

// console.log(ourString.slice(0, ourString.length-2))

// Напишіть функцію union, яка повертає масив, що складається тільки з унікальних
//елементів масиву.
// const array1 = [5, 2, 1, -10, 8, 5, 2, 1, -9, 3, 7];
// for(con)
// const union = function (array) {};
// console.log(union(array1));

// Створіть об'єкт calculator із трьома методами
// read(a, b) - приймає два аргументи та зберігає їх
// як властивості об'єкта
// sum() повертає суму збережених значень
// mult() перемножує збережені значення та повертає результат

// const calculator = {
//   read(a, b) {
//     this.a = Number(a);
//     this.b = Number(b);
//   },
//   sum() {
//     return this.a + this.b
//   },
//   mult() {
//     return this.a * this.b
//   }
// }

// calculator.read("3", 5);
// console.log(calculator.mult());
// console.log(calculator.sum());

// ===================================
//
//
//
// Необхідно написати логіку обробки замовлення піци.Виконай рефакторинг методу order таким чином,
//   щоб він приймав другим і третім параметром два колбеки onSuccess і onError.

// Якщо у властивості pizzas відсутня піца з назвою з параметра pizzaName,
//   метод order повинен повертати результат виклику колбека onError, передаючи йому аргументом рядок
// "There is no pizza with a name <имя пиццы> in the assortment."
// Якщо у властивості pizzas присутня піца з назвою з параметра pizzaName,
//   метод order повинен повертати результат виклику колбека onSuccess, передаючи
//   йому аргументом назву замовленої піци.
// Після оголошення об'єкта pizzaPalace ми додали колбеки і виклики методів. Будь ласка, нічого там не міняй.






// const pizzaPalace = {
//   pizzas: ["Ultracheese", "Smoked", "Four meats"],
//   order(pizzaName, onSuccess, onError) {
//     if (this.pizzas.includes(pizzaName)) {
//       return onSuccess(pizzaName);
//     }
//     else return onError(`There is no pizza with a name ${pizzaName} in the assortment.`)
//   },
// };
// // Change code above this line

// // Callback for onSuccess
// function makePizza(pizzaName) {
//   return `Your order is accepted. Cooking pizza ${pizzaName}.`;
// }

// // Callback for onError
// function onOrderError(error) {
//   return `There is no pizza with a name ${error} in the assortment.`;
// }

// // Method calls with callbacks
// console.log(pizzaPalace.order("Smoked", makePizza, onOrderError));
// pizzaPalace.order("Four meats", makePizza, onOrderError);
// pizzaPalace.order("Big Mike", makePizza, onOrderError);
// pizzaPalace.order("Vienna", makePizza, onOrderError);

// =======================================================

// function calculateTotalPrice(orderedItems) {
//   let totalPrice = 0;
//   // Change code below this line

//   orderedItems.forEach(function (item, i, orderedItems) {
//    totalPrice += item
//  })

//   // Change code above this line
//   return totalPrice;
// }

// ============================================

// // Функція filterArray(numbers, value) приймає масив чисел numbers і
// повертає новий масив, в якому будуть тільки ті елементи оригінального масиву,
//   які більші за значення параметра value.

// // Виконай рефакторинг функції таким чином,
// щоб замість циклу for, вона використовувала метод forEach.

// function filterArray(numbers, value) {
//   const filteredNumbers = [];
//   // Change code below this line

//   numbers.forEach(function (number, i, numbers) {
//     if (numbers[i] > value) {
//       filteredNumbers.push(numbers[i])
//     }
//   })

//   // Change code above this line
//   return filteredNumbers;
// }

// console.log(filterArray([1, 2, 3, 4, 5], 3))

// ==============================================
// Функція getCommonElements(firstArray, secondArray)
// приймає два масиви довільної довжини в параметри firstArray і secondArray,
//   і повертає новий масив їхніх спільних елементів, тобто тих, які присутні в обох масивах.

// Виконай рефакторинг функції таким чином, щоб замість циклу for, вона використовувала метод forEach.

// function getCommonElements(firstArray, secondArray) {
//   const commonElements = [];
//   // Change code below this line
//   firstArray.forEach(function (element, i, firstArray) {
//     if (secondArray.includes(firstArray[i])) {
//       commonElements.push(firstArray[i])
//     }
//   })
//   return commonElements;
// }
//   // for (let i = 0; i < firstArray.length; i += 1) {
//   //   if (secondArray.includes(firstArray[i])) {
//   //     commonElements.push(firstArray[i]);
//   //   }
//   // }

  
//   // Change code above this line

// console.log(getCommonElements([1, 2, 3], [2, 4]))
// console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19]))


// ===============================================
// Change code below this line
// const filterArray = (numbers, value) => {
//   const filteredNumbers = [];

//   numbers.forEach((number) => {
//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   });

//   // Change code above this line
//   return filteredNumbers;
// }
// console.log(filterArray([1, 2, 3, 4, 5], 3))
// =============================================
// Change code below this line
// const getCommonElements = (firstArray, secondArray) => {
 
//   const commonElements = [];
  
//   firstArray.forEach(element => {
//     if (secondArray.includes(element)) {
//       commonElements.push(element)
//     }
//   });
 
//   return commonElements;
// }
// console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19]));
// console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]))
// ============================================
// function changeEven(numbers, value) {
//   // Change code below this line
//   const newArrayEvenNumbers = [];

//   numbers.forEach(element => {
//     if (element % 2 === 0) {
//       element += value;
//     }
//     newArrayEvenNumbers.push(element)
    
//   });
//   return newArrayEvenNumbers



//   // for (let i = 0; i < numbers.length; i += 1) {
//   //   if (numbers[i] % 2 === 0) {
//   //     numbers[i] = numbers[i] + value;
//   //   }
//   // }
//   // Change code above this line
// }
// console.log(changeEven([2, 8, 3, 7, 4, 6], 10))

// ============================================
// const planets = ["Earth", "Mars", "Venus", "Jupiter"];
// console.log(planets[0].length)
// // Change code below this line
// const planetsLengths = planets.map(planet => planet.length);
// console.log(planetsLengths)
// ============================================
// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// ];
// // Change code below this line

// const titles = books.map(book => book.title);
// console.log(titles)
// =============================================
// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["adventure", "history"],
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     genres: ["fiction"],
//   },
//   {
//     title: "Redder Than Blood",
//     author: "Tanith Lee",
//     genres: ["horror", "mysticism"],
//   },
// ];
// // Change code below this line

// const genres = books.flatMap(book => book.genres);
// console.log(genres)

// =============================================

// const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];
// // Change code below this line

// const evenNumbers = numbers.filter(number => number % 2 === 0);
// const oddNumbers = numbers.filter(number => number % 2);

// console.log(evenNumbers);
// console.log(oddNumbers);
// =============================================
// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["adventure", "history"],
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     genres: ["fiction", "mysticism"],
//   },
//   {
//     title: "Redder Than Blood",
//     author: "Tanith Lee",
//     genres: ["horror", "mysticism", "adventure"],
//   },
// ];
// // Change code below this line
// const allGenres = books.flatMap(book => book.genres);
// console.log(allGenres);
// const uniqueGenres = allGenres.filter((genre, i, allGenres) => allGenres.indexOf(genre) === i);
// console.log(uniqueGenres);
// =============================================
// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// ];

// const MIN_RATING = 8;
// const AUTHOR = "Bernard Cornwell";
// // Change code below this line

// const topRatedBooks = books.filter(book => book.rating >= MIN_RATING);
// const booksByAuthor = books.filter(book => book.author === AUTHOR);

// console.log(topRatedBooks);
// console.log(booksByAuthor);

// ================================================

// const users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male"
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female"
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male"
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female"
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     gender: "male"
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     gender: "male"
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female"
//   }
// ]
// // Change code below this line
// const getUsersWithEyeColor = (users, color) => {
//  return users.filter(user => user.eyeColor === color)

// };
// // Change code above this line
// console.log(getUsersWithEyeColor(users, "blue"));
// =============================================
// users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male",
//     age: 37
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female",
//     age: 34
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male",
//     age: 24
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female",
//     age: 21
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     gender: "male",
//     age: 27
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     gender: "male",
//     age: 38
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female",
//     age: 39
//   }
// ]
// // Change code below this line
// const getUsersWithAge = (users, minAge, maxAge) => {
//   return users.filter(user => user.age>=minAge && user.age<=maxAge)
 

// };
// // Change code above this line
// console.log(getUsersWithAge(users, 30, 40));
// ==================================================
// users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male",
//     age: 37
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female",
//     age: 34
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male",
//     age: 24
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female",
//     age: 21
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     gender: "male",
//     age: 27
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     gender: "male",
//     age: 38
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female",
//     age: 39
//   }
// ]
// // Change code below this line
// // Change code below this line
// const getUsersWithFriend = (users, friendName) => {
//   return users.filter(user => user.friends.includes(friendName))
   
// };
// // Change code above this line
// console.log(getUsersWithFriend(users,"Sharron Pace"));
// =================================================
// users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male",
//     age: 37
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female",
//     age: 34
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male",
//     age: 24
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female",
//     age: 21
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     gender: "male",
//     age: 27
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     gender: "male",
//     age: 38
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female",
//     age: 39
//   }
// ]

// // Change code below this line

// const getFriends = (users) => {
  
//     return allFriends.filter((friend, i, allFriends) => allFriends.indexOf(friend) === i)
 
// };
// // Change code above this line
// console.log(getFriends(users));
// ================================================
// users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male",
//     age: 37
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female",
//     age: 34
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male",
//     age: 24
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female",
//     age: 21
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     gender: "male",
//     age: 27
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     gender: "male",
//     age: 38
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female",
//     age: 39
//   }
// ]

// // Change code below this line
// const getActiveUsers = (users) => {
//   return users.filter(user => user.isActive)
   
// };
// // Change code above this line
// console.log(getActiveUsers(users));

// // Change code below this line
// const getInactiveUsers = (users) => {
//    return users.filter(user => !(user.isActive))
// };
// // Change code above this line
// console.log(getInactiveUsers(users));
// ===============================================
// const books = [
//   {
//     title: 'The Last Kingdom',
//     author: 'Bernard Cornwell',
//     rating: 8.38,
//   },
//   {
//     title: 'Beside Still Waters',
//     author: 'Robert Sheckley',
//     rating: 8.51,
//   },
//   {
//     title: 'The Dream of a Ridiculous Man',
//     author: 'Fyodor Dostoevsky',
//     rating: 7.75,
//   },
//   { title: 'Redder Than Blood', author: 'Tanith Lee', rating: 7.94 },
// ];
// const BOOK_TITLE = 'The Dream of a Ridiculous Man';
// const AUTHOR = 'Robert Sheckley';
// // Change code below this line

// const bookWithTitle = books.find(book => book.title === BOOK_TITLE);
// const bookByAuthor = books.find(book => book.author === AUTHOR);
// ===================================================
// const users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male"
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female"
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male"
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female"
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     gender: "male"
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     gender: "male"
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female"
//   }
// ]

// // Change code below this line
// const getUserWithEmail = (users, email) => {
//    return users.find(user => user.email === email)
// };
// // Change code above this line
// ==============================================
// const firstArray = [26, 94, 36, 18];
// const secondArray = [17, 61, 23];
// const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// // Change code below this line

// const eachElementInFirstIsEven = firstArray.every(el => (el % 2) === 0);

// const eachElementInFirstIsOdd = firstArray.every(el => !((el % 2) === 0));

// const eachElementInSecondIsEven = secondArray.every(el => (el % 2) === 0);
// const eachElementInSecondIsOdd = secondArray.every(el => !((el % 2) === 0));

// const eachElementInThirdIsEven = thirdArray.every(el => (el % 2) === 0);
// const eachElementInThirdIsOdd = thirdArray.every(el => !((el % 2) === 0));


// console.log(eachElementInFirstIsEven);
// console.log(eachElementInFirstIsOdd);
// console.log(eachElementInSecondIsEven);
// console.log(eachElementInSecondIsOdd);
// console.log(eachElementInThirdIsEven);
// console.log(eachElementInThirdIsOdd);
// ==========================================================
// users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male"
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female"
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male"
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female"
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     gender: "male"
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     gender: "male"
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female"
//   }
// ]

// // Change code below this line
// const isEveryUserActive = (users) => {
//   return users.every(user => user.isActive === true)
   
// };
// // Change code above this line
// ========================================
// const firstArray = [26, 94, 36, 18];
// const secondArray = [17, 61, 23];
// const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// // Change below this line

// const anyElementInFirstIsEven = firstArray.some(el => (el % 2)===0);
// const anyElementInFirstIsOdd = firstArray.some(el => !((el % 2)===0));

// const anyElementInSecondIsEven = secondArray.some(el => (el % 2)===0);
// const anyElementInSecondIsOdd = secondArray.some(el => !((el % 2)===0));

// const anyElementInThirdIsEven = thirdArray.some(el => (el % 2)===0);
// const anyElementInThirdIsOdd = thirdArray.some(el => !((el % 2)===0));

// console.log(anyElementInFirstIsEven);
// console.log(anyElementInFirstIsOdd);
// console.log(anyElementInSecondIsEven);
// console.log(anyElementInSecondIsOdd);
// ============================================
// const players = {
//   mango: 1270,
//   poly: 468,
//   ajax: 710,
//   kiwi: 244
// };
// const playtimes = Object.values(players); // [1270, 468, 710, 244]
// // Change code below this line

// const totalPlayTime = playtimes.reduce((previousValue, number) => {
//   return previousValue + number
// });

// // Change code above this line
// const averagePlayTime = totalPlayTime / playtimes.length;
// ===============================================
// const players = [
//   { name: "Mango", playtime: 1270, gamesPlayed: 4 },
//   { name: "Poly", playtime: 469, gamesPlayed: 2 },
//   { name: "Ajax", playtime: 690, gamesPlayed: 3 },
//   { name: "Kiwi", playtime: 241, gamesPlayed: 1 },
// ];
// // Change code below this line



// const totalAveragePlaytimePerGame = players.reduce((totalPlayTime, player) => {
//   const avaragePlayTimePerPlayer = player.playtime / player.gamesPlayed
  
  
//   return totalPlayTime + avaragePlayTimePerPlayer
// }, 0);

// console.log(totalAveragePlaytimePerGame);
// // ===============================
// users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male"
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female"
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male"
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female"
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     gender: "male"
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     gender: "male"
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female"
//   }
// ]

// // Change code below this line
// const calculateTotalBalance = users => {
//    return users.reduce((totalBalance, user) => totalBalance + user.balance, 0)
// };
// // Change code above this line

// // Change code below this line
// const getTotalFriendCount = users => {
//   const result = users.reduce((allFriends, friend) => {
//     allFriends.push(...friend.friends)
//     return allFriends;
//   }, []);

//   return result.length;


// }
// // Change code above this line
// console.log(getTotalFriendCount(users));

// // ===========================================

// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// const authors = [
//   "Tanith Lee",
//   "Bernard Cornwell",
//   "Robert Sheckley",
//   "Fyodor Dostoevsky",
// ];
// // Change code below this line

// const ascendingReleaseDates = [...releaseDates].sort();

// const alphabeticalAuthors = [...authors].sort();
// ===============================================
// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// // Change code below this line

// const ascendingReleaseDates = [...releaseDates].sort((a,b) => a-b);
// console.log(ascendingReleaseDates);
// const descendingReleaseDates = [...releaseDates].sort((a, b) => b - a);
// ==============================================
// const authors = [
//   "Tanith Lee",
//   "Bernard Cornwell",
//   "Robert Sheckley",
//   "Fyodor Dostoevsky",
//   "Howard Lovecraft",
// ];
// // Change code below this line

// const authorsInAlphabetOrder = [...authors].sort((a,b) => a.localeCompare(b));

// const authorsInReversedOrder = [...authors].sort((a,b) => b.localeCompare(a));
// =============================================
// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// ];
// // Change code below this line

// const sortedByAuthorName = [...books].sort((a, b) => a.author.localeCompare(b.author));


// const sortedByReversedAuthorName = [...books].sort((a,b) => b.author.localeCompare(a.author));

// const sortedByAscendingRating = [...books].sort((a,b) => a.rating-b.rating);

// const sortedByDescentingRating = [...books].sort((a,b) => b.rating-a.rating);


// console.log(sortedByAuthorName);
// ===========================================
// users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male"
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female"
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male"
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female"
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     gender: "male"
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     gender: "male"
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female"
//   }
// ]

// console.log(users[2].friends.length);
// // Change code below this line
// const sortByDescendingFriendCount = users => {
//    return [...users].sort((user1, user2) => user2.friends.length - user1.friends.length)
// };
// // Change code above this line
// console.log(sortByDescendingFriendCount());
// ============================================
// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   {
//     title: "The Dreams in the Witch House",
//     author: "Howard Lovecraft",
//     rating: 8.67,
//   },
// ];
// const MIN_BOOK_RATING = 8;
// // Change code below this line

// const names = books.filter((book) => book.rating > MIN_BOOK_RATING)
//   .sort((a,b) => a.author.localeCompare(b.author)).map(book => book.author);
// console.log(names);
// ===========================================
// users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male"
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female"
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male"
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female"
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong", "Adrian Cross"],
//     isActive: true,
//     balance: 3951,
//     gender: "male"
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman", "Adrian Cross", "Solomon Fokes"],
//     isActive: false,
//     balance: 1498,
//     gender: "male"
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female"
//   }
// ]
// // Change code below this line
// const getNamesSortedByFriendCount = users => {
//    return [...users].sort((firstUser, secondUser) => firstUser.friends.length - secondUser.friends.length).map(user => user.name)
// };
// // Change code above this line
// console.log(getNamesSortedByFriendCount(users));


// // Change code below this line
// const getSortedFriends = users => {
//    return users.flatMap(user => user.name).filter((user, i, array) => array.indexOf(user) === i).sort((a,b) => a.localeCompare(b))
// };
// // Change code above this line
// console.log(getSortedFriends(users));


// Change code below this line
// const getSortedFriends = users => {
//   const flatMapFriends = users.flatMap(user => user.friends)
//   console.log(flatMapFriends);
//   const filterFriends = flatMapFriends.filter((user, i, array) => array.indexOf(user) === i);
//   console.log(filterFriends);
//   const sortedFriends = [...filterFriends].sort((a, b) => a.localeCompare(b))
  
//   return sortedFriends
// };
// // Change code above this line
// console.log(getSortedFriends(users));
// ==============================================
// Change code below this line
// const getTotalBalanceByGender = (users, gender) => {
// return users.filter(user => user.gender === gender).reduce((totalBalance, user) => totalBalance + user.balance)
// };
// // Change code above this line
// console.log(getTotalBalanceByGender(users, "female"));

// const getTotalBalanceByGender = (users, gender) => {
//   const genderFilter = users.filter(user => user.gender === gender)
//   console.log(genderFilter);
//   const totalBal = genderFilter.reduce((totalBalance, user) => {return totalBalance + user.balance}, 0)

//   console.log(totalBal);
  
//   return totalBal
// };
// // Change code above this line
// console.log(getTotalBalanceByGender(users, "female"));