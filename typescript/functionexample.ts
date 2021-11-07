let log = function () {
    console.log("by")
}
// in typescript that is way we can  create a function
// if we have a single statement we can also exclude curly braces

let logs = (messages) => {
    console.log(messages)
}

logs('umar shaikh');

// inline annotation that we have used below x:number we specify type it is called ininlie annotation
// let drawPoint = (point:{x:number,y:number})=>{
//     console.log(point)

// }
// simplifiyes this lines {x:number,y:number} in function with the help of a inteface beacause there is another function that take same parameter for dont repeat the line we use interface and pass inteface in function
// pascal naming convention always use for interface
interface Point {
    x: number,
    y: number
}
let drawPoint = (point: Point) => {
    console.log(point)

}

drawPoint({
    x: 1,
    y: 2

})