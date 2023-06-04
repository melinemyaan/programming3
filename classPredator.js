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