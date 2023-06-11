class Grass {
    constructor(x, y, index) {
        this.x = x;
        this.y = y;
        this.index = index;
        this.multiply = 0;
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }

    chooseCell(character) {
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == character) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;

    }


    mult() {
        this.multiply++;
        var emptyCells = this.chooseCell(0);
        var newCell = random(emptyCells);
        if (newCell && this.multiply >= 8) {
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = 1;

            var newGrass = new Grass(newX, newY, 1);
            grassArr.push(newGrass);
            this.multiply = 0;
        }
    }

}





class GrassEater {
    constructor(x, y, index) {
        this.x = x;
        this.y = y;
        this.energy = 8;
        this.index = index;
        this.directions = [];
    }






    getNewCoordinates() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }


    chooseCell(character) {
        this.getNewCoordinates()
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == character) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;

    }



    mult() {
        var empty = random(this.chooseCell(0));
        if (empty && this.energy > 13) {
            var newX = empty[0];
            var newY = empty[1];
            matrix[newY][newX] = 2;
            var newGrassEater = new GrassEater(newX, newY, 2)
            grassEaterArr.push(newGrassEater)
            this.energy = 8;
        }
    }

    move() {
        var food = random(this.chooseCell(0))
        this.energy--
        if (food) {
            matrix[this.y][this.x] = 0
            var newX = food[0];
            var newY = food[1];
            matrix[newY][newX] = 2
            this.x = newX
            this.y = newY

        }

    }

    eat() {
        var food = random(this.chooseCell(1))
        if (food) {
            matrix[this.y][this.x] = 0;
            var newX = food[0];
            var newY = food[1];
            matrix[newY][newX] = 2
            this.x = newX
            this.y = newY
            for (var i in grassArr) {
                if (newX == grassArr[i].x && newY == grassArr[i].y) {
                    grassArr.splice(i, 1);

                }
            }
            this.energy += 2
        }

    }



    die() {
        if (this.energy <= 0) {
            matrix[this.y][this.x] = 0
            for (var i in grassEaterArr) {
                if (grassEaterArr[i].x == this.x && grassEaterArr[i].y == this.y) {
                    grassEaterArr.splice(i, 1)
                    break;
                }
            }
        }
    }

}




class Predator {

    constructor(x, y, index) {
        this.x = x;
        this.y = y;
        this.energy = 8;
        this.index = index;
        this.directions = [];
    }

    getNewCoordinates() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }


    chooseCell(character) {
        this.getNewCoordinates()
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == character) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;

    }


    eat() {
        var food = random(this.chooseCell(2))
        if (food) {
            matrix[this.y][this.x] = 0;
            var newX = food[0];
            var newY = food[1];
            matrix[newY][newX] = 3
            this.x = newX
            this.y = newY



            for (var i in grassEaterArr) {
                if (newX == grassEaterArr[i].x && newY == grassEaterArr[i].y) {
                    grassEaterArr.splice(i, 1);

                }
            }
            this.energy += 2
        }

    }

    move() {


        var empty = random(this.chooseCell(0))
        this.energy--;
        if (empty) {
            var newX = empty[0];
            var newY = empty[1];
            matrix[newY][newX] = 3
            matrix[this.y][this.x] = 0

            this.x = newX
            this.y = newY

        }

    }


    mult() {
        var empty = random(this.chooseCell(0));
        if (empty && this.energy > 13) {
            var newX = empty[0];
            var newY = empty[1];
            matrix[newY][newX] = 3;
            var newPredator = new Predator(newX, newY, 3)
            PredatorArr.push(newPredator)
            this.energy = 8;
        }
    }








    die() {
        if (this.energy <= 0) {
            matrix[this.y][this.x] = 0
            for (var i in PredatorArr) {
                if (PredatorArr[i].x == this.x && PredatorArr[i].y == this.y) {
                    PredatorArr.splice(i, 1)
                    break;
                }
            }
        }
    }


}







class Trchun {

    constructor(x, y, index) {
        this.x = x;
        this.y = y;
        this.energy = 8;
        this.index = index;
        this.directions = [];
    }

    getNewCoordinates() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }


    chooseCell(character) {
        this.getNewCoordinates()
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == character) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;

    }

    choosePredatorCell() {
        this.getNewCoordinates()
        var found = [];
        for (var y = 0; y < matrix.length; y++) {
            for (var x = 0; x < matrix[y].length; x++) {
                if (matrix[y][x] == 3) {
                    found.push([x, y])
                }
            }
        }
        return found;

    }


    mult() {
        var empty = random(this.chooseCell(0));
        if (empty && this.energy > 13) {
            var newX = empty[0];
            var newY = empty[1];
            matrix[newY][newX] = 4;
            var newPredator = new Trchun(newX, newY, 4)
            TrchunArr.push(newPredator)
            this.energy = 8;
        }
    }


    move() {
        var empty = random(this.chooseCell(0))
        this.energy--;
        if (empty) {
            var newX = empty[0];
            var newY = empty[1];
            matrix[newY][newX] = 4
            matrix[this.y][this.x] = 0
            this.x = newX
            this.y = newY

        }

    }


    fly() {
        var flight = random(this.choosePredatorCell())
        if (flight) {
            matrix[this.y][this.x] = 0;
            var newX = flight[0];
            var newY = flight[1];
            matrix[newY][newX] = 4
            this.x = newX
            this.y = newY
            for (var i in PredatorArr) {
                if (newX == PredatorArr[i].x && newY == PredatorArr[i].y) {
                    PredatorArr.splice(i, 1);

                }
            }
            this.energy += 2
        }
    }









    die() {
        if (this.energy <= 0) {
            matrix[this.y][this.x] = 0
            for (var i in TrchunArr) {
                if (TrchunArr[i].x == this.x && TrchunArr[i].y == this.y) {
                    TrchunArr.splice(i, 1)
                    break;
                }
            }
        }
    }




}





class Energetic {

    constructor(x, y, index) {
        this.x = x;
        this.y = y;
        this.energy = 8;
        this.index = index;
        this.directions = [];
    }
    chooseCell(character) {

    }

    getNewCoordinates() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }


    chooseCell(character) {
        this.getNewCoordinates()
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == character) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;

    }


    mult() {
        var empty = random(this.chooseCell(0));
        if (empty && this.energy > 13) {
            var newX = empty[0];
            var newY = empty[1];
            matrix[newY][newX] = 5;
            var newEnergetic = new Energetic(newX, newY, 5)
            EnergeticArr.push(newEnergetic)
            this.energy = 8;
        }
    }




    move() {


        var empty = random(this.chooseCell(0))
        this.energy--;
        if (empty) {
            var newX = empty[0];
            var newY = empty[1];
            matrix[newY][newX] = 5
            matrix[this.y][this.x] = 0
            this.x = newX
            this.y = newY
        }

    }



    talenergy() {
        var energ = random(this.chooseCell(4))
        if (energ) {
            var newX = energ[0];
            var newY = energ[1];
            for (var i in TrchunArr) {
                if (newX == TrchunArr[i].x && newY == TrchunArr[i].y) {
                    TrchunArr[i].energy++;
                }
            }
            this.energy += 1
        }

    }
}