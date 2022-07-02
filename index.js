var voteValue = 0;

for(var i=0; i<document.querySelectorAll(".vote").length; i++){
	
	document.querySelectorAll(".vote")[i].addEventListener("click", function (){
		switch (this.id){
			case "v1":
				voteValue = 1;
				document.getElementById("s1").style.visibility = "visible";
				document.getElementById("s2").style.visibility = "hidden";
				document.getElementById("s3").style.visibility = "hidden";
				document.getElementById("s4").style.visibility = "hidden";
				document.getElementById("s5").style.visibility = "hidden";
			break;
			case "v2":
				voteValue = 2;
				document.getElementById("s1").style.visibility = "visible";
				document.getElementById("s2").style.visibility = "visible";
				document.getElementById("s3").style.visibility = "hidden";
				document.getElementById("s4").style.visibility = "hidden";
				document.getElementById("s5").style.visibility = "hidden";
			break;
			case "v3":
				voteValue = 3;
				document.getElementById("s1").style.visibility = "visible";
				document.getElementById("s2").style.visibility = "visible";
				document.getElementById("s3").style.visibility = "visible";
				document.getElementById("s4").style.visibility = "hidden";
				document.getElementById("s5").style.visibility = "hidden";
			break;
			case "v4":
				voteValue = 4;
				document.getElementById("s1").style.visibility = "visible";
				document.getElementById("s2").style.visibility = "visible";
				document.getElementById("s3").style.visibility = "visible";
				document.getElementById("s4").style.visibility = "visible";
				document.getElementById("s5").style.visibility = "hidden";
			break;
			case "v5":
				voteValue = 5;
				document.getElementById("s1").style.visibility = "visible";
				document.getElementById("s2").style.visibility = "visible";
				document.getElementById("s3").style.visibility = "visible";
				document.getElementById("s4").style.visibility = "visible";
				document.getElementById("s5").style.visibility = "visible";
			break;
			default:
			break;
		}
		for (var i = 0; i<document.querySelectorAll(".vote-selected").length; i++){
			document.querySelectorAll(".vote-selected")[i].classList.remove("vote-selected");
		};
		this.classList.toggle("vote-selected");
	});
}

document.querySelector(".submit-btn").addEventListener("click", function () {
	if(voteValue !== 0) {
		vote(voteValue);
	}
});

function vote(number){
	for(var i=0; i<document.querySelectorAll(".container").length; i++){
		document.querySelectorAll(".container")[i].classList.toggle("visibility");
	}
	document.getElementById("vote-number").innerHTML = voteValue;
}

function voteAgain() {
	for (var i = 0; i<document.querySelectorAll(".vote-selected").length; i++){
		document.querySelectorAll(".vote-selected")[i].classList.remove("vote-selected");
	};
	for(var i=0; i<document.querySelectorAll(".container").length; i++){
		document.querySelectorAll(".container")[i].classList.toggle("visibility");
	}
}
