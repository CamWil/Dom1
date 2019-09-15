var myDemo = document.getElementById("demoparent");

console.log(myDemo.childNodes.length);

var myDemoTags = document.getElementsByTagName("li");
console.log ("number of li links: " + myDemoTags.length);

var linksInMenue = myDemo.getElementsByTagName("li");
console.log ("number of Li items in menue: " + linksInMenue.length );

var myHi = document.getElementById("hithere");
myHi.setAttribute("align" , "right");
myHi.setAttribute("style", "color: blue");

var newItem = document.createElement("li");
var newText = document.createTextNode("super sneaky list item");

myDemo.appendChild(newItem);
newItem.appendChild(newText);

var userAge = prompt("How old are you?");
	alert(userAge);
	
	if(userAge<20){alert("Dont let your memes be dreams!");
				  }
	else{alert("hello good sir or madam!");
		}
	document.write("<h1>Why Hello There!</h1>");
	console.log(userAge);
	

var favAni = prompt("What is your favorite animal?");

switch(favAni){
	case "bear":
		alert("mine too!");
		break;
	case "dog":
		alert("I like dogs too!");
		break;
	default:
		alert("Cool beans");
}

console.log(favAni);


function myFun(a, b){
	"use strict";
	var total= a +b;
	return total;
}

var myFun2= myFun(7,8);
alert(myFun2);

console.log(myFun2);