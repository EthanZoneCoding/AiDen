/*

AiDen
By Typer
This work is licensed under a Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 International License.

*/

//recognition - start
var query = ["what", "which", "how", "who", "why", "is", "can"];
var webcommand = ["open", "pull up", "load", "go", "show", "look", "search", "google"];
var def = ["define", "meaning", "definition"]

//other variables
var inputlist = [];
var word = "";
var normalList = "1";
var inputChar, letter, lowered, length, input, type, outrandom, encode, list;
var url = "";

document.addEventListener("keydown", function(event) {
  if(event.which === 13){
      processAI();
  }
}, false);

function processAI() {
    
    //seperate words into variable
    //reset
    inputlist = [];
    word = ""
    //seperate
    input = document.getElementById("raw").value;
    lowered = input.toLowerCase();
    length = lowered.length;
    for (letter = 0; letter <= length - 1; letter++) {
        inputChar = lowered.charAt(letter);
        if (inputChar !== " ") {
            word += inputChar;
        } else {
            inputlist.push(word);
            word = "";
            normalList++;
        }
    }
    if (inputlist.length < normalList) {
        inputlist.push(word);
    }
    
    //recognise command
        //Type
        type = inputlist[0];
        outrandom = Math.floor((Math.random() * 3) + 1);
        if(query.includes(type)) {
            //query
            if(outrandom === 1) {
                //response 1
                document.getElementById("output").innerHTML = "Coming soon.";
            } else if(outrandom === 2) {
                //response 2
                document.getElementById("output").innerHTML = "Sorry, I cant do that. Do it later.";
            } else {
                //response 3
                document.getElementById("output").innerHTML = "I can do that soon.";
            }
        } else if(webcommand.includes(type)) {
            //web command
            //input
            url = "";
            for(list = 1; list <= inputlist.length - 1; list++) {
                url += " " + inputlist[list];
            }
            //encode
            encode = encodeURI(url)
            
            //google search
            //url validation coming soon
            window.open("https://www.google.com/search?q=" + encode);
        } else if(def.includes(type)) {
        
            //input
            url = "";
            for(list = 1; list <= inputlist.length - 1; list++) {
                url += " " + inputlist[list];
            }
            //encode
            encode = encodeURI(url)
            
            //define
            window.open("https://www.dictionary.com/browse/" + encode);
            
        } else if(type === "hi" | "hello"){
                  
            
            if(outrandom === 1) {
                //response 1
                document.getElementById("output").innerHTML = "Hi there!";
            } else if(outrandom === 2) {
                //response 2
                document.getElementById("output").innerHTML = "Howdy!";
            } else {
                //response 3
                document.getElementById("output").innerHTML = "Hello!";
            }
            
        } else if(type === "Bye" | "Good" | "see"){
                  
            
            if(outrandom === 1) {
                //response 1
                document.getElementById("output").innerHTML = "Good bye!!";
            } else if(outrandom === 2) {
                //response 2
                document.getElementById("output").innerHTML = "See you soon!!";
            } else {
                //response 3
                document.getElementById("output").innerHTML = "Later!!";
            }
            
        } else {
                  
            //unknown
            if(outrandom === 1) {
                //response 1
                document.getElementById("output").innerHTML = "Sorry, Unknown command.";
            } else if(outrandom === 2) {
                //response 2
                document.getElementById("output").innerHTML = "Sorry, I cant do that yet.";
            } else {
                //response 3
                document.getElementById("output").innerHTML = "That feature isn't avalible";
            }
        }
    
    document.getElementById("raw").value = "";
}


