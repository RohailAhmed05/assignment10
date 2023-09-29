
   //---------------------   Assignment(ch# 17 - 20)---------------------
   //--------------------       Arrays & LOOP -----------------------
//       Q#1
//  var multidimensional = [[],[]];
//      Q#2 
// var matrix = [
//     [0, 1, 2, 3],
//     [1, 0, 1, 2],
//     [2, 1, 0, 1]
//   ];
//      Q#3
//for(i=1; i<=10; i++)
// {
//   console.log(i);
//}
//      Q#4
// const number = parseInt(prompt("Enter the number for multiplication table:"));
// const length = parseInt(prompt("Enter the length of the table:"));

// if (isNaN(number) || isNaN(length)) {
//   console.log("Please enter valid numbers.");
// } else {
//   console.log(`Multiplication table of ${number} \n length ${length}`);
//   for (let i = 1; i <= length; i++) {
//     const result = number * i;
//     console.log(`${number} * ${i} = ${result}`);
//   }
// }
//      Q#5
// const fruits = ["apple", "banana", "mango", "orange", "strawberry"];

// for (let i = 0; i < fruits.length; i++) {
//   console.log(fruits[i]);
// }

// for (let i = 0; i < fruits.length; i++) {
//    console.log(`Element at index ${i} = ${fruits[i]}`);
//  }
//     Q#6
//a
// document.write("<b> counting: </b> " + "<br>" + "<br>")
// for (var i=1;i<=15;i++){
//     document.write(i + ", ")
// }
// document.write("<br>" + "<br>")

//b
// document.write("<b> Reverse counting: </b>" + "<br>" + "<br>")
// for (var i=10;i>=1;i--){
//     document.write(i + ", ")
// }
// document.write("<br>" + "<br>")

//c
// document.write("<b> Even: </b>" + "<br>" + "<br>")
// for(var i=0;i<=20;i+=2){
//     document.write(i + ", ")
// }
// document.write("<br>" + "<br>")

//d
// document.write("<b> Odd: </b>" + "<br>" + "<br>")
// for(var i=1;i<20;i+=2){
//     document.write(i + ", ")
// }
// document.write("<br>" + "<br>")

//e
// document.write("<b> Series: </b>" + "<br>" + "<br>")
// for(var i=2;i<=20;i+=2){
//     document.write(i + "K, ")
// }
// document.write("<br>" + "<br>")
//     Q#7
// const bakeryItems = ["cake", "apple pie", "cookie", "chips", "patties"];
// const userInput = prompt("Welcome to ABC bakery. What do you want to order, sir/ma'am?");
// function searchItem(item) {
//   const index = bakeryItems.indexOf(item);
//   if (index !== -1) {
//     console.log(`${item} is available at index ${index} in our bakery.`);
//   } else {
//     console.log(`We are sorry. ${item} is not available in our bakery.`);
//   }
// }
// const userItem = userInput.toLowerCase();
// searchItem(userItem);
//       Q#8
// A = [24, 53, 78, 91, 12]
// var num = [24, 53, 78, 91, 12];
// var largestNum = num[0];
// for(var i = 1;i<num.length;i++){
//     if(num[i] > largestNum){
//         largestNum = num[i];
//     }
// }
// document.write("The largest number is " + largestNum);
//        Q#9
// A = [24, 53, 78, 91, 12]
// var num1 = [24, 53, 78, 91, 12,];
// var smallestNum = num1[0];
// for ( var j=1;j<num1.length;j++){
//      if(num1[j]<smallestNum){
//         smallestNum = num1[j];
//      }
// }
// document.write("The smallest number is " + smallestNum);
//         Q#10
// for (var i=5;i<=100;i++){
//        if(i%5 === 0){
//            document.write(i+",");
//        }
//    }
//--------------------- Assignment(ch# 21 - 25) ---------------------
//---------------------    STRING METHODS -----------------------
//             Q#1
// var firstName  = prompt("Enter your first name");
// var lastName  = prompt("Enter your last name");
// var fullName = (firstName + " " + lastName)
// alert("Hello, " + fullName + "! Welcome!");
//            Q#2
// var userinput = prompt("Enter your favourite mobile model name");
// userinput = userinput.toLowerCase();
// var length = userinput.length;
// document.write("My favourite phone is: " + userinput + "<br>");
// document.write("Length of string: "+ length);
//          Q#3
// var word = "Pakistani";
// var index = word.indexOf("n");

// if (index !== -1) {
//     document.write(`The letter "n" is found at index ${index} in the word "${word}".`);
// } else {
//     document.write(`The letter "n" is not found in the word "${word}".`);
// }
 //          Q#4 
// var greet = "hello world";
// var ans1 = greet.lastIndexOf("l");
// document.write("string: " + greet + "<br>");
// document.write("index of 'l' is :  " + ans1 );

//           Q#5 
// var word1 = "Pakistani";
// var ans2 = word1.charAt(3)
// document.write("string: " + word1 + "<br>");
// document.write("character at the 3rd index is : " + ans2);

//          Q#6
// var firstName  = prompt("Enter your first name");
// var lastName  = prompt("Enter your last name");
// var fullName = firstName.concat(lastName);
// document.write("Hello, " + fullName + "! Welcome!");

//         Q#7
// var name1 = "Hyderabad";
// var replaceWord = name1.replace("Hyder","Islam");
// document.write("City: " + name1 + "<br>");
// document.write("After replacement: " + replaceWord );

//        Q#8
// var message = "Ali and Sami are best friends. They play cricket and football together.";
// var replaceMessage = message.replace("and","&");
// document.write("Message: " + message + "<br>");
// document.write("Message after replacement: " + replaceMessage);

//       Q#9
// var str = "472";
// document.write("value: " + str + "<br>");
// document.write("Type: " + typeof(str) + "<br>");
// var num = parseInt(str);
// document.write("value: " + str + "<br>");
// document.write("Type: " + typeof(num));

//      Q#10
// var userInput = prompt("Enter any message to covert in capital letters");
// document.write("User input: " + userInput + "<br>");
// userInput = userInput.toUpperCase();
// document.write("Upper case: " + userInput);

//     Q#11
// function toTitleCase(text) {
//    return text.replace(/\w\S*/g, function(word) {
//        return word.charAt(0).toUpperCase() + word.substr(1).toLowerCase();
//    });
// }
// const userInput = prompt("Enter your text:");
// if (userInput !== null) {
//    const titleCaseText = toTitleCase(userInput);
//    alert(`Converted to Title Case: ${titleCaseText}`);
// } else {
//    alert("No input provided.");
// }

//      Q#12
var num = 35.36 ;
//Remove the dot to display “3536” display in your browser.

var num = 35.36;
var numString = num.toString();
document.write("Number: " + numString + "<br>");
var result = numString.replace(".","");
document.write("Result: " + result);
