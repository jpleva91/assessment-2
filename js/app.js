console.log("js is loaded!"); //Checks jS is loaded

// Variables //
var rleft = 0; //Player Rick counter
var mleft = 0; //Player Morty counter

// Functions // 
function rickRight(){
	rleft += 1;
	$('.rick').css('left', rleft+"em");
};//Moves Rick right

function mortyRight(){
	mleft+= 1;
	$('.morty').css('left', mleft+"em");
};//Moves Morty right

function checkScore(){
	if(rleft > 71){
	alert("Rick Won!");
	rleft = 0;
	mleft = 0;
	} else if (mleft > 71){
	alert("Morty Won!");
	rleft = 0;
	mleft = 0;
	}
};//Checks if player has reached end of game pitch and alerts if true


$(document).ready(function(){
	console.log("jquery ready");//Checks if JQuery is loaded

// Game Controller //
	$(document).keyup(function(e){
		var key = e.type=="keyup";

		if(e.which==82){
			rickRight();
			checkScore();
		}
		if(e.which==77){
			mortyRight();
			checkScore();
		}
	})
});