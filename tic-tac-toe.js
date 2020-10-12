"use strict";

window.onload = function(){
var bodyContent =document.getElementsByTagName("body");
var childElements= document.body.children;
var contents = document.getElementById("board").children;
 for(var i=0; i<contents.length; i++){
     contents[i].className="square";
 } 


let choice = true;
 for(var i=0; i<contents.length; i++){
     contents[i].addEventListener("click", function(){
         if(choice){
             xBox(this);
             choice=!choice;
         }else{
             oBox(this);
             choice=!choice;    
         }
         //checkWin();
     }); 
 }
 
 for(var i=0; i<contents.length; i++){
     var site = contents[i];
    site.addEventListener('mouseover', function(e) {
        e.target.classList.add('hover');
      });
      
      site.addEventListener('mouseout', function(e) {
        e.target.classList.remove('hover');
      });  
} 

function xBox(place){
     place.classList.add('X');
     place.textContent='X';
 }

 function oBox(place){
    place.classList.add('O');
    place.textContent='O';   
}

let winner = document.getElementById("status");
let game=true;
if (game){
    checkWin(this);
}

function checkWin(){
// 1st row
    if(contents[0].className=="square x" && contents[1].className=="square x" && contents[3].className=="square x"){
        winner.classList.add("you-won");
        winner.innerHTML= "Congratulations! X is Winner!";
    }
    if(contents[0].className=="square O" && contents[1].className=="square O" && contents[3].className=="square O"){
        winner.classList.add("you-won");
        winner.innerHTML= "Congratulations! O is Winner!";
    }
// 2nd row
    if(contents[3].className=="square X" && contents[4].className=="square X" && contents[5].className=="square X"){
        winner.classList.add("you-won");
        winner.innerHTML= "Congratulations! X is Winner!";
    }
    if(contents[3].className=="square O" && contents[4].className=="square O" && contents[5].className=="square O"){
        winner.classList.add("you-won");
        winner.innerHTML= "Congratulations! O is Winner!";
    }
// 3rd row
    if(contents[6].className=="square X" && contents[7].className=="square X" && contents[8].className=="square X"){
        winner.classList.add("you-won");
        winner.innerHTML= "Congratulations! X is Winner!";
    }
    if(contents[6].className=="square O" && contents[7].className=="square O" && contents[8].className=="square O"){
        winner.classList.add("you-won");
        winner.innerHTML= "Congratulations! O is Winner!";
    }
// 1st column
    if(contents[0].className=="square X" && contents[3].className=="square X" && contents[6].className=="square X"){
        winner.classList.add("you-won");
        winner.innerHTML= "Congratulations! X is Winner!";
    }
    if(contents[0].className=="square O" && contents[3].className=="square O" && contents[6].className=="square O"){
        winner.classList.add("you-won");
        winner.innerHTML= "Congratulations! O is Winner!";
    }
     
// 2nd column
    if(contents[1].className=="square X" && contents[4].className=="square X" && contents[7].className=="square X"){
        winner.classList.add("you-won");
        winner.innerHTML= "Congratulations! X is Winner!";
    }
    if(contents[1].className=="square O" && contents[4].className=="square O" && contents[7].className=="square O"){
        winner.classList.add("you-won");
        winner.innerHTML= "Congratulations! X is Winner!";
    }
// 3rd column
    if(contents[2].className=="square X" && contents[5].className=="square X" && contents[8].className=="square X"){
        winner.classList.add("you-won");
        winner.innerHTML= "Congratulations! X is Winner!";
    }
    if(contents[2].className=="square O" && contents[5].className=="square O" && contents[8].className=="square O"){
        winner.classList.add("you-won");
        winner.innerHTML= "Congratulations! O is Winner!";
    }
// 1st diagonal
    if(contents[0].className=="square X" && contents[4].className=="square X" && contents[8].className=="square X"){
        winner.classList.add("you-won");
        winner.innerHTML= "Congratulations! X is Winner!";
    }
    if(contents[0].className=="square O" && contents[4].className=="square O" && contents[8].className=="square O"){
        winner.classList.add("you-won");
        winner.innerHTML= "Congratulations! O is Winner!";
    }
// 2nd diagonal
    if(contents[2].className=="square X" && contents[4].className=="square X" && contents[6].className=="square X"){
        winner.classList.add("you-won");
        winner.innerHTML= "Congratulations! X is Winner!";
    }
    if(contents[2].className=="square O" && contents[4].className=="square O" && contents[6].className=="square )"){
        winner.classList.add("you-won");
        winner.innerHTML= "Congratulations! O is Winner!";
    }
}

 document.getElementsByClassName('button').addEventListener("click", reset);
 function reset(){
    for(var i=0; i<contents.length; i++){
        contents[i].innerHTML='';
        contents[i].classList.remove("X");
        contents[i].classList.remove("O");
    }

 }

} 








 



