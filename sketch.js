function setup() {
    createCanvas(1600, 1600);
    background("pink");
  }
  
  function draw() {
    
    stroke("white")
    fill("white");
    
   // console.log(mouseIsPressed);
    
    if (mouseIsPressed){
      rect(mouseX,mouseY,10,10);
  }
    }
    
