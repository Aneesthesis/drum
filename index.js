
// for mouse click

var i=0;
while(i<document.querySelectorAll(".drum").length){
document.querySelectorAll(".drum")[i].addEventListener("click",function(){
  var buttonInnerHTML=this.innerHTML;
  makeSound(buttonInnerHTML);
  animation(buttonInnerHTML);
});
i++;
}


// for keypress
document.addEventListener("keypress",(event)=>{

  makeSound(event.key);
  animation(event.key);
});


// switch function
function makeSound(key){

  switch (key) {
    case "w":
      var audio= new Audio('sounds/tom-1.mp3');
      audio.play();
      break;

      case "a":
      var audio= new Audio('sounds/tom-2.mp3');
      audio.play();
      break;

      case "s":
      var audio= new Audio('sounds/tom-3.mp3');
      audio.play();
      break;

      case "d":
      var audio= new Audio('sounds/tom-4.mp3');
      audio.play();
      break;

      case "j":
      var audio= new Audio('sounds/snare.mp3');
      audio.play();
      break;

      case "k":
      var audio= new Audio('sounds/crash.mp3');
      audio.play();
      break;

      case "l":
      var audio= new Audio('sounds/kick-bass.mp3');
      audio.play();
      break;

    default: console.log("jhjjcj");
}
}

function animation(animKey){
  var pressedButton=("."+animKey);
document.querySelector(pressedButton).classList.add("pressed");

  setTimeout(function(){
    document.querySelector(pressedButton).classList.remove("pressed");
  }, 100);
  }
