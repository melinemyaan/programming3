
var matrix = [
    [0, 0, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 0, 1, 1, 1, 0, 0, 1, 0, 0, 1, 3, 1, 1, 1, 0, 3, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1],
    [0, 0, 1, 0, 1, 1, 1, 5, 5, 4, 0, 1, 0, 0, 1, 1, 1, 0, 0, 1, 0, 0, 1, 0, 1, 1, 1, 0, 3, 3, 0, 1, 0, 0, 1, 0, 1, 0, 0, 0],
    [1, 1, 2, 1, 1, 1, 1, 4, 4, 1, 0, 1, 3, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 3, 1, 1, 1, 0, 0, 3, 0, 1, 0, 0, 1, 4, 1, 0, 0, 1],
    [1, 2, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 3, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 0, 1, 1, 1, 0, 3, 3, 3, 1, 0, 0, 1, 4, 1, 0, 0, 0],
    [1, 1, 0, 1, 0, 1, 1, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 0, 0, 5, 0, 0, 1, 3, 1, 1, 1, 0, 3, 3, 3, 1, 0, 0, 1, 0, 1, 0, 0, 1],
    [1, 1, 0, 0, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 5, 4, 0, 0, 1, 0, 1, 1, 1, 0, 0, 0, 0, 1, 0, 0, 1, 4, 1, 0, 0, 5],
    [0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 1, 1, 1, 0, 1, 3, 1, 1, 0, 0, 0, 0, 1, 0, 1, 1, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 4],
    [0, 1, 0, 0, 1, 0, 1, 1, 2, 1, 1, 1, 1, 0, 1, 1, 1, 1, 4, 3, 0, 0, 1, 2, 1, 1, 1, 3, 2, 3, 3, 1, 0, 0, 1, 0, 1, 0, 0, 0],
    [0, 1, 0, 0, 1, 0, 1, 2, 0, 0, 1, 1, 1, 1, 1, 0, 1, 0, 4, 3, 2, 0, 1, 0, 1, 1, 1, 0, 2, 2, 2, 1, 0, 0, 1, 0, 1, 0, 0, 1],
    [1, 1, 0, 0, 0, 0, 1, 1, 0, 2, 3, 1, 1, 1, 1, 3, 1, 0, 4, 2, 2, 0, 1, 0, 1, 1, 1, 3, 3, 0, 0, 1, 0, 0, 1, 0, 1, 4, 5, 1],
    [1, 1, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 2, 1, 1, 3, 1, 0, 0, 0, 0, 0, 1, 0, 1, 1, 1, 0, 0, 0, 3, 1, 3, 3, 1, 4, 1, 4, 0, 0],
    [1, 1, 0, 2, 0, 1, 1, 1, 2, 3, 3, 3, 3, 3, 3, 2, 1, 1, 0, 0, 0, 0, 0, 1, 0, 1, 1, 1, 0, 0, 3, 0, 1, 0, 0, 1, 0, 1, 0, 0],
    [1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 2, 0, 1, 0, 1, 0, 0, 0, 0, 2, 1, 0, 1, 1, 1, 0, 0, 0, 0, 1, 3, 0, 1, 0, 1, 0, 0, 1],
    [0, 1, 3, 2, 2, 1, 1, 2, 1, 1, 1, 1, 0, 0, 1, 0, 1, 4, 0, 0, 0, 2, 1, 0, 1, 1, 1, 0, 0, 2, 3, 1, 3, 3, 1, 4, 1, 0, 0, 0],
    [1, 1, 2, 3, 1, 1, 1, 1, 1, 1, 0, 1, 0, 0, 1, 0, 1, 3, 2, 2, 1, 0, 1, 3, 1, 0, 1, 0, 0, 2, 3, 1, 3, 0, 1, 4, 1, 4, 4, 1],
    [0, 1, 0, 0, 1, 1, 1, 3, 3, 1, 3, 1, 3, 2, 1, 5, 1, 4, 0, 0, 2, 3, 1, 2, 1, 1, 1, 5, 5, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 0],
    [1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 5, 4, 0, 0, 1, 5, 1, 0, 0, 0, 0, 2, 1, 1, 1, 1, 1, 0, 4, 4, 0, 1, 3, 3, 1, 0, 1, 0, 0, 0],
    [0, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 1, 5, 1, 0, 0, 1, 0, 0, 1, 1, 1, 2, 1, 0, 5, 5, 0, 1, 0, 0, 1, 0, 1, 0, 4, 1],
    [0, 0, 1, 0, 1, 1, 1, 0, 0, 5, 4, 1, 2, 3, 1, 0, 1, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 0, 4, 4, 0, 1, 0, 0, 1, 0, 1, 4, 3, 1],
    [0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 4, 4, 0, 2, 1, 0, 1, 2, 2, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 1, 0, 4, 1],
    [0, 0, 1, 1, 1, 1, 1, 3, 2, 2, 3, 1, 1, 3, 2, 1, 2, 1, 1, 0, 0, 2, 0, 1, 2, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 0, 1, 0, 0, 0],
    [1, 1, 0, 0, 0, 0, 1, 0, 0, 1, 1, 1, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 3, 1, 1, 1, 1, 2, 2, 3, 1, 0, 0, 1, 0, 1, 0, 0, 1],
    [1, 1, 0, 0, 0, 0, 1, 2, 2, 1, 1, 1, 0, 2, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 1, 1, 1, 1, 0, 0, 1, 0, 1, 0, 0, 1],
    [0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 2, 5, 1, 0, 1, 1, 0, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 0, 1, 0, 0, 0],
    [0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 0, 1, 2, 0, 1, 1, 1, 1, 0, 0, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 0, 1, 0, 0, 1],
    [0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 2, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 3, 3, 2, 1, 0, 1, 1, 0, 1, 0, 0, 1],
    [0, 1, 0, 0, 0, 0, 1, 1, 0, 1, 0, 1, 2, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 2, 1, 1, 1, 3, 1, 1, 2, 1, 0, 0, 1, 0, 1, 0, 0, 3],
    [1, 1, 2, 2, 2, 2, 1, 1, 2, 1, 0, 1, 1, 0, 1, 0, 1, 3, 0, 3, 2, 1, 1, 2, 1, 1, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 1, 3, 3, 1],
    [2, 1, 2, 0, 0, 0, 1, 3, 4, 1, 5, 1, 1, 0, 1, 2, 1, 2, 2, 2, 3, 0, 1, 3, 1, 1, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 1, 3, 3, 3],
    [1, 1, 3, 3, 2, 2, 1, 3, 4, 1, 0, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 1, 2, 2, 2],
    [1, 1, 1, 1, 1, 3, 1, 4, 0, 1, 0, 1, 1, 0, 1, 0, 1, 2, 2, 2, 3, 3, 1, 0, 1, 1, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 1, 2, 2, 1],
    [0, 1, 0, 0, 0, 0, 1, 4, 1, 1, 0, 1, 2, 0, 1, 0, 1, 0, 0, 2, 2, 3, 1, 0, 1, 1, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 0],
    [1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 2, 1, 1, 0, 1, 2, 1, 1, 1, 1, 0, 0, 1, 0, 1, 1, 1, 2, 2, 2, 0, 1, 0, 0, 1, 0, 1, 2, 2, 1],
    [1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 2, 1, 1, 1, 1, 2, 1, 1, 1, 1, 2, 1, 1, 3, 1, 1, 1, 3, 3, 2, 0, 1, 0, 0, 1, 0, 1, 0, 0, 0],
    [0, 0, 1, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 2, 1, 0, 1, 0, 0, 1, 0, 0, 1, 2, 1, 1, 1, 3, 3, 3, 3, 1, 0, 0, 1, 0, 1, 2, 2, 1],
    [0, 1, 2, 0, 0, 0, 1, 0, 0, 1, 0, 1, 1, 1, 1, 4, 1, 0, 0, 1, 1, 0, 1, 0, 1, 1, 1, 0, 2, 2, 2, 1, 0, 0, 1, 0, 1, 2, 2, 2],
    [0, 2, 1, 1, 1, 1, 1, 2, 2, 1, 0, 1, 2, 3, 1, 4, 1, 1, 0, 1, 1, 1, 1, 2, 1, 1, 1, 2, 2, 2, 2, 1, 0, 0, 1, 0, 1, 2, 2, 2],
    [1, 1, 1, 0, 2, 0, 1, 1, 1, 1, 1, 1, 2, 3, 1, 4, 1, 0, 0, 2, 0, 0, 1, 0, 2, 2, 2, 3, 3, 3, 2, 1, 0, 0, 1, 0, 1, 0, 2, 2]

];

