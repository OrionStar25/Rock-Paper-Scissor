//function to get option from user
function getOptionUser() {
	
}

//function to generate option from computer
function getOptionComputer() {
	var options = ["rock","paper","scissor"];
	return options[Math.floor(Math.random()*3)];
}

//function to compare the options and return who won in each round
function compare() {
	
}

//function to change the counter after every round
function changeCounter(winner) {

}

//function to disply overall winner
function display() {

}

$(document).ready(function() {
	var user=getOptionUser();
	var computer=getOptionComputer();
	var winner=compare();
	changeCounter(winner);
});