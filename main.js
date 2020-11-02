//modal

let modal = document.getElementById('shop-modal');

function openModal(){
    modal.style.display = "block";
}

function hideModal(){
    modal.style.display = "none";
}

//canvas1

const canvas = document.getElementById("level-c");
const ctx = canvas.getContext("2d");
const gravity = 7.5;

const block1 = document.getElementById("block-1");
const block2 = document.getElementById("block-3-pysty");
const image = document.getElementById("boba");

const pf1 = {
    w: 80,
    h: 50,
    x: 0,
    y: 500,
    dx: 0,
    dy: 0,
}

const pf2 = {
    w: 80,
    h: 50,
    x: 49,
    y: 500,
    dx: 0,
    dy: 0,
}

const pf3 = {
    w: 80,
    h: 50,
    x: 98,
    y: 500,
    dx: 0,
    dy: 0,
}

const pf4 = {
    w: 80,
    h: 50,
    x: 147,
    y: 500,
    dx: 0,
    dy: 0,
}

const pf5 = {
    w: 80,
    h: 50,
    x: 196,
    y: 450,
    dx: 0,
    dy: 0,
}

const pf6 = {
    w: 80,
    h: 50,
    x: 245,
    y: 400,
    dx: 0,
    dy: 0,
}

const pf7 = {
    w: 80,
    h: 50,
    x: 294,
    y: 350,
    dx: 0,
    dy: 0,
}

const pf8 = {
    w: 50,
    h: 250,
    x: 355,
    y: 316,
    dx: 0,
    dy: 0,
}

const player = {
    w: 60,
    h: 70,
    x: 20,
    y: 420,
    speed: 5,
    dx: 0,
    dy: 0,
    jump : true,
}



function drawPlayer() {
    ctx.drawImage(image, player.x, player.y, player.w, player.h);
}

function drawPlatform(){
    ctx.drawImage(block1, pf1.x, pf1.y, pf1.w, pf1.h);
    ctx.drawImage(block1, pf2.x, pf2.y, pf2.w, pf2.h);
    ctx.drawImage(block1, pf3.x, pf3.y, pf3.w, pf3.h);
    ctx.drawImage(block1, pf4.x, pf4.y, pf4.w, pf4.h);
    ctx.drawImage(block1, pf5.x, pf5.y, pf5.w, pf5.h);
    ctx.drawImage(block1, pf6.x, pf6.y, pf6.w, pf6.h);
    ctx.drawImage(block1, pf7.x, pf7.y, pf7.w, pf7.h);
    ctx.drawImage(block2, pf8.x, pf8.y, pf8.w, pf8.h);
}

function clear(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function newPos(){
    pf1.x += pf1.dx;
    pf1.y += pf1.dy;

    pf2.x += pf2.dx;
    pf2.y += pf2.dy;

    pf3.x += pf3.dx;
    pf3.y += pf3.dy;

    pf4.x += pf4.dx;
    pf4.y += pf4.dy;

    pf5.x += pf5 .dx;
    pf5.y += pf5.dy;

    pf6.x += pf6 .dx;
    pf6.y += pf6.dy;

    pf7.x += pf7 .dx;
    pf7.y += pf7.dy;

    pf8.x += pf8 .dx;
    pf8.y += pf8.dy;
}


function newPos1(){
    player.x += player.dx;
    player.y += player.dy;

    detecWalls();
}

function detecWalls(){
    if (player.x < 0){
    player.x = 0;
    }
    if (player.x + player.w > canvas.width){
    player.x = canvas.width - player.w;
    }
    if (player.y < 0){
    player.y = 0;
    }
    if (player.y + player.h > canvas.height){
    player.y = canvas.height - player.h;
    }
}


function moveRight(){
    player.dx = player.speed;
}

function moveLeft(){
    player.dx = -player.speed;
}

function keyDown(e){
    if(e.key === "ArrowRight" || e.key === "Right"){
        moveRight();
    } else if (e.key === "ArrowLeft" || e.key === "Left"){
        moveLeft();
    } 
    
}

function keyUp(e){
    if (
        e.key == "Right" ||
        e.key == "ArrowRight" ||
        e.key == "Left" ||
        e.key == "ArrowLeft" 
     ) {
        player.dx = 0;
        player.dy = 0;
    }
}


if


function update(){ 
    clear();
    drawPlatform();
    drawPlayer(); 
    newPos();
    newPos1();
    requestAnimationFrame(update);
    player.y += gravity;
   
}


update();

document.addEventListener("keydown", keyDown)
document.addEventListener("keyup", keyUp)



