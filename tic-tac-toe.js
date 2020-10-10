"use strict";

window.onload = function(){
var bodyContent =document.getElementsByTagName("body");
var childElements= document.body.children;
var contents = document.getElementById("board").children;
 for(var i=0; i<contents.length; i++){
     contents[i].className="square";
 } 


 var plays = [];

let choice = true;
 for(var i=0; i<contents.length; i++){
     contents[i].classList.add('square');
     contents[i].addEventListener("click", function(){
         //xBox(this);
         if(choice){
             xBox(this);
             choice=!choice;
         }else{
             oBox(this);
             choice=!choice;
         }
   
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


 


 
}



/* var xBox = document.getElementById(".square.x");
 var oBox = document.getElementById(".square.o");
 xBox.className.add("square");
 oBox.className.add("square");
 
 function choice(){
     square.addEventListener('click', e => {
         e.preventDefault();
         document.getElementById(".square.x").innerHTML = xBox;
       }); 
} */



