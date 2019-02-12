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
const myDiv = document.createElement('div');
function input(){
	return input1.value;
}

const textNeki = document.getElementById('textarea');
const para1 = document.getElementById('res')
var noone = player = comp = 0;
function singleRound(x, y) {
  		x = x.toLocaleLowerCase();
		  y = y.toLocaleLowerCase();
		  let winner = "x"
  		if (x==y) {
			textNeki.value += "Naah, you chose the same, " + x + ". \n" ;
			//   myDiv.appendChild(para);
  			noone+=1;
  		} else if (x=="rock" && y=="scissors") {
			textNeki.value += "You win with " + x + "! Computer chose " + y + ". \n";
			// myDiv.appendChild(para);
  			player+=1;
  		} else if (x=="rock" && y == "paper") {
			textNeki.value += "Computer win with " + y + ", you lose with " + x + ". \n";
			// myDiv.appendChild(para);
  			comp+=1;
  		} else if (x=="paper" && y=="rock") {
			textNeki.value += "You win with " + x + "! Computer chose " + y + ".\n";
			// myDiv.appendChild(para);
  			player+=1;
  		} else if(x=="paper" && y == "scissors") {
			textNeki.value += "Computer win with " + y + ", you lose with " + x + ".\n";
			// myDiv.appendChild(para);
  			comp+=1;
  		} else if (x=="scissors" && y == "paper") {
			textNeki.value += "You win with " + x + "! Computer chose " + y + ".\n";
			// myDiv.appendChild(para);
  			player+=1;
  		} else if (x=="scissors" && y == "rock") {
			textNeki.value += "Computer win with " + y + ", you lose with " + x + ".\n";
			// myDiv.appendChild(para);
  			comp+=1
  		} if (comp > player && comp >= noone) {
  			winner = "Computer is winner with " + comp + "wins!";
  		} else if (player > comp && player >= noone) {
  			winner = "Player is winner with " + player + "wins!";
		  } return winner;
		  console.log(input1.value);
	}
	function vrati(x, n){
		textNeki.value = '';
		for (let i = 0; i<n; i++) {
			singleRound(x, computerPlay());;
		}
		if(comp > noone && comp > player) {
			para1.innerHTML = 'Computer wins with '+comp+' and player lose with ' + player + '. (Draw: ' + noone + ').';
			// document.appendChild(para1);
		} else if (player > noone && player > comp) {
			para1.innerHTML = 'Player wins with '+ player+' and computer lose with ' + comp +'. (Draw: ' + noone + ').';
			// document.appendChild(para1);
		} else if (noone > comp && noone > player) {
			para1.innerHTML = 'Draw games is more then computer or player wins! (draw: ' + noone + ', player: ' + player + ' computer: ' + comp + ').';
			// document.appendChild(para1);
		}
		// document.body.appendChild(myDiv);
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