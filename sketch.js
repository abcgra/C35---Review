var ball;
var database;
var position;
var position1;
function setup(){
    createCanvas(500,500);
    
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";


    ball2 = createSprite(250,250,10,10);
    ball2.shapeColor = "green";


  database=firebase.database();
  var squarePosition=database.ref("Square")
    squarePosition.on("value",readPosition)

    var boxPosition=database.ref("Box")
    boxPosition.on("value",ReadPosition)

}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        changePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        changePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        changePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        changePosition(0,+1);
    }
    drawSprites();
}

function changePosition(x,y){
   database.ref("Square").set({
       "x":position.x+x,
       "y":position.y+y

   })

   database.ref("Box").set({
    "x":position1.x+x,
    "y":position1.y+y

})

}

function readPosition(data){
position = data.val()
ball.x=position.x
ball.y=position.y
}

function ReadPosition(data){
    position1 = data.val()
    ball2.x=position1.x
    ball2.y=position1.y
    }