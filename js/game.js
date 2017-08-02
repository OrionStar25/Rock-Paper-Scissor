var player1 = 0; //user
var player2 = 0; //computer

//function to get option from user
function getOptionUser() {
	// $('.options').mouseenter(function(){
	// 	$('img').fadeIn('slow');
	// })
}

//function to generate option from computer
function getOptionComputer() {
	var options = ["rock","paper","scissor"];
	return options[Math.floor(Math.random()*3)];
}

//function to change the counter after every round
function changeCounter(winner) {
	if (winner === "computer") {
		if (player2 === 1) {
		$('#a').fadeIn('slow');//change this
		}
		else if (player2 === 2) {
			$('#b').fadeIn('slow');
		}
		else {
			$('#c').fadeIn('slow');
		}
	}
	else {
		if (player1 === 1) {
		$('#d').fadeIn('slow');//change this
		}
		else if (player1 === 2) {
			$('#e').fadeIn('slow');
		}
		else {
			$('#f').fadeIn('slow');
		}
	}
	console.log(player2);
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
					 else{
					 	return "tie";
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
					 else{
					 	return "tie";
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
						else{
					 	return "tie";
					 	}
						break;
	}
}

//function to disply overall winner
function display($winner) {
	$("#winner").text("The winner is " + $winner + ".");
}

$(document).ready(function() {
	$('#a').hide();
	$('#b').hide();
	$('#c').hide();
	$('#d').hide();
	$('#e').hide();
	$('#f').hide();	

	while (player2 !== 3 && player1 !== 3) {
		var computer=getOptionComputer();
		// var user=getOptionUser(); // do this lol
		var user = "paper"; //just for time being
		$('.button').click(function() {
			$('.choice').text("My choice is " + computer + ".");
		});

		var winner=compare(user,computer);

		if (winner === "user") {
			player1 = player1 + 1;
		}
		else if (winner === "computer") {
			player2 = player2 + 1;
		}		
	}
	//final winner
	if (player1 === 3) {
		display("user");
	}
	else {
		display("computer" );
	}
});