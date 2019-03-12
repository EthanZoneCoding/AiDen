/*

AiDen
By Typer
This work is licensed under a Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 International License.

*/

//recognition - start
var query = ["what", "which", "how", "who", "why", "is", "can"];
var webcommand = ["open", "pull up", "load", "go", "show", "look", "search", "google"];
var def = ["define", "meaning", "definition"];
var come = ["hi", "hello", "howdy", "yo"];
var machine = ["aiden", "you", "your", "you're"];
var go = ["bye", "goodbye", "later", "see"];

//other variables
var inputlist = [];
var word = "";
var normalList = "1";
var inputChar, letter, lowered, length, input, type, outrandom, encode, list;
var url = "";
var name = "User";
var caps = [];

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
            encode = encodeURI(url);
            
            window.open("https://www.dictionary.com/browse/" + url);
            
            
        } else if(come.includes(type)){
                  
            
            if(outrandom === 1) {
                //response 1
                document.getElementById("output").innerHTML = "Hi there!";
            } else if(outrandom === 2) {
                //response 2
                document.getElementById("output").innerHTML = "Howdy!";
            } else {
                //response 3
                document.getElementById("output").innerHTML = "Hello " + name;
            }
            
        } else if(machine.includes(type)){
                  
                //response
                document.getElementById("output").innerHTML = "It's About You, " + name;
            
            
        } else if(inputlist.toString().includes("set,my,name,to,")){
                  
                //set name
                name = inputlist[4].toUpperCase();
                document.getElementById("output").innerHTML = "Your name is set to " + name + ".";
            
        } else if(inputlist.toString().includes("my,name,is")){
                  
                //set name
                name = inputlist[3].toUpperCase();
                document.getElementById("output").innerHTML = "I will remember that you are " + name + ".";
            
        } else if(inputlist.toString().includes("call,me,")){
                  
                //set name
                name = inputlist[2].toUpperCase();
                document.getElementById("output").innerHTML = "I will call you " + name + ".";
            
        }else if(type.includes("name")){
                  
                if(outrandom === 1) {
                //response 1
                document.getElementById("output").innerHTML = "Your name is " + name;
            } else if(outrandom === 2) {
                //response 2
                document.getElementById("output").innerHTML = "is your name " + name + "?";
            } else {
                //response 3
                document.getElementById("output").innerHTML = "I was told you are " + name;
            }
            
        } else if(go.includes(type)){
                  
            
            if(outrandom === 1) {
                //response 1
                document.getElementById("output").innerHTML = "Good bye, " + name;
            } else if(outrandom === 2) {
                //response 2
                document.getElementById("output").innerHTML = "See you soon, " + name;
            } else {
                //response 3
                document.getElementById("output").innerHTML = "Later, " + name;
            }
            
        } else if(type.includes("help")){
                  
            
            //features
            document.getElementById("output").innerHTML = "Features:<br><br>Hello<br>Goodbye<br>Set my name to _<br>Define _<br>What is my name<br>Search _";
            
        } else if(inputlist.length === 1 && inputlist[0] === ""){
                  
            //blank
            document.getElementById("output").innerHTML = "";
            
        }else {
                  
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
    
    //respond
    document.getElementById("raw").value = "";
}
