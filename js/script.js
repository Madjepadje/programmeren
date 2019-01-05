// variablen voor de witte toetsen, moet later ARRAY worden
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

// variablen voor de zwarte toetsen. 
var zwart1 = document.querySelector(".zwart1");
var zwart2 = document.querySelector(".zwart2");
var zwart3 = document.querySelector(".zwart3");
var zwart4 = document.querySelector(".zwart4");
var zwart5 = document.querySelector(".zwart5");
var zwart6 = document.querySelector(".zwart6");
var zwart7 = document.querySelector(".zwart7");


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


console.log(audio12);

// document.onkeydown = checkKey;

// function checkKey(e) {
//     if (e.keyCode == '65') {
//       audio1.play();
//       console.log('you clicked a');

//     }else if (e.keyCode == '83') {
//       audio2.play();
//       console.log('you clicked s');
//     }
//   }

// functies die geluid afspelen.
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

// zwarte toetsen gekoppeld aan geluid
zwart1.addEventListener('click', geluidZ1);
zwart2.addEventListener('click', geluidZ2);
zwart3.addEventListener('click', geluidZ3);
zwart4.addEventListener('click', geluidZ4);
zwart5.addEventListener('click', geluidZ5);
zwart6.addEventListener('click', geluidZ1);
zwart7.addEventListener('click', geluidZ2);

