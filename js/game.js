class Game {
    constructor(){
 }
 getState(){
 var gameref=database.ref('gameState');
 gameref.on("value",function(data){
     gameState=data.val();
 }) 
 }
 update(state){
     database.ref('/').update({
         gameState:state
     })
 }
   async start(){
       if(gameState===0){
        player= new Player();
        var countref=await database.ref('playerCount').once("value");
        if(countref.exists()){
        playerCount=countref.val();
        player.getcount();
        }
        form=new Form();
        form.display();
    }
   }
     play(){
     form.hide();
     textSize(20);
     text("game starts",200,150);
     Player.getinfo();
     if(allplayer!==undefined){
         var displayposition=200;
         for(var pli in allplayer){
             if(pli==="player"+player.index){
                 fill("red");          
                   }
                   else{
                       fill("black");
  }
         displayposition+=30;
         textSize(20);
         text(allplayer[pli].name+":"+allplayer[pli].distance,200,displayposition)
     }
     }
     if(keyIsDown(UP_ARROW)&&player.index!==null){
     player.distance+=50;
     player.update()
     
     }
}
}