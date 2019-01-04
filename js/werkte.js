var a2 = new Audio();



document.onkeydown = checkKey;

function checkKey(e) {
    if (e.keyCode == '65') {
      console.log('you clicked a');

    }else if (e.keyCode == '83') {
      console.log('you clicked s');
    }
  }

  function geluid(){
      console.log("geklikt");
  }

  a2.addEventListener('click', geluid);
