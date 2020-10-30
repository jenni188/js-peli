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


const block1 = document.getElementById("block-1");
const image = document.getElementById("boba")

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
    x: 50,
    y: 500,
    dx: 0,
    dy: 0,
}

const pf3 = {
    w: 80,
    h: 50,
    x: 100,
    y: 500,
    dx: 0,
    dy: 0,
}

const pf4 = {
    w: 80,
    h: 50,
    x: 150,
    y: 500,
    dx: 0,
    dy: 0,
}

const pf5 = {
    w: 80,
    h: 50,
    x: 200,
    y: 450,
    dx: 0,
    dy: 0,
}

const pf6 = {
    w: 80,
    h: 50,
    x: 250,
    y: 400,
    dx: 0,
    dy: 0,
}

const player = {
    w: 50,
    h: 70,
    x: 20,
    y: 200,
    speed: 5,
    dx: 0,
    dy: 0,
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
}

function newPos1(){
    player.x += player.dx;
    player.y += player.dy;

}



function update(){ 
    clear();
    drawPlatform();
    drawPlayer(); 
    newPos();
    newPos1();
   
}


update();





