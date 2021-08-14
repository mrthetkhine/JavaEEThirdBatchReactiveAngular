var Point = /** @class */ (function () {
    function Point(x, y) {
        this.x = x;
        this.y = y;
        this.name = "Hello";
    }
    Object.defineProperty(Point.prototype, "myName", {
        get: function () {
            return this.name;
        },
        enumerable: false,
        configurable: true
    });
    return Point;
}());
var p = new Point(10, 20);
console.log("Point p ", p);
console.log("Name ", p.myName);
