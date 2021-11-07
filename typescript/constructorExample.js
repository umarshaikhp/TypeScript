var Point = /** @class */ (function () {
    // }
    // get the value of private we have take getter method
    // getX(){
    //     return this.x;
    // }
    // setX(value){
    //     if(value>0){
    //     this.x=value
    //     }
    //     else{
    //         throw new Error('value is less than 1')
    //     }
    // }
    // to make parameter optional we have to use ? mark after parameter
    // when we use parameter with prefix with access modifier with public and private javascript compiler automatically generate class field and assign argument in field name
    function Point(_x, _y) {
        this._x = _x;
        this._y = _y;
        this._x = _x;
        this._y = _y;
    }
    // it is dont need it when we use parameter with access modifier
    //    x:number
    //    y:number
    Point.prototype.draw = function () {
        console.log('x:' + this._x + 'y:' + this._y);
    };
    Object.defineProperty(Point.prototype, "x", {
        // in typescript there is a concept of a properties X() it is properties that is given below we directly access by field name not property name
        get: function () {
            return this._x;
        },
        // camel case follow for  property x()
        set: function (value) {
            this._x = value;
        },
        enumerable: false,
        configurable: true
    });
    return Point;
}());
var point = new Point(1, 2);
point.draw();
// if we are using a properties method call to field not properties method
var l = point.x = 5;
console.log(point.x);
