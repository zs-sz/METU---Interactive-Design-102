// Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain
// Code for: https://youtu.be/ERQcYaaZ6F0

//
PGraphics canvas;
ArrayList<PVector> pool;
ArrayList<PImage> gallery;
int selectedImageIndex = 0;
PImage selectedImage;
PImage img;
File dir; 
File [] files;
Boolean isInverted = false;
void setup() {
  size(1200,900);
  //fullScreen();
  dir= new File(dataPath(""));
  files= dir.listFiles();
  pool = new ArrayList();
  gallery = new ArrayList();
  makeGallery();
  canvas = createGraphics(width, height);
  background(255);
}
 
void draw() { 
  
  image(canvas,0,0);
}

void keyReleased() {
  if(key == 'r') {
    layoutRandom();
  }
  
  if(key == 'e') {
    layoutEllipse();
  }
  
  if(key == 'c') {
     clearAll();
    //clear();
  }
  
   
  if(key == 'i') {
     isInverted =  !isInverted;
    //clear();
  }
  
  if(key == '=') {
    selectedImageIndex = (int)(selectedImageIndex + 1) % gallery.size();
    selectedImage = gallery.get(selectedImageIndex);
  }
}

void clearAll() {
  background(255);
  canvas.beginDraw();
  canvas.clear();
  canvas.endDraw();
};




void layoutRandom() {
  float s;
  if(random(1) < 0.4) {
    s = 0.5+random(0.4);
  } else {
    s = 0.3+random(0.10);
  }
  for(int i = 0; i < (int)24;i++) {
    canvas.beginDraw();
    canvas.pushMatrix();
    if(isInverted) {
      canvas.blendMode(DIFFERENCE);
    } else {
      canvas.blendMode(NORMAL);
    }
    canvas.translate(random(width), random(height));
    canvas.rotate(random(7));
    canvas.scale(s);
    if(selectedImageIndex == 0){
      canvas.image(randomImage(),0,0);
    } else {
      canvas.image(selectedImage,0,0);
    }
    
    canvas.popMatrix();
    canvas.endDraw();
  };
}


void layoutEllipse() {
  float s;
  if(random(1) < 0.1) {
    s = 0.5+random(0.4);
  } else {
    s = 0.2+random(0.50);
  }
  float r = width / 4 + random(1);
  canvas.beginDraw();
  if(isInverted) {
    canvas.blendMode(DIFFERENCE);
  } else {
    canvas.blendMode(NORMAL);
  }
  canvas.translate(width/2, height/2);
  
  for(int i = 0; i < (int)24;i++) {
  
    canvas.pushMatrix();
    
    float rndAngle = random(TWO_PI);
    
    float x = cos(rndAngle) * r;
    float y = sin(rndAngle) * r;
    canvas.translate(x, y);
    canvas.rotate(random(7));
    canvas.scale(s);
    
    if(selectedImageIndex == 0){
      canvas.image(randomImage(),0,0);
    } else {
      canvas.image(selectedImage,0,0);
    }
     canvas.popMatrix();
  
  };
   
    canvas.endDraw();
  translate(-width/2,-height/2);
}


void makeGallery() {
for (int i = 0; i <= files.length - 1; i++)
  {
   PImage img = loadImage(files[i].getName());
   gallery.add(img);
  }  
}


PImage randomImage() {
  return gallery.get((int)random(gallery.size()));
}
