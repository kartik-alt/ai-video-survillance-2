function setup(){
    canvas=createCanvas(600,500);
    canvas.center();
    video.hide();

}


function preload(){
video=createVideo("video.mp4");

}

function start(){

    document.getElementById("status").innerHTML="status :";
    Objectdetector=ml5.objectDetector("cocossd", modelLoaded );
}