var grassArr = [];
var grassEaterArr = [];
var PredatorArr = [];
var TrchunArr = [];
var EnergeticArr = [];
var side = 15;

function preload() {
    nkar1 = loadImage('https://www.shutterstock.com/image-vector/cartoon-drawing-blades-green-grass-260nw-10605760.jpg')
    nkar2 = loadImage('https://png.pngtree.com/png-vector/20201010/ourlarge/pngtree-cartoon-vector-insect-illustration-flying-little-bee-bee-clipart-png-image_2361668.jpg')
    nkar3 = loadImage('https://media.istockphoto.com/id/1334993248/vector/green-frog-on-a-white-background.jpg?s=612x612&w=0&k=20&c=rAUHg_DzEFy0sJldKiH7mMQ7yT7iotCgyt8fj0I8asg=')
    nkar4 = loadImage('https://thumbs.dreamstime.com/b/bald-american-eagle-mascot-cartoon-swooping-claws-out-wings-outstretched-spread-92580085.jpg')
    nkar5 = loadImage('https://thumbs.dreamstime.com/b/thunderbolt-power-pop-art-comic-style-flat-icon-vector-illustration-198371717.jpg')
}

function setup() {
    frameRate(10);
    createCanvas(matrix[0].length * side, matrix.length * side);
    background('#acacac');
    for (var y = 0; y < matrix.length; ++y) {
        for (var x = 0; x < matrix[y].length; ++x) {
            if (matrix[y][x] == 1) {
                var gr = new Grass(x, y, 1);
                grassArr.push(gr);
            }

            else if (matrix[y][x] == 2) {
                var gr = new GrassEater(x, y, 2);
                grassEaterArr.push(gr);
            }

            else if (matrix[y][x] == 3) {
                var gr = new Predator(x, y, 3);
                PredatorArr.push(gr);
            }

            else if (matrix[y][x] == 4) {
                var gr = new Trchun(x, y, 4);
                TrchunArr.push(gr);
            }



            else if (matrix[y][x] == 5) {
                var gr = new Energetic(x, y, 5);
                EnergeticArr.push(gr);
            }

        }
    }


}



