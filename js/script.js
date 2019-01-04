var a2 = document.querySelector('.a2');
var audio1 = document.getElementById("sound-a2");


console.log(audio1);


document.onkeydown = checkKey;

function checkKey(e) {
    if (e.keyCode == '65') {
      console.log('you clicked a');

    }else if (e.keyCode == '83') {
      console.log('you clicked s');
    }
  }

  function geluid(){
    audio1.play();
    console.log("it worked");

    }

  a2.addEventListener('click', geluid);