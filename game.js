let player={
    health:150,
    attack:10
}

let enemy={
    name:["a","b","c"],
    health:20,
    attack:10
}

//fight while enemy defeated
//
alert("welcome to gladiator")

for(let i=0;i<enemy.name.length;i++){
 
   let start= window.prompt("do you wanna fight or skip")
   window.alert("Welcome to Robot Gladiators! Round " + ( i + 1 ) );
   if(start==="fight"){
       enemy.health=20
    fight(enemy.name[i])  
   }else if(start==="skip"){
       alert("player skip the game")
       break;
   }
   
}
function fight(enemyName){
   while(player.health>0 && enemy.health>0){
       console.log("here")
      alert("player attack enemy")
      enemy.health=enemy.health-player.attack
      alert(`enemy has ${enemy.health} health`)
      alert("enemys attack player")
      player.health=player.health-enemy.attack
      alert(`${enemyName} has ${player.health} health`)
   } 
  
}