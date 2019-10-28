class Selector {
  private color uiColor = color(255,0,0);
  private PGraphics c;
  
  public float x = 0;
  public float y = 0;
  public float w = 0;
  public float h = 0;
  public Boolean isActive = false;
  public Boolean isMoving = false;
  public Boolean showCursor = true;
  public float snapTo = 0;
  Selector(PGraphics _c) {
    c = _c;
  }
  
  void update() {
    // aktív de nem mozog
    
    if(isActive && !isMoving) {
      x = mouseX;
      y = mouseY;
      if(snapTo > 0) {
        x = quantizeNumber(x, snapTo);
        y = quantizeNumber(y, snapTo);
      }
    }
   
    render();
  }
  
  void render() {
    c.beginDraw();
    c.clear();
    
    if(showCursor) {
     renderCursor();
    };
    
    c.stroke(uiColor);
    c.noFill();
    if(isActive) {
     
    };
    
    if(isMoving) {
      calculateWH();
      c.rect(x,y,w,h);
    };
    c.endDraw();
  }
  
  void renderCursor() {
    c.ellipse(mouseX,mouseY, 20, 20);
  };
  
  void calculateWH() {
    w = abs(x - mouseX);
    h = abs(y - mouseY);
    
    if(snapTo > 0) {
       w = quantizeNumber(w, snapTo);
       h = quantizeNumber(h, snapTo);
    }
    
    if(mouseX < x) {
       w = -w;
    }
      
    if(mouseY < y) {
      h = -h;
    }
  }
  
  float quantizeNumber(float val, float quantum) {
    float remainder = val % quantum;
    float sign = val >= 0 ? 1 : -1;
    return val - remainder + sign * quantum;
  }
}
