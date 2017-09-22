console.log("js is loaded!");

let rleft = 1;
let mleft = 1;
function rickRight(){
	rleft += 1;
	$('.rick').css('left', rleft+"em");
};

function mortyRight(){
	mleft+= 1;
	$('.morty').css('left', mleft+"em");
};

function checkScore(){
	if(rleft > 71){
	alert("Rick Won!");
	} else if (mleft > 71){
	alert("Morty Won!");
	}
};


$(document).ready(function(){
	console.log("jquery ready");

	$(document).keydown(function(e){
		var key = e.type=="keydown";
		
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