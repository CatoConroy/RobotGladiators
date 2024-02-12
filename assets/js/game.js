// Load CSS prior to script running
if (!document.getElementById) document.write('<link rel="stylesheet" type="text/css" href="assets\css\style.css">');

// // let playerInfo.name = 'Clank McKrank';
// let playerInfo.name = window.prompt("What is your robot's name?");
// let playerInfo.health = 100;
// let playerInfo.attack = 10;
// let playerInfo.money = 10;




// You can also log multiple values at once like this

// let enemy.names = ["", "", "", ""];
// let enemy.health = 50;
// let enemy.attack = 12;




// // Display Enemy Array
//   for (let i = 0; i < enemy.names.length; i++) {
//     console.log(enemy.names[i]);
//     console.log(i);
//     console.log(enemy.names[i] + " is at " + i + " index");
//   }

  // Game States
  // "WIN" - Player robot has defeated all enemy-robots
  //  *Fight all Enemy Robots

// fight function


let randomNumber = function(min, max) {
  let value = Math.floor(Math.random() * (max - min + 1) + min);

  return value;
};

let playerInfo = {
  name: window.prompt("What is your robot's name?"),
  health: 100,
  attack: 10,
  money: 10,

  reset: function() {
    this.health = 100;
    this.money = 10;
    this.attack = 10;
  },

  refillHealth: function() {
    if (this.money >= 7) {
      window.alert("Refilling player's health by 20 for 7 dollars.");
      this.health += 20;
      this.money -= 7;
    } 
    else {
      window.alert("You don't have enough money!");
    }
  },
  upgradeAttack: function() {
    if (this.money >= 7) {
      window.alert("Upgrading player's attack by 6 for 7 dollars.");
      this.attack += 6;
      this.money -= 7;
    } 
    else {
      window.alert("You don't have enough money!");
    }
  }
};

console.log(playerInfo.name, playerInfo.attack, playerInfo.health);



let enemyInfo = [
  {
    name: "Binary Brawler",
    attack: randomNumber(10, 14)
  },
  {
    name: "Byte Tyson",
    attack: randomNumber(10, 14)
  },
  {
    name: "Algorithm Assassin",
    attack: randomNumber(10, 14)
  },
  {
    name: "Firewall Fury",
    attack: randomNumber(10, 14)
  }
];


let fight = function(enemy) {

console.log(enemy);

  while (playerInfo.health > 0 && enemy.health > 0) {
    //Ask player whether they would like to FIGHT or RUN
    let promptFight = window.prompt('Would you like to FIGHT or SKIP this battle? Enter "FIGHT" or "SKIP" to choose.');
    // If player picks "skip" confirm and then stop the loop
    if (promptFight === "skip" || promptFight === "SKIP"){
      // confirm player skip
      let confirmSkip = window.confirm("Are you sure you would like to skip this match?");
      // if yes, leave fight
      if (confirmSkip) {
        window.alert(playerInfo.name + ' has decided to skip thigh fight. Goodbye!');
        //subtract money from playerInfo.money for skipping
        playerInfo.money = Math.max(0, playerInfo.money - 10);
        console.log ("playerInfo.money", playerInfo.money);
        break;
      }
    }

    let damageE = randomNumber(playerInfo.attack -3, playerInfo.attack);

    enemy.health = Math.max(0, enemy.health - damageE);
    console.log(
      playerInfo.name + ' attacked ' + enemy.name + '. ' + enemy.name + " now has " + enemy.health + ' health remaining.'
    );

 // check enemy's health
 if (enemy.health <= 0) {
  window.alert(enemy.name + ' has died!');

  // award player money for winning
  playerInfo.money = playerInfo.money + 20;

  // leave while() loop since enemy is dead
  break;
} else {
  window.alert(enemy.name + ' still has ' + enemy.health + ' health left.');
}

     // remove players's health by subtracting the amount set in the enemy.attack variable
     let damage = randomNumber(enemy.attack - 3, enemy.attack);

     playerInfo.health = Math.max(0, playerInfo.health - damage);
     console.log(
       enemy.name + ' attacked ' + playerInfo.name + '. ' + playerInfo.name + ' now has ' + playerInfo.health + ' health remaining.'
     );
 
     // check player's health
     if (playerInfo.health <= 0) {
       window.alert(playerInfo.name + ' has died!');
       // leave while() loop if player is dead
       break;
     } else {
       window.alert(playerInfo.name + ' still has ' + playerInfo.health + ' health left.');
     }

  }
} // end of fight function

// run fight function to start game
let startGame = function () {

// reset player stats at the beginning of a game.
  playerInfo.reset();

for(let i = 0; i < enemyInfo.length; i++) {

  if (playerInfo.health > 0) {
    window.alert("Welcome to Robot Gladiators! Round " + ( i + 1 ))

      let pickedEnemyObj = enemyInfo[i];
      pickedEnemyObj.health = randomNumber(40, 60);

 
  
  // debugger;
  fight(pickedEnemyObj);

  if (playerInfo.health > 0 && i < enemyInfo.length - 1){
    let storeConfirm = window.confirm("The fight is over, would you like to visit the shop before the next round?");

    if (storeConfirm) {
    shop ();
    }
  }
  
    
  }  
  
  else {
    window.alert("You have lost the battle! Game Over!");
    break;
    }
  } 
  
  // After Loop ends, call end game
  endGame();
}

let endGame = function (){

  if (playerInfo.health > 0){
    window.alert("Great job, you've survived the game! You now have a score of " + playerInfo.money + ".0");
  }
  else {
    window.alert("You've lost your robot in battle.");
  }
  let playAgainConfirm = window.confirm ("Would you like to play again?");

  if (playAgainConfirm) {
    startGame()
    }

    else {
      window.alert("Thank you for playing Robot Gladiators! Come back soon!");
    }
  

}

let shop = function (){
  let shopOptionPrompt = window.prompt (
    "Would you like to REFILL your health, UPGRADE you attack, or LEAVE the store? Please enter one: 'REFILL', 'UPGRADE', or 'LEAVE' to make a choice."
  );

switch (shopOptionPrompt) {
  case "REFILL":
    case "refill":
      playerInfo.refillHealth();
      break;
    case "UPGRADE":
    case "upgrade":
      playerInfo.upgradeAttack();
      break;
    break;
  case "leave":
  case "LEAVE":
    window.alert("Leaving the Store.");
    break;
  default:
    window.alert("You did not pick a valid option. Please try again.");
    shop();
    break;
}

};

startGame();
