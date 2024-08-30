// Check if number is multiple of 5
/*let userInput = prompt("Enter Number")
let number = Number(userInput);

if(number%5==0){
    alert("Multiple of 5")
}else{
    alert("Not multiple of 5")
}
*/

// Give grade to student according to their marks
/*let marks = prompt("Enter Marks : ")
if(marks>=80 && marks<=100){
    alert("Your grade is A")
}
else if(marks>=70 && marks<=79){
    alert("Your grade is B")
}
else if(marks>=60 && marks<=69){
    alert("Your grade is C")
}
else if(marks>=50 && marks<=59){
    alert("Your grade is D")
}
else{
    alert("You are fail.")
}
*/

// For-in Loop
/*const student = {
    name:"Swapnil",
    age:24,
    cgpa:7.9,
    pass:true
}

for(let key in student){
    console.log(key+" = "+student[key]);
}
*/

// Print all even number between 1-100
// for(let i=1;i<=100;i++){
//     if(i%2==0) console.log(i+" is Even");
// }

// Generate random number untill user guess correct number
/*let userInput=prompt("Enter number : ");
while(true){
    let ran=Math.random();
    let userInput=prompt("Your guessing was wrong : ");
    if(ran==userInput) break;
}
*/

// Template Literals
/*const obj = {
    name:"Swapnil",
    age:24
}
console.log(`My name is ${obj.name} and age is ${obj.age}`)
*/

// Create a funciton which takes string and return vowels of string
/*function findVowels(str){
    let len=str.length;
    for(let i=0;i<len;i++){
        if(str.charAt(i)=='a' || str.charAt(i)=='e' || str.charAt(i)=='i' || str.charAt(i)=='o' || str.charAt(i)=='u'){
            console.log(str.charAt(i));
        }
    }
}
*/

// Create same thing using arrow funciton
/*const findVowels = (str) => {
    let len=str.length;
    for(let i=0;i<len;i++){
        if(str.charAt(i)=='a' || str.charAt(i)=='e' || str.charAt(i)=='i' || str.charAt(i)=='o' || str.charAt(i)=='u'){
            console.log(str.charAt(i));
        }
    }
}
*/

// Create a new button element. Give it a text "click me", background color of red & text color of white. Insert the button as the first element inside the body tag.
/*let btn = document.createElement("button");
btn.innerText = "click me";
btn.style.backgroundColor = "red";
btn.style.textColor = "white";

let place = document.querySelector("body");
place.append(btn);

console.dir(document.getElementsByTagName("body")); // return collection of element 
console.dir(document.querySelector("body")); // return single element
*/

// access a class in css and append the change in html using js
/*let para = document.querySelector("p");
para.setAttribute("class","newpara");
*/

// Change mode of pc
/*let curMode = "light"
let body = document.querySelector("body");
let btn = document.querySelector(".btn");
btn.addEventListener("click", ()=>{
    if(curMode=="light"){
        body.style.backgroundColor="black";
        curMode="dark";
        console.log("dark mode");
    }    
    else{
        body.style.background="white";
        curMode="light";
        console.log("light mode");
    }
});
*/

// Fetching data from API

let btn = document.querySelector("#btn");
let jokeContent = document.querySelector("#jokeData");

const fetchJoke = async ()=>{
    URL =  "https://hindi-jokes-api.onrender.com/jokes?api_key=078a738bcb9bf36766b7b1f24088";
    let response = await fetch(URL);
    console.log(response.status);
    let joke = await response.json();
    jokeContent.innerText=joke.jokeContent;
};

fetchJoke();

btn.addEventListener("click",fetchJoke);

