const [UP, DOWN, LEFT, RIGHT] = ["up", "down", "left", "right"];
const tiles = [];
const tileSize = 16; //px
let antX, antY, antDirection; // direction: up = 1, right = 2, down = 3, left = 4
let tilesX, tilesY;
let antImg = {
    up: undefined,
    down: undefined,
    left: undefined,
    right: undefined,
}

function preload() {
    antImg.up = loadImage("assets/ant-up.png");
    antImg.down = loadImage("assets/ant-down.png");
    antImg.left = loadImage("assets/ant-left.png");
    antImg.right = loadImage("assets/ant-right.png");
}

function setup() {
    frameRate(30);
    createCanvas(928, 896);
    for (let h = 0; h < height; h++) {
        let row = [];
        for (let w = 0; w < width; w++) {
            row.push(0); // 0 = white, 1 = black
        }
        tiles.push(row);
    }
    tilesX = Math.floor(width / tileSize);
    tilesY = Math.floor(height / tileSize);
    antX = Math.floor(tilesX / 2);
    antY = Math.floor(tilesY / 2);
    antDirection = RIGHT;
}

function draw() {
    drawTiles();
    runCycle();
}

function drawTiles() {
    background(220);
    for (let x = 0; x < tilesX; x++) {
        for (let y = 0; y < tilesY; y++) {
            stroke(0, 0, 0);
            strokeWeight(0.1);
            if (tiles[x][y] === 0) {
                fill(255,255,255);
                square(x * tileSize, y * tileSize, tileSize);
            } else if (tiles[x][y] === 1) {
                fill(0, 0, 0);
                square(x * tileSize, y * tileSize, tileSize);
            }
        }
    }
}

function runCycle() {
    fill(255,0,0);
    image(antImg[antDirection], antX * tileSize, antY * tileSize);
    if (tiles[antX][antY] === 0) {
        tiles[antX][antY] = 1;
        rotateClockwise();
        moveAnt();
    } else if (tiles[antX][antY] === 1) {
        tiles[antX][antY] = 0;
        rotateCounterclockwise();
        moveAnt();
    }
}

function moveAnt() {
    switch(antDirection) {
        case UP:
            antY = mod(antY - 1, tilesY);
            break;
        case RIGHT:
            antX = mod(antX + 1, tilesX);
            break;
        case DOWN:
            antY = mod(antY + 1, tilesY);
            break;
        case LEFT:
            antX = mod(antX - 1, tilesX);
            break;
    }
}

function rotateClockwise() {
    switch (antDirection) {
        case UP:
            antDirection = RIGHT;
            break;
        case RIGHT:
            antDirection = DOWN;
            break;
        case DOWN:
            antDirection = LEFT;
            break;
        case LEFT:
            antDirection = UP;
            break;
    }
}

function rotateCounterclockwise() {
    switch (antDirection) {
        case UP:
            antDirection = LEFT;
            break;
        case LEFT:
            antDirection = DOWN;
            break;
        case DOWN:
            antDirection = RIGHT;
            break;
        case RIGHT:
            antDirection = UP;
            break;
    }
}

const mod = (n, m) => ((n % m) + m) % m;