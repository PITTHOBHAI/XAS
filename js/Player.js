class Player {
  constructor(){
    this.index=1;

    this.distance=0;
    this.name=null;
  }

  getCount(){
    var playerCountRef = database.ref('playerCount');
    playerCountRef.on("value",(data)=>{
      playerCount = data.val();
    })
  }

  updateCount(count){
    database.ref('/').update({
      playerCount: count
    });
  }

  update(){
    var playerIndex = "players/player" + this.index;
    database.ref(playerIndex).set({
      name:this.name,
      distance:this.distance,

    });
  }

  static getplayerinfo(){
   console.log("check");
   var playerinfo=database.ref("players");
   playerinfo.on("value",(data)=>{
   allplayers=data.val();
   
   })
}
}