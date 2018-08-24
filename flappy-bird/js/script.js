const canvas = document.getElementById("my-canvas");
const context = canvas.getContext("2d");
canvas.width= 1024;
canvas.height = 576;
const W = canvas.width;
const H = canvas.height;
// set vi tri ban dau cua chim
let bX = 100;
let bY = H/2;

let power = 25;
let gravity = 1.5;
let gap = 85;
let minHeightPipe=20;
let sum =0;
let timeRenderPipe = 180;

let pipe=[];

function Component (img, x, y, w, h){
    this.img = img;
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
}
 
Component.prototype.drawImg = function(){
    context.drawImage(this.img, this.x, this.y, this.w, this.h);
}

const background = new Image();
const pipeNorth = new Image();
const pipeSouth = new Image();
const bird = new Image();

background.src="img/background.png";
pipeNorth.src="img/pipe_up.png";
pipeSouth.src="img/pipe_down.png";
bird.src="img/bird.png";




canvas.addEventListener("click", handleEventClick);

function handleEventClick(e){
    bY-= power;
    if(bY<0){
        bY=0;
    }

}

window.addEventListener("keydown", handleEventKeyDown);

function handleEventKeyDown(e){
    if(bY<0){
        bY=0;
    }
    if(e.keyCode===32){
        b.y-=power;
    }
}

function update(){

    const bg = new Component(background,0,0,W,H);
    bg.drawImg();
    const pipeN = new Component(pipeNorth,300,0,50,200);
    const pipeS = new Component(pipeSouth,300,0,50,200);

    pipeN.drawImg();
    pipeS.drawImg();

    const b = new Component(bird,bX,bY,50,50);
    b.drawImg();




    requestAnimationFrame(update);
}
update();