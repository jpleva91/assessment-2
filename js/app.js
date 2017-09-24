console.log("js is loaded!"); //Checks jS is loaded

// Variables //
var rleft = 0; //Player Rick counter
var mleft = 0; //Player Morty counter
var xleft = 0; //CPU Monster counter
var rUp = 70; //Player Rick Tablet counter
var mUp = 70; //Player Morty Tablet counter

// Functions // 

function monsterAttack(){
	if(rleft < xleft){
		alert("Morty Died!");
		$('.morty').css('display', 'none');
	}
	if(rleft + mleft === 56){
		$('#monster').addClass('attack');
	}
	if(rleft + mleft === 76){
		$('#monster').css('left', 10+"em");
		xleft = 10;
	}
	if(rleft + mleft === 96){
		$('#monster').css('left', 20+"em");
		xleft = 20;
	}
	if(rleft + mleft === 116){
		$('#monster').css('left', 30+"em");
		xleft = 30;
	}
}//Monster Attack in Desktop View

function rickRight(){
	rleft += 1;
	$('.rick').css('left', rleft+"em");
};//Moves Rick Right in Desktop View

function rickUp(){
	rUp -= 1;
	$('#rick').css('top', rUp+"em");
};//Moves Rick Up in Tablet View

function mortyRight(){
	mleft += 1;
	$('.morty').css('left', mleft+"em");
};//Moves Morty right

function mortyUp(){
	mUp -= 1;
	$('#morty').css('top', mUp+"em");
};//Moves Morty Up in Tablet View

function checkScore(){
	if(rleft > 71 || rUp === 0){
	alert("Rick Won!");
	rleft = 0;
	mleft = 0;
	} else if (mleft > 71 || mUp === 0){
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
		console.log($('.pitch').width());

		if($('.pitch').width() > 800 ){
			if(e.which==82){
				rickRight();
				checkScore();
				monsterAttack();
			}
			if(e.which==77){
				mortyRight();
				checkScore();
				monsterAttack();
			}
		} else {
			if(e.which==82){
				rickUp();
				checkScore();
			}
			if(e.which==77){
				mortyUp();
				checkScore();
			}
		}
	})
});