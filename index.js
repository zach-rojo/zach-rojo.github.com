var i = 0;
var txt = 'Hi there! It looks like you're interested in visiting ancient Greece! Get started by clicking the button below.';
var speed = 100;

function typeWriter() {
  if (i < txt.length) {
      speed = 100
      if (txt.charAt(i) == '.'){
          speed = 500
      }
      if (txt.charAt(i) == '!'){
      speed = 500
      }
      if (txt.charAt(i) == '?'){
      speed = 500
      }
    document.getElementById("intro-text").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
