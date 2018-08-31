const canvas = document.getElementById("my-canvas");
const context = canvas.getContext("2d");
const button = document.getElementById('my-button');
const result = document.getElementById('my-result');
canvas.width= 1024;
canvas.height = 576;
const W = canvas.width;
const H = canvas.height;
// set vi tri ban dau cua chim
let bX = 200;
let bY = H/3;
let bW = 50;
let bH = 50;

let col_w = 50;
let power = 30;
let gravity = 2;
let gap = 150;
let speed =10;
let minHeightPipe=200;
let maxHeightPile = 300;
let noFrames;
let distance = bX;
let deletedPipe=0;
let point =0;
let pass = 0;
let pipes=[];

function reset(){
    bX = 200;
    bY = H/3;
    deletedPipe=0;
    point =0;
    pass = 0;
    pipes=[];
}

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
pipeNorth.src="img/pipe_down.png";
pipeSouth.src="img/pipe_up.png";
bird.src="img/bird2.png";

window.onload = function(e){
    const bg = new Component(background,0,0,W,H);
    bg.drawImg();
    result.style.display="block";
    result.innerText='Flappy Bird';
    button.style.display='block';
    button.innerText='Play';
}

canvas.addEventListener("click", handleEventClick);

function handleEventClick(e){
    bY-=power;
    if(bY<0){
        bY=0;
    }
}

window.addEventListener("keydown", handleEventKeyDown);

function handleEventKeyDown(e){
    if(e.keyCode===32){
        bY-=power;
    }
    if(bY<0){
        bY=0;
    }
}

button.addEventListener('click',handleEventButtonClick);

function handleEventButtonClick(e){
    result.style.display="none";
    button.style.display='none';
    reset();
    console.log(e);
    update();
}

function update(){
    if(die()){
        result.style.display="block";
        result.innerHTML='Game over!<br/>Points: '+point;
        button.style.display='block';
        button.innerText='Play again';
        return;
    }
    const bg = new Component(background,0,0,W,H);
    bg.drawImg();

    if(pipes.length<1||pipes[pipes.length-1].pipeN.x<W-distance){
        let h1=Math.random()*(maxHeightPile-minHeightPipe)+minHeightPipe, x=W;
        const pipeN = new Component(pipeNorth,x,0,col_w,h1);
        const pipeS = new Component(pipeSouth,x,h1+gap,col_w,H-gap-h1);
        const pair = {};
        pair.pipeN = pipeN;
        pair.pipeS = pipeS;
        pipes.push(pair);
    }

    if(pipes[0].pipeN.x+pipes[0].pipeN.w<=0){
        pipes.shift();
        console.log(pipes);
        deletedPipe++;
    }
    pass = 0;
   for(i in pipes){       
       obj = pipes[i];
       obj.pipeN.drawImg();
       obj.pipeS.drawImg();
       obj.pipeN.x-=speed;
       obj.pipeS.x-=speed;
       if(obj.pipeN.x+obj.pipeN.w<=bX){
        pass+=1;
    }
   }
   point = deletedPipe + pass;
   context.fillStyle='Green';
   context.font='30px Arial';
   context.fillText('Point: '+ point,50,50);
   
   const b = new Component(bird,bX,bY,bW,bH);
   b.drawImg();
   bY+=gravity;
   
    noFrames= requestAnimationFrame(update);
    
}

function die(){
    if(bY+bH>=H){
        return true;
    }
    for(i in pipes){
        obj = pipes[i];
        if((bX+bW==obj.pipeN.x)&&(bY+bH<=obj.pipeN.h||bY>=obj.pipeS.y)){
            return true;
        }
        if(((bX+bW>=obj.pipeN.x)&&(bX<=obj.pipeN.x))&&((bY<=obj.pipeN.h)||(bY+bH>=obj.pipeS.y))){
            return true;
        }
    }    
}

//  update();