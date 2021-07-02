class Game {
  constructor(){}
  
  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })
   
  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      player = new Player();
      var playerCountRef=await database.ref("playerCount").once("value");
      if(playerCountRef.exists()){
        playerCount=playerCountRef.val();
        player.getCount();
      }
      form = new Form()
      form.display();

  
    }
  }
  Play(){
  form.hide();
  textSize(25);
  text("gamestart",200,100);
  player=new Player();
  player.getplayerinfo();
  if(allplayers!=undefined){
    var displayname=140;
    for(var i in allplayers){
    if(i==="player"+playerindex){
    fill("blue");
      
    }
    else {
      fill("red");
    }
    displayname+=20;
    text(allplayers[i].name+":"+allplayers[i].distance,190,displayname);
    }
  }
  
  
  if(keyDown(UP_ARROW)&&player.index!=null){
  player.distance+=50;
  player.update();
      
  }

  
  }
}
