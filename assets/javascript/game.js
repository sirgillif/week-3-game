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
	word:[],
	wins:0,
	/*	origionally wanted to do things this way decided to add letters dynamically rather then checking them off
		initAlpha: function(){
			for (var i = 0; i < 26; i++) {
				this.alpha[i]=0;
				//console.log(this.alpha);
			}
	},*/
	initWord:function(){
		//var tmpWord=""
		this.word=[]
		for (var i = 0; i < comp.word.length; i++) {
			this.word[i]="_";
		}
		this.alpha=[];
		//tmpWord=this.word.join(" ");
		////console.log("guesser word length "+ this.word.length+"the word"+tmpWord);
		//document.getElementById("currentWord").innerHTML = tmpWord;
	},
}
var comp={
	alpha:["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"],
	guesses:13,
	word:"",
	gameWordList:[],
	initGameAll: function () {
		this.gameWordList=wordList;
		var i=Math.floor(Math.floor(Math.random() * this.gameWordList.length));
		this.word=this.gameWordList[i];
		this.gameWordList.splice(i, 1);
		this.guesses=13;
		//guesser.initAlpha();
		guesser.initWord();
		document.getElementById("currentWord").innerHTML = guesser.word.join(" ");
		document.getElementById("guesRemain").innerHTML=this.guesses;
		document.getElementById("wins").innerHTML = "Wins: ";
		////console.log("Game Started");
	},
	initGame: function () {
		var i=Math.floor(Math.floor(Math.random() * this.gameWordList.length));
		this.word=this.gameWordList[i];
		this.gameWordList.splice(i, 1);
		this.guesses=13;
		//guesser.initAlpha();
		guesser.initWord();
		document.getElementById("currentWord").innerHTML = guesser.word.join(" ");
		document.getElementById("guesRemain").innerHTML=this.guesses;
		////console.log("Game Started");
	},
}

//this function is going to return a boolean
//the boolean is determined on if the letter chosen by the user has been chosen before
//returns true if the letter was chosen and false if not
function alreadyChosen(letter){
	//search the current word for matching letters
	////console.log("in alreadyChosen function");
	//if the user hasnt chosen any letters,
	// add letter to .guesser.alpha return false
	if (guesser.alpha.length===0) {
		for (var i = 0; i < comp.word.length; i++) {
			if(comp.word[i].toLowerCase()===letter.toLowerCase())
			{
				return false;
			}
		}
		guesser.alpha[0]=letter.toLowerCase();
		//console.log(guesser.alpha);
		return false;
	}
	//otherwise go through guesser.alpha and see if there is a matching letter.
	//if matching letter return true otherwise false
	else{
		////console.log("going into loop");

		for (var i = 0; i < guesser.alpha.length; i++) {

			if (guesser.alpha[i].toLowerCase()===letter.toLowerCase()){
				////console.log("returning true");
				return true;

			}
		}
		////console.log("going into loop");
		for (var i = 0; i < comp.word.length; i++) {
			if(comp.word[i].toLowerCase()===letter.toLowerCase())
			{
				////console.log("letter found returning false");
				return false;
			}
		}
		guesser.alpha[guesser.alpha.length]=letter.toLowerCase();
		////console.log(guesser.alpha);
		return false;
	}
	

}

function isalpha(letter){
	//goes through the alphabet and makes sure that the user's unput is a letter
	for (var i = 0; i < comp.alpha.length; i++) {

		if (comp.alpha[i].toLowerCase()===letter.toLowerCase()){
			////console.log("returning true");
			return true;
		}
	}
	return false;
}
//checking to see if the guesser's letter is in the computer's word
function inCompWord(letter){
	//see if the letter is in the word-
	//if it is add letter to the user's word to display on the screen
	var inWord=false;
	for (var i = 0; i < comp.word.length; i++) {
		//the guesser's letter is in the computer's word
		//add letter to the user's word to be later display on the screen
		if(comp.word[i].toLowerCase()===letter.toLowerCase()){
			if(i===0){
				guesser.word[i]=letter.toUpperCase();
				//console.log("found first letter: " +guesser.word.join(""));
			}
			else{
				guesser.word[i]=letter.toLowerCase();
				//console.log("found letter: " +guesser.word.join(""));
			}
			inWord=true;
			
		}
	}
	if(!inWord)
	{
		//console.log("letter not found");
	}
	return inWord;
}
/*
	id's:
	letterGuessed,
	wins,
	currentWord,
	guesRemain,
*/

document.onkeyup = function(event){
		//if there is no word selected 
		//assume that this is the first time at the site and start a new game
		if (comp.word===""||(comp.gameWordList.length===0)) {
			comp.initGameAll();
		}
		//the guesser chooses a letter
		////console.log("letter pressed")
		var letChoice = String.fromCharCode(event.keyCode).toLowerCase();
		//make sure is a letter
		if(isalpha(letChoice)){
			//if the player has not already selected the letter chosen
			//this function also adds the letter to the pool of guessed letters
			if(!alreadyChosen(letChoice))
			{
				//see if the letter is in the word-
				//adds letter to guesser's word
				if(inCompWord(letChoice))
				{
					//console.log(guesser.word+" vs "+comp.word);
					//if the guesser has compleated the word 
					if(guesser.word.join("")===comp.word)
					{
						//console.log("winner");
						//++wins display wins
						guesser.wins++; 
						document.getElementById("wins").innerHTML = "Wins: "+ guesser.wins;
						//start new game
						comp.initGame();
					}
						
				}
				// take away from guesses
				else{
					comp.guesses--;
				}
	
			}
			//otherwise do nothing 
			//dont add the letter to the list no guesses taken away

			//display all stats except wins
			document.getElementById("letterGuessed").innerHTML = guesser.alpha;
			document.getElementById("currentWord").innerHTML = guesser.word.join(" ");
			document.getElementById("guesRemain").innerHTML = comp.guesses;
		}
			
		/*
			id's:
			letterGuessed,
			wins,
			currentWord,
			guesRemain,
		*/

		/*
		document.getElementById("wins").innerHTML = "Wins: "+ win;
		document.getElementById("losses").innerHTML = "Losses: "+loss;
		document.getElementById("ties").innerHTML = "Ties: "+tie;
					//console.log("wins "+win);
		//console.log("tie " +tie);
		//console.log("loss "+loss);*/
}
