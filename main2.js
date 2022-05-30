status=""
objects=[]
function preload(){
img=loadImage('books.jpg')
}
function setup(){
canvas=createCanvas(500,300)
canvas.position(500,200)
objectDetector=ml5.objectDetector('cocossd',modelLoaded)
document.getElementById("object").innerHTML=" Detecting Object"
}
function modelLoaded(){
console.log("modelLoaded!")
status=true
objectDetector.detect(img,gotResult)
}
function gotResult(error,result)
{
if (error){
console.log(error)
}
else{
console.log(result)
objects=result
}
}
function draw(){
image(img,0,0,500,300);

if (status=true){
for(i=0;i < objects.length;i++){
document.getElementById("object").innerHTML="Object Detected"
fill("#FF0000")
percent=Math.floor(objects[i].confidence*100)
text(objects[i].label + " " + percent + "%",objects[i].x + 15,objects[i].y + 15)
noFill()
stroke("#FF0000")
rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height)
}
}
}
function redirect(){
    window.location="index.html"
    }
    function redirect1(){
    window.location="index3.html"
    }
    function redirect2(){
    window.location="index4.html"
    }
    function redirect3(){
    window.location="index5.html"
    }
    