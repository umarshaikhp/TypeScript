// annotation type
var d;
var n;
var p;
// array
var e = [1, 2, 3, 4];
// any type of array
var a = [1, true, 'umar'];
var color;
(function (color) {
    color[color["red"] = 0] = "red";
    color[color["blue"] = 1] = "blue";
    color[color["green"] = 2] = "green";
})(color || (color = {}));
var backgroundColor = color.green;
var b = 'umar';
// declare any varible type it is called as the assertion there are two way of assertion
var f = b.endsWith('r');
var g = b.endsWith('r');
console.log(f);
console.log(backgroundColor);
d = 10.5;
console.log(d);
