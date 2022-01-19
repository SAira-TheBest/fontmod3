leftWristX =""
rightWristX =""

function setup(){
video = createCapture(VIDEO)
video.size(550,500)

canvas = createCanvas(550,550)
canvas.position(560,150)
poseNet = ml5.poseNet( video, modelLoaded);
poseNet.on('pose', gotPoses);
}

function modelLoaded()
{
console.log("HI");
}

function gotPoses(results){
    if(results.length > 0)
     
    console.log(results)

    leftWirstX = result[0].pose.leftWrist.x
    rightWirstX = result[0].pose.rightWrist.x
    difference = floor(leftWristX - rightWirstX)
}

function draw(){
background('#6C91C2')

textSize(difference)
fill('#FFE787')
text('Saira', 50, 400)
} 
