// for(let i = 1; i <=3; i++){
//     // console.log("hello");
// }

// for(let i = 1;i < 5; i++){
//     // console.log(i);
// }

// // while loop 

// let i = 1;
// while(i <= 7){
//     // console.log(i);
//     i++
// }

// let e = 2;
// while(e <= 10){
//     // console.log(e);
//     e++ 
// }

// // do... while loop 
// let u = 1;
// do{
//     // console.log(u);
//     u++
// }while(u <= 6);

// let fruits = ["apple","banana","mango"];

// for(let fruit of fruits){
//     // console.log(fruit);
// }

// let items = document.querySelectorAll("li")

// for(let item of items){
//     item.style.color = "red"
//     item.style.background = "green"
//     item.style.padding = "10px"
// }

// let buttons = document.querySelectorAll(".btn")

// for(let button of buttons){
//     button.addEventListener("click", function(){
//         alert("button click");
        
//     })
// }

// =====================
// let list = document.getElementById("list")

// for(let i = 1;i <= 6;i++){
//     let li = document.createElement("li")
//     li.innerText = "LIST" + i
//     list.appendChild(li)
// }

// =============================

// let buttons = document.querySelectorAll(".scoreRun");
// let total = 0;
// let totalDisplay = document.getElementById("total");

// for(let btn of buttons){
//   btn.addEventListener("click", (e)=>{
//     let value = Number(e.target.innerText);
//     total += value;
//     totalDisplay.innerText = total;
//   });
// }


// console.log("JS loaded");

//     let buttons = document.querySelectorAll(".scoreRun");
//     console.log(buttons); // check buttons

//     let total = 0;
//     let totalDisplay = document.getElementById("total");

//     for(let btn of buttons){
//       btn.addEventListener("click", (e)=>{
//         console.log("clicked"); // check click

//         let value = Number(e.target.innerText);
//         console.log("value:", value);

//         total += value;
//         totalDisplay.innerText = total;
//       });
//     }

// let buttons = document.querySelectorAll(".scoreRun");
// let total = 0;

// for(let btn of buttons){
//   btn.addEventListener("click", function(){
//     let value = parseInt(btn.innerText);
//     total += value;
//     document.getElementById("total").innerText = total;
//   });
// }


// let list = document.getElementById("list");

// for(let i = 1; i <= 6; i++){
//     let li = document.createElement("li");
//     li.innerText = "Item" + i;

//     let btn = document.createElement("button");
//     btn.innerText = "DELETE"

//     btn.addEventListener("click", function (){
//         li.remove();
//     });

//     li.appendChild(btn)
//     list.appendChild(li)
// }

// let list = document.getElementById("list")

// for(let i =1;i <= 6; i++){
//     let li = document.createElement("li");
//     li.innerText = "Item" + i;

//     let btn = document.createElement("button");
//     btn.innerText = "Delete"

//     btn.addEventListener("click",()=> {
//         li.remove()
//     })

//     li.appendChild(btn)
//     list.appendChild(li)
// }


let list = document.getElementById("list")

for(let i = 1; i <= 6; i++){
    let li = document.createElement("li")
    li.innerText = "Item" + i

    let btn = document.createElement("button")
    btn.innerText = "delete"

    btn.addEventListener("click", function (){
        li.remove()
    })

    list.appendChild(li)
    li.appendChild(btn)
}