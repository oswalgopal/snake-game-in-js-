var cvs = document.getElementById("cvs");
// cvs.width=600;  // we can also increase width and height like this 
// cvs.height=700;


var ctx=cvs.getContext("2d"); //adding more attributes 



var snakeW=10;  // for width of snake
var snakeH=10;  // for heigth of snake

var dir="rigth";

function drawSnake(x,y){
    ctx.fillStyle="white";  
    ctx.fillRect(x*snakeW,y*snakeH,snakeH,snakeW); //(x,y,width,height)
    ctx.fillStyle="black";  
    ctx.strokeRect(x*snakeW,y*snakeH,snakeH,snakeW);
}    

//create snake
var len=4;
snake=[];


for(i=len-1;i>=0;i--)
{
    snake.push({
        x:i,
        y:0
    })

}
    function dctr(){
        if(dir!="up")dir="down";
    }
    function uctr(){
        if(dir!="down")dir="up";
    }
    function rctr(){
        if(dir!="left")dir="rigth";
    }
    function lctr(){
        if(dir!="rigth")dir="left";
    }

    //direction control
    document.addEventListener("keydown",dirContral);
    
    function dirContral(e){
        if(e.keycode==37 && dir!="rigth")       //37 is keycode for left arrow key
        {
            dir="left";
        }
         else if(e.keycode==38 && dir!="down")       //38 is keycode for up arrow key
        {
            dir="up";
        }else if(e.keycode==39 && dir!="left")       //39 is keycode for rigth arrow key
        {
            dir="rigth";
        }else if(e.keycode==40 && dir!="up")       //40 is keycode for down arrow key
        {
            dir="down";
        }
    }


    //food 

    var food={
        x:Math.round(Math.random()*(49)+1),
        y:Math.round(Math.random()*(49)+1)
    }


    //draw food 
    function drawFood(x,y){
    ctx.fillStyle="red";  
    ctx.fillRect(x*snakeW,y*snakeH,snakeH,snakeW); //(x,y,width,height)
    ctx.fillStyle="black";  
    ctx.strokeRect(x*snakeW,y*snakeH,snakeH,snakeW);
    }



    //draw function
function draw(){

    ctx.clearRect (0,0,cvs.width,cvs.heigth);   
    for(var i=0;i<snake.length;i++)
    {
        var X =snake[i].x;
        var Y =snake[i].y;
        drawSnake(X,Y);
    }
    drawFood(food.y,food.x);


//main head

var snakeX = snake[0].x ;
var snakeY = snake[0].y ;

if(dir=="rigth"){
    snakeX++;
}
else if(dir=="left"){
    snakeX--;
}
else if(dir=="up"){
    snakeY--;
}
else if (dir=="down") {
    snakeY++;
}

if(snakeX==food.x &&snakeY==food.y){
    var food={
        x:Math.round(Math.random()*(49)+1),
        y:Math.round(Math.random()*(49)+1)
    }
    

    var newHead = {
    
        x : snakeX,
        y : snakeY
    }

}

else{
snake.pop();   
}
//new head

var newHead = {
    
    x : snakeX,
    y : snakeY
}

snake.unshift(newHead);
}//end of draw function

setInterval(draw,100);


