function preload() {
}

function setup() {
    canvas = createCanvas(640, 480);
    canvas.position(110, 250);
    video = createCapture(VIDEO);
    video.hide();
    rect(90, 90, 60, 60);
}

function draw() {
    image(video, 0, 0, 640, 480);
}

function take_snapshot(){
    save('student_name.png');
}
