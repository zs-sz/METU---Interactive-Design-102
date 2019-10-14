

// #DBE3BE, #DAE0BE, #D0D1A7, #AAAF86, #A5966F, #7F7C47, #20101B, #170B17
// #F77671, #F09F68, #EC6F6D, #93EBC1, #9A6C4B, #7B5B32, #6F5532, #20141E, #201420, #1B101E

// Szinek listaja
int[] colors = {#DD3340, #DD3340, #C4BDA3, #BE9287, #A77F42, #856647, #83573C, #452123, #2A1A25, #170D18};

int step = colors.length;
void setup() {
  size(600,600);
  strokeWeight(2);
 
}

void draw() {
  randomSeed(354);
  background(#24272b);
  stroke(rc(),87);
  // 354
  translate(width/2, height/2);
  for (int i = 0; i < step;i++) {
    color c = rc();
    ring(68+i * 9, c);
  }
}

void ring(float radius, color c) {
  int items = floor(random(12,48));
  float angle = TWO_PI / items;
  fill(c, 83);
  pushMatrix();
  for (int i = 0; i < items;i++) {
    rotate(angle);
    pushMatrix();
    translate(radius, 0);
    rotate(-0.5 + 1 * noise(i * 0.9));
    ellipse(radius/2,0,100,10 + random(33));
    popMatrix();
  }
  popMatrix();
  

}

// kuldok egy veletlen elemet a listabol
int rc() {
  return colors[floor(random(step-1))];
};
