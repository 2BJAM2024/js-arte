function setup() {
    createCanvas(5000, 2000);
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
    
