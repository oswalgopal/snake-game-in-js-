var cvs = document.getElementById("cvs");
// cvs.width=600;  // we can also increase width and height like this 
// cvs.height=700;


var context=cvs.getContext("2d"); //adding more attributes 



var snakeW=10;  // for width of snake
var snakeH=10;  // for heigth of snake



function snake(x,y){
    context.fillStyle="white";  
    context.fillRect(x*snakeW,y*snakeH,snakeH,snakeW); //(x,y,width,height)
    
}    


snake(1,3);