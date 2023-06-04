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