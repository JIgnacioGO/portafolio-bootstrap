function blink() {
    let blink = document.getElementById("blink");
    console.log("La función blink se está ejecutando");
    setInterval(() => {
      blink.style.opacity = blink.style.opacity == "0" ? "1" : "0";
    }, 500);
  }
  
  function blink2() {
    let blink = document.getElementById("blink2");
    console.log("La función blink2 se está ejecutando");
    setInterval(() => {
      blink.style.opacity = blink.style.opacity == "0" ? "1" : "0";
    }, 500);
  }
  
  window.onload = function() {
    blink();
    blink2();
  }
  