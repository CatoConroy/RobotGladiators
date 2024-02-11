// Load CSS prior to script running
if (!document.getElementById) document.write('<link rel="stylesheet" type="text/css" href="assets\css\style.css">');

// let playerName = 'Clank McKrank';
let playerName = window.prompt("What is your robot's name?");
let playerHealth = 100;
let playerAttack = 10;
let playerMoney = 10;

// You can also log multiple values at once like this
console.log(playerName, playerAttack, playerHealth);

let enemyNames = ["Binary Brawler", "Byte Tyson", "Algorithm Assassin", "Firewall Fury"];
let enemyHealth = 50;
let enemyAttack = 12;


// // Display Enemy Array
//   for (let i = 0; i < enemyNames.length; i++) {
//     console.log(enemyNames[i]);
//     console.log(i);
//     console.log(enemyNames[i] + " is at " + i + " index");
//   }

  // Game States
  // "WIN" - Player robot has defeated all enemy-robots
  //  *Fight all Enemy Robots

// fight function


let fight = function(enemyName) {
  while (playerHealth > 0 && enemyHealth > 0) {
    //Ask player whether they would like to FIGHT or RUN
    let promptFight = window.prompt('Would you like to FIGHT or SKIP this battle? Enter "FIGHT" or "SKIP" to choose.');
    // If player picks "skip" confirm and then stop the loop
    if (promptFight === "skip" || promptFight === "SKIP"){
      // confirm player skip
      let confirmSkip = window.confirm("Are you sure you would like to skip this match?");
      // if yes, leave fight
      if (confirmSkip) {
        window.alert(playerName + ' has decided to skip thigh fight. Goodbye!');
        //subtract money from playerMoney for skipping
        playerMoney = playerMoney - 10;
        console.log ("playerMoney", playerMoney);
        break;
      }
    }

    enemyHealth = enemyHealth - playerAttack;
    console.log(
      playerName + ' attacked ' + enemyName + '. ' + enemyName + " now has " + enemyHealth + ' health remaining.'
    );

 // check enemy's health
 if (enemyHealth <= 0) {
  window.alert(enemyName + ' has died!');

  // award player money for winning
  playerMoney = playerMoney + 20;

  // leave while() loop since enemy is dead
  break;
} else {
  window.alert(enemyName + ' still has ' + enemyHealth + ' health left.');
}

     // remove players's health by subtracting the amount set in the enemyAttack variable
     playerHealth = playerHealth - enemyAttack;
     console.log(
       enemyName + ' attacked ' + playerName + '. ' + playerName + ' now has ' + playerHealth + ' health remaining.'
     );
 
     // check player's health
     if (playerHealth <= 0) {
       window.alert(playerName + ' has died!');
       // leave while() loop if player is dead
       break;
     } else {
       window.alert(playerName + ' still has ' + playerHealth + ' health left.');
     }

  }
} // end of fight function

// run fight function to start game
let startGame = function () {
for(let i = 0; i < enemyNames.length; i++) {

  if (playerHealth > 0) {
    window.alert("Welcome to Robot Gladiators! Round " + ( i + 1 ))

      let pickedEnemyName = enemyNames [i];
  enemyHealth = 50;  

 
  
  // debugger;
  fight(pickedEnemyName);

  if (playerHealth > 0 && i < enemyNames.length - 1){
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

  if (playerHealth > 0){
    window.alert("Great job, you've survived the game! You now have a score of" + playerMoney + ".0");
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

  if (playerMoney >= 7){

    window.alert("Refilling player's health by 20 for 7 dollars.");

    // Health Purchase
    playerHealth = playerHealth +20;
    playerMoney = playerMoney - 7;
  }

  else {
    window.alert("You don't have enough money!");
  }
    break;
  case "UPGRADE":
  case "upgrade":

  if (playerMoney >= 7){
    window.alert("Upgrading player's attack by 6 for 7 dollars.");
    playerAttack = playerAttack + 6;
    playerMoney = playerMoney - 7;
  }

  else {
    window.alert("You don't have enough money!");
  }
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
