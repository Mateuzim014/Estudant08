function setup() {
    createCanvas(750, 605);
    background("white");
  }
  function draw() {
    stroke("black");
    fill("blue");
  
    // console.log(mouseIsPressed);
  
    if (mouseIsPressed) {
      rect(mouseX, mouseY, 23, 35);
    }
  }