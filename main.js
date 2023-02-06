difference = 0;
rightWristX = 0;
leftWristX = 0;

  function setup() {
  video = createCapture(VIDEO);
  video.size(550, 500);

  canvas = createCanvas(550, 550);
  canvas.position(560,150);

  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on('pose', gotPoses);
}

function modelLoaded() {
  console.log('PoseNet Is Initialized!');
}


function gotPoses(results)
{
  if(results.length > 0)
  {
    console.log(results);
    scoreRightWrist = results[0].pose.keypoints[10].score;
    scoreLeftWrist = results[0].pose.keypoints[9].score;
    console.log("scoreRightWrist = " + scoreRightWrist + "scoreLeftWrist = " + scoreLeftWrist);


    rightWristX = results[0].pose.rightWrist.x;
    rightWristY = results[0].pose.rightWrist.y;
    console.log("rightWristX = " + rightWristX +" rightWristY = "+ rightWristY); 


    leftWristX = results[0].pose.leftWrist.x;
    leftWrist = results[0].pose.leftWrist.y;
    console.log("leftWristX = " + leftWristX  + " leftWristY = "+ leftWristY);
  }
}

function draw() {
    image(video, 0, 0, 600, 500);


    fill("#FF0000");
    stroke("#FF0000");
    if(scoreLeftWrist > 0.2)
    {
        circle (leftWristX,leftWristY,20);
        InNumberleftWristY = Number (leftWristY);
        remove_decimals = floor(InNumberleftWristY);
        volume = remove_decimals/500;
        document.getElementById("volume").innerHTML = "Volume = " + volume;
        song.setVolume(volume);
    }
background('#6C91C2');

  document.getElementById("font_size").innerHTML = "Tamanho da fonte será = " + difference +"px";
textSize(difference);
fill('#FFE787');
text('Victor', 50, 400);
}