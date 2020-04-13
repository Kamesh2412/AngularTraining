var Square = /** @class */ (function () {
    function Square(c, s) {
        this.color = c;
        this.side = s;
    }
    Square.prototype.area1 = function () {
        console.log('Area is ', (this.side * this.side));
    };
    Square.prototype.perimeter1 = function () {
        console.log('Perimter', (4 * this.side));
    };
    Square.prototype.displayDetails = function () {
        console.log("The details are printed");
    };
    return Square;
}());
var obj = new Square("Red", 11);
obj.area1();
obj.perimeter1();
