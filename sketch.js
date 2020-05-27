var database,gameState=0,playerCount;
var game,form,player,allplayer,distance=0;
function setup(){
    createCanvas(500,500);
   
    database=firebase.database();
    game=new Game();
    game.getState();
    game.start();

   
    
}

function draw(){
    background("white");

}


