"use strict";
exports.__esModule = true;
exports.Point1 = void 0;
var Point1 = /** @class */ (function () {
    // when we use parameter with prefix with access modifier with public and private javascript compiler automatically generate class field and assign argument in field name
    function Point1(_x, _y) {
        this._x = _x;
        this._y = _y;
    }
    Point1.prototype.draw = function () {
        console.log('it is working');
    };
    return Point1;
}());
exports.Point1 = Point1;
