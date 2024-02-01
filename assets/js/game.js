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
    ;
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

startGame();
