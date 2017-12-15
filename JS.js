var heading = "This is heading";
var paragraph = "This is paragraph";

document.getElementById("main-heading").innerHTML = heading;
document.getElementById("main-paragraph").innerHTML = paragraph;

//pakeicia headerio spalva
function changeColor(){
document.getElementById("main-heading").style.color = "blue";
}

//pakeicia paragrafo dydi

function changeSize (){
document.getElementById("main-paragraph").style.fontSize = "30px";
}

/*
//ukursime mygtuka

var x = document.createElement("Button");
document.body.appendChild(x);

//sudeti ir sukurti mygtukui teksta
var buttonText = document.createTextNode ("Press Me!");
x.appendChild(buttonText);

//sukurti ir uzdeti mygtukui onlick atributa

x.id = "btn-hide";
document.getElementById("btn-hide").onclick = function(){
document.getElementById("main-heading").style.visibility = "hidden";
};

//parasyti funkcija, kuri paslepia h1 teksta

//sukurti mygtuka, kuris pakeicia paragrafo fonto dydi, fonto spalva ir paragrafo backgroundo spalva

*/
var y = document.createElement("Button");
document.body.appendChild(y);
var buttonText = document.createTextNode ("Paspausk mane!");
y.appendChild(buttonText);

y.id = "btn-press";
document.getElementById("btn-press").onclick = function(){
document.getElementById("main-heading").style.fontSize = "50px";
document.getElementById("main-paragraph").style.color = "pink";
document.body.style.backgroundColor = "salmon";
};

//sukurti forma (html faile) su id="nforma". Ji turi tureti du inputo laukus, 
//viena vardui kita pavardei ir mygtukui " SUBMIT ". Parasyti koda, kuris paraso 
//koda, kuris paraso i konsole varda ir pavarde

function Print() {
	document.write(document.forms['nforma']['fname']. value+ ' ' +
document.forms['nforma']['lname']. value);
}

//parasyti funkcija, kuri gauna is vartotojo ivedima lenteles eiluciu skaiciaus
//ir atitinkamai sukuria lentele