function draw() {

    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {


            if (matrix[y][x] == 1) {
                image(nkar1, x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 0) {
                fill(161, 224, 243);
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 2) {
                image(nkar2, x * side, y * side, side, side);
            }


            else if (matrix[y][x] == 3) {
                image(nkar3, x * side, y * side, side, side);
            }

            else if (matrix[y][x] == 4) {
                image(nkar4, x * side, y * side, side, side);
            }


            else if (matrix[y][x] == 5) {
                image(nkar5, x * side, y * side, side, side);
            }

        

        }
    }


    for (var i in grassArr) {

        grassArr[i].mult()
    }

    for (var i in grassEaterArr) {
        grassEaterArr[i].eat()
        grassEaterArr[i].move()
        grassEaterArr[i].mult()
        grassEaterArr[i].die()

    }


    for (var i in PredatorArr) {
        PredatorArr[i].eat()
        PredatorArr[i].move()
        PredatorArr[i].mult()
        PredatorArr[i].die()

    }


    for (var i in TrchunArr) {
        TrchunArr[i].fly()
        // TrchunArr[i].eat()
        TrchunArr[i].move()
        TrchunArr[i].mult()
        TrchunArr[i].die()

    }

    for (var i in EnergeticArr) {
        EnergeticArr[i].talenergy()
        EnergeticArr[i].move()
        EnergeticArr[i].mult()

    }

}