var player1 = 0; //user
var player2 = 0; //computer

//function to get option from user
function getOptionUser() {

	$('#rock').on("click",function () {
        return "rock";
    });

    $('#paper').on("click" ,function () {
        return "paper";
    });

    $('#scissor').on("click",function () {
        return "scissor";
    });
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
		$('#a').fadeIn('slow');
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
		$('#d').fadeIn('slow');
		}
		else if (player1 === 2) {
			$('#e').fadeIn('slow');
		}
		else {
			$('#f').fadeIn('slow');
		}
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
	switch($winner) {
		case "computer": $("#winner").text("Haha I beat you so easily! :P");
						 break;
		case "user": 	 $("#winner").text("Oh no, you won! :O Congratulations though.");
						 break;				 
	}
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
		console.log(computer);
		var user=getOptionUser(); // do this lol
		// var user = "paper"; //just for time being
		$('.button').click(function() {
			if (computer === "rock") {
				$('.choice').text("I chose the mighty " + computer + ".");
			}
			else if (computer === "paper") {
				$('.choice').text("I chose the friendly" + computer + ".");
			}
			else {
				$('.choice').text("I chose the sly " + computer + ".");
			}
		});
		var winner=compare(user,computer);
		console.log(winner);
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