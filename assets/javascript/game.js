/*
	id's:
	letterGuessed,
	wins,
	currentWord,
	guesRemain,
*/
var wordList=["Harry","Hermione","Ron","Tonks","Dobby","Ginny","Lockhart","Moody","McGonagall","Umbridge","Malfoy","Lupin","Hagrid","Luna","Bellatrix","Sirius","Voldemort","Neville","Dumbledore","Snape","Accio","Alohomora","Azkaban","Butterbeer","Dementor","Expelliarmus","Gillyweed","Gringotts","Gryffindor","Hogsmeade","Hogwarts","Honeydukes","Howler","Hufflepuff","Incendio","Lumos","Mudblood","Muggle","Ollivanders","Parseltongue","Poltergeist","Portkey","Ravenclaw","Quidditch","Riddikulus","Slytherin","Transfiguration","Stupefy","Wolfsbane"]
var guesser={
	alpha:[],
	word:"",
	wins:0,
	initAlpha: function(){
		for (var i = 0; i < 26; i++) {
			this.alpha[i]=0;
		}
	},
	initWord:function(){
		for (var i = 0; i < comp.word.length; i++) {
			this.word[i]="_";
		}
	},
}
var comp={
	alpha:["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"],
	guesses:13,
	word:"",
	gameWordList:[],
	initGameAll: function () {
		gameWordList=wordList;
		var i=Math.floor(Math.floor(Math.random() * gameWordList.length));
		this.word=gameWordList[i];
		gameWordList.splice(i, 1);
		this.guesses=13;
		guesser.initAlpha();
		guesser.initWord();
	},
	initGame: function () {
		var i=Math.floor(Math.floor(Math.random() * gameWordList.length));
		this.word=gameWordList[i];
		gameWordList.splice(i, 1);
		this.guesses=13;
		guesser.initAlpha();
		guesser.initWord();
		document.getElementById("currentWord").innerHTML = guesser.word;
	},
}

function alreadyChosen(letter){
	for (var i = 0; i < comp.word.length; i++) {
		comp.word.charCodeAt(i)
	}
	//.charCodeAt(i)
	for (var i = 0; i < guesser.word.length; i++) {
		guesser.word[i]
	}
	if (guesser.alpha[i]===0) {
		guesser.alpha[i]++;
	}
	return true;
}


document.onkeyup = function(event){
		//if there is no word selected 
		//assume that this is the first time at the site and start a new game
		if (comp.word==="") {
			comp.initGameAll();
		}
		//the guesser chooses a letter
		var letChoice = String.fromCharCode(event.keyCode).toLowerCase();
		//if the player has not already selected the letter chosen
		if(!alreadyChosen(letChoice))
		{
			//see if the letter is in the word- do not take away from guesses
				//if the guesser has compleated the word 
					//++wins display wins 
					//start new game
			//or add letter to the list of guessed letters -take away from guesses

		}
		//otherwise do nothing 
		else{
			//dont add the letter to the list no guesses taken away
		}

		/*
		document.getElementById("wins").innerHTML = "Wins: "+ win;
		document.getElementById("losses").innerHTML = "Losses: "+loss;
		document.getElementById("ties").innerHTML = "Ties: "+tie;
					console.log("wins "+win);
		console.log("tie " +tie);
		console.log("loss "+loss);*/
}
