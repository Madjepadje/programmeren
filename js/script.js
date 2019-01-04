var wit1 = document.querySelector(".wit1");
var wit2 = document.querySelector(".wit2");
var wit3 = document.querySelector(".wit3");
var wit4 = document.querySelector(".wit4");
var wit5 = document.querySelector(".wit5");
var wit6 = document.querySelector(".wit6");
var wit7 = document.querySelector(".wit7");
var wit8 = document.querySelector(".wit8");
var wit9 = document.querySelector(".wit9");
var wit10 = document.querySelector(".wit10");

var zwart1 = document.querySelector(".zwart1");

var audio1 = document.getElementById("sound-c");
var audio2 = document.getElementById("sound-d");
var audio3 = document.getElementById("sound-e");
var audio4 = document.getElementById("sound-f");
var audio5 = document.getElementById("sound-g");
var audio6 = document.getElementById("sound-a");
var audio7 = document.getElementById("sound-b");

var audio11 = document.getElementById("sound-c-zwart");
console.log(audio11);

document.onkeydown = checkKey;

function checkKey(e) {
    if (e.keyCode == '65') {
      audio1.play();
      console.log('you clicked a');

    }else if (e.keyCode == '83') {
      audio2.play();
      console.log('you clicked s');
    }
  }

  function geluid1(){
    audio1.play();
    console.log("it worked");
    }

  function geluid2(){
    audio2.play();
    console.log("the Letter D works");
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

  function geluidZ1(){
    audio11.play();
    console.log("black knop!");

  }
  
 

  wit1.addEventListener('click', geluid1);
  wit2.addEventListener('click', geluid2);
  wit3.addEventListener('click', geluid3);
  wit4.addEventListener('click', geluid4);
  wit5.addEventListener('click', geluid5);
  wit6.addEventListener('click', geluid6);
  wit7.addEventListener('click', geluid7);
  wit8.addEventListener('click', geluid1);
  wit9.addEventListener('click', geluid2);
  wit10.addEventListener('click', geluid3);

// zwarte toetsen
zwart1.addEventListener('click', geluidZ1);