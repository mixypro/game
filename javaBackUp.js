  	function random(x) {
  		return Math.floor(Math.random() * x);
  	}
  	function computerPlay() {
  		x = random(3);
  		if (x==0){
  			str = "rock";
  		} else if (x==1) {
  			str = "paper";
  		} else if (x==2) {
  			str = "scissors";
  		} return str;
  	}

const button1 = document.querySelector('.paper');
const button2 = document.querySelector('.rock');
const button3 = document.querySelector('.scissors');
const input1 = document.getElementById('games');
function input(){
	return input1.value;
}
var noone = player = comp = 0;
function singleRound(x, y) {
  		x = x.toLocaleLowerCase();
		  y = y.toLocaleLowerCase();
		  let winner = "x"
  		if (x==y) {
  			console.log("Naah, you chose the same, " + x + ".");
  			noone+=1;
  		} else if (x=="rock" && y=="scissors") {
  			console.log("You win with " + x + "! Computer chose " + y + ".");
  			player+=1;
  		} else if (x=="rock" && y == "paper") {
  			console.log("Computer win with " + y + ", you lose with " + x + ".");
  			comp+=1;
  		} else if (x=="paper" && y=="rock") {
  			console.log("You win with " + x + "! Computer chose " + y + ".");
  			player+=1;
  		} else if(x=="paper" && y == "scissors") {
  			console.log("Computer win with " + y + ", you lose with " + x + ".");
  			comp+=1;
  		} else if (x=="scissors" && y == "paper") {
  			console.log("You win with " + x + "! Computer chose " + y + ".");
  			player+=1;
  		} else if (x=="scissors" && y == "rock") {
  			console.log("Computer win with " + y + ", you lose with " + x + ".");
  			comp+=1
  		} if (comp > player && comp >= noone) {
  			winner = "Computer is winner with " + comp + "wins!";
  		} else if (player > comp && player >= noone) {
  			winner = "Player is winner with " + player + "wins!";
		  } return winner;
		  console.log(input1.value);
	  
	}
	function vrati(x, n){
		for (let i = 0; i<n; i++) {
			singleRound(x, computerPlay());;
		}
		if(comp > noone && comp > player) {
			console.log('Computer wins with '+comp+' and player lose with ' + player+'.')
		} else if (player > noone && player > comp) {
			console.log('Player wins with '+ player+' and computer lose with ' + comp +'.')
		} else if (noone > comp && noone > player) {
			console.log('Draw games is more then computer or player wins! (draw: ' + noone + ', player: ' + player + ' computer: ' + comp + ').');
		}
		noone = 0;
		player = 0;
		comp = 0;
	}
  	// function game(n) {
  	// 	for(let i=0; i<n; i++){
  	// 		singleRound(choise, computerPlay());
  	// 	} return console.log(singleRound(choise, computerPlay()));
  	// }
    // let choise = prompt("Chose between paper, rock and scissors?!?");
    // choise = 'test';
    // while (choise != "rock" && choise != "scissors" && choise != "paper") {
    //   alert("Wrong input! Chose between paper, rock and scissors!");
    //   choise = prompt("Chose between paper, rock and scissors?!?");
    //   choise = choise.toLocaleLowerCase();
    // }