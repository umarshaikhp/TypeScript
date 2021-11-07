class Point{
    // it is dont need it when we use parameter with access modifier
//    x:number
//    y:number

    draw(){
        console.log('x:'+ this._x +'y:'+this._y)
    }
// in typescript there is a concept of a properties X() it is properties that is given below we directly access by field name not property name
    get x(){
        return this._x;
    }
    // camel case follow for  property x()
    set x(value){
        this._x=value
        
        }
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
    constructor(private _x?:number,private _y?:number){
        this._x=_x;
        this._y=_y;
    }

    
}
let point = new Point(1,2);
point.draw();
// if we are using a properties method call to field not properties method
let l = point.x=5;
console.log(point.x)
