//function to get option from user
function getOptionUser() {
	$('img').click(function(){
		$('img').toggleClass();
	})
}

//function to generate option from computer
function getOptionComputer() {
	var options = ["rock","paper","scissor"];
	return options[Math.floor(Math.random()*3)];
}

//function to change the counter after every round
function changeCounter(winner) {
	if (winner === "computer") {
		$(.'1').fadeIn(fast);//change this
	}
}

//function to compare the options and return who won in each round
function compare(user, computer) {
	$user="user";
	$computer="computer";
	switch (user) {
		case "rock": if(computer === "paper")
					 {
						changeCounter($computer);
						return $computer;
					 }
					 else if (computer === "scissor") {
						changeCounter($user);
						return $user;
					 }
					 break;

		case "paper": if (computer === "rock") {
						changeCounter($user);
						return $user;
					 }
					 else if (computer === "scissor") {
					 	changeCounter($computer);
					 	return $computer;
					 }
					 break;

		case "scissor": if (computer === "rock") {
							changeCounter($computer);
							return $computer;
						}
						else if (computer === "paper") {
							changeCounter($user);
							return $user;
						}
						break;
	}
}

//function to disply overall winner
function display($winner) {
	$("#winner").text("The winner is " + $winner + ".");
}

$(document).ready(function() {
	var player1 = 0; //user
	var player2 = 0; //computer
	$('.score').hide();

	while (player2 !== 3 && player1 !== 3) {
		var computer=getOptionComputer();
		var user=getOptionUser();
		var winner=compare(user,computer);

		if (winner === "user") {
			player1 = player1 + 1;
		}
		else {
			player2 = player2 + 1;
		}		
	}
	//final winner
	if (player1 === 3) {
		display(user);
	}
	else {
		display(computer);
	}
});