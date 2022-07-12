
	player1_name = localStorage.getItem("player_1");
	player2_name = localStorage.getItem("player_2");

	player1_score = 0;
	player2_score = 0;

document.getElementById("player1_name").innerHTML = player1_name + " : ";
document.getElementById("player2_name").innerHTML = player2_name + " : ";

document.getElementById("player1_score").innerHTML = player1_score ;
document.getElementById("player2_score").innerHTML = player2_score ;

document.getElementById("player_question").innerHTML = "Question Turn - " + player1_name ;
document.getElementById("player_answer").innerHTML = "Answer Turn - " + player2_name ;

function Delete(){
	localStorage.setItem("player_1", "");
	localStorage.setItem("player_2", "");
	window.location.replace("index.html");
}

function Send(){
	number_1= document.getElementById("n1").value;
	number_2= document.getElementById("n2").value;
	op= Math.floor(Math.random() * 4);
	console.log(op);
	if(op==0){
		document.getElementById("question").innerHTML= number_1 + " + " + number_2;
	}
	if(op==1){
		document.getElementById("question").innerHTML= number_1 + " - " + number_2;
	}
	if(op==2){
		document.getElementById("question").innerHTML= number_1 + " X " + number_2;
	}
	if(op==3){
		document.getElementById("question").innerHTML= number_1 + " ÷ " + number_2;
	}
}