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