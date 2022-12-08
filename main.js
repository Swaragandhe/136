objects = [];
Status = "";
function setup() {
    canvas = createCanvas(380, 380);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(380,380);
    video.hide();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
  }

  function start() {
    objectDetector = ml5.objectDetector('cocossd' , modelLoaded);
    document.getElementById("status").innerHTML = "Status:Detecting objects"
}
function modelLoaded() {
    console.log("Model is loaded");
   Status = "true";
   
}

function draw() {
    image(video, 0, 0, 380, 380);
}


    function start() {
        objectDetector = ml5.objectDetector('cocossd' , modelLoaded);
        document.getElementById("status").innerHTML = "Status:Detecting objects"
    }
    