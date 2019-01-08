// variablen voor de witte toetsen, moet later ARRAY worden
// var wit1 = document.querySelector(".wit1");
// var wit2 = document.querySelector(".wit2");
// var wit3 = document.querySelector(".wit3");
// var wit4 = document.querySelector(".wit4");
// var wit5 = document.querySelector(".wit5");
// var wit6 = document.querySelector(".wit6");
// var wit7 = document.querySelector(".wit7");
// var wit8 = document.querySelector(".wit8");
// var wit9 = document.querySelector(".wit9");
// var wit10 = document.querySelector(".wit10");

// de piano toetsen zwart + wit 
var witteToetsen = document.querySelectorAll(".toetsen");
var zwarteToetsen = document.querySelectorAll(".Ztoetsen")
var i;

function toetsEventHandeler(event) {
  if (event.target.id === "wit1"){
    geluid1();
  } 
  if (event.target.id === "wit2"){
    geluid2();
  }
  if (event.target.id === "wit3"){
    geluid3();
  }
  if (event.target.id === "wit4"){
    geluid4();
  }
  if (event.target.id === "wit5"){
    geluid5();
  }
  if (event.target.id === "wit6"){
    geluid6();
  }
  if (event.target.id === "wit6"){
    geluid6();
  }
  if (event.target.id === "wit7"){
    geluid7();
  }
  if (event.target.id === "wit8"){
    geluid1();
  }
  if (event.target.id === "wit9"){
    geluid2();
  }
  if (event.target.id === "wit10"){
    geluid3();
  }
  if (event.target.id === "zwart1"){
    geluidZ1();
  }
  if (event.target.id === "zwart2"){
    geluidZ2();
  }
  if (event.target.id === "zwart3"){
    geluidZ3();
  }
  if (event.target.id === "zwart4"){
    geluidZ4();
  }
  if (event.target.id === "zwart5"){
    geluidZ5(); 
  }
  if (event.target.id === "zwart6"){
    geluidZ1(); 
  }
  if (event.target.id === "zwart7"){
    geluidZ2(); 
  }

} 
// for loop voor de witte toetsen
for(i = 0; i < witteToetsen.length; i++) {
  witteToetsen[i].addEventListener('click', toetsEventHandeler);
}


// for loop voor de zwarte toetsen
for(i = 0; i < zwarteToetsen.length; i++) {
  zwarteToetsen[i].addEventListener('click', toetsEventHandeler);
}



// // variablen voor de zwarte toetsen. 
// var zwart1 = document.querySelector("#zwart1");
// var zwart2 = document.querySelector("#zwart2");
// var zwart3 = document.querySelector("#zwart3");
// var zwart4 = document.querySelector("#zwart4");
// var zwart5 = document.querySelector(".zwart5");
// var zwart6 = document.querySelector(".zwart6");
// var zwart7 = document.querySelector(".zwart7");


//variablen voor audio
var audio1 = document.getElementById("sound-c");
var audio2 = document.getElementById("sound-d");
var audio3 = document.getElementById("sound-e");
var audio4 = document.getElementById("sound-f");
var audio5 = document.getElementById("sound-g");
var audio6 = document.getElementById("sound-a");
var audio7 = document.getElementById("sound-b");

var audio11 = document.getElementById("sound-c-zwart");
var audio12 = document.getElementById("sound-d-zwart");
var audio13 = document.getElementById("sound-f-zwart");
var audio14 = document.getElementById("sound-g-zwart");
var audio15 = document.getElementById("sound-a-zwart");


document.onkeydown = checkKey;

// // speelt geluiden af met keyboard
function checkKey(event) {
    if (event.keyCode == '65' || event.keyCode == '75')  {
      geluid1();
      console.log('you clicked a');
    }
    if (event.keyCode == '83' || event.keyCode == '76') {
      geluid2();
    }
    if (event.keyCode == '68' || event.keyCode == '186') {
      geluid3();
    }
    if (event.keyCode == '70') {
      geluid4();
    }
    if (event.keyCode == '71') {
      geluid5();
    }
    if (event.keyCode == '72') {
      geluid6();
    }
    if (event.keyCode == '74') {
      geluid7();
    }
    if (event.keyCode == '87' || event.keyCode == '73'){
      geluidZ1();
    }
    if (event.keyCode == '69' || event.keyCode == '79'){
      geluidZ2();
    }
    if (event.keyCode == '82'){
      geluidZ3();
    }
    if (event.keyCode == '84'){
      geluidZ4();
    }
    if (event.keyCode == '89'){
      geluidZ5();
    }
  }

// functies die geluid afspelen.
  function geluid1(){
    audio1.play();
    console.log("it worked");
    }

  function geluid2(){
    audio2.play();
    console.log("the Letter D works");
    // animatie aanmaken css class toevoegen en daarna verwijderen
  }

  function geluid3(){
     audio3.play();
     console.log("the Letter E works");
  }

  function geluid4(){
    audio4.play();
    console.log("the letter F is clicked");
  }

  function geluid5(){
    audio5.play();
    console.log("the letter G is clicked!");
  }

  function geluid6(){
    audio6.play();
    console.log("The Letter A woohoe");
  }

  function geluid7(){
    audio7.play();
    console.log("7 is b");
  }
// zwarte knoppen
  function geluidZ1(){
    audio11.play();
    console.log("black knop!");

  }

  function geluidZ2(){
    audio12.play();
    console.log("secondBlackButton");
  }

  function geluidZ3(){
      audio13.play();
      console.log("derdeeee");
  }

  function geluidZ4(){
      audio14.play();
      console.log("4de");
  }

  function geluidZ5(){
      audio15.play();
      console.log("yolo5");
  }
  
 

  // wit1.addEventListener('click', geluid1);
//   wit2.addEventListener('click', geluid2);
//   wit3.addEventListener('click', geluid3);
//   wit4.addEventListener('click', geluid4);
//   wit5.addEventListener('click', geluid5);
//   wit6.addEventListener('click', geluid6);
//   wit7.addEventListener('click', geluid7);
//   wit8.addEventListener('click', geluid1);
//   wit9.addEventListener('click', geluid2);
//   wit10.addEventListener('click', geluid3);

// // zwarte toetsen gekoppeld aan geluid
// zwart1.addEventListener('click', geluidZ1);
// zwart2.addEventListener('click', geluidZ2);
// zwart3.addEventListener('click', geluidZ3);
// zwart4.addEventListener('click', geluidZ4);
// zwart5.addEventListener('click', geluidZ5);
// zwart6.addEventListener('click', geluidZ1);
// zwart7.addEventListener('click', geluidZ2);

