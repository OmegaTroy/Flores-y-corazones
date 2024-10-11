onload = () => {
    document.body.classList.remove("container");
  };

  document.addEventListener("mousemove", function (e) {
    let body = document.querySelector("body");
    let heart = document.createElement("span");
  
    let size = Math.random() * 40;
    let transformValue = Math.random() * 360;
  
    heart.style.left = e.offsetX + "px";
    heart.style.top = e.offsetY + "px";
    heart.style.fontSize = 10 + size + "px";
    heart.style.transform = "rotate(" + transformValue + "deg)";
  
    body.appendChild(heart);
  
    setTimeout(() => {
      heart.remove();
    }, 1000);
  });