// annotation type
let d:number
let n:string
let p:boolean
// array
let e:number[]=[1,2,3,4]
// any type of array
let a:any[]=[1,true,'umar']
enum color{red,blue,green}
let backgroundColor = color.green;
let b='umar'
// declare any varible type it is called as the assertion there are two way of assertion
let f=(<string>b).endsWith('r')
let g=(b as string).endsWith('r')

console.log(f)
console.log(backgroundColor)
d=10.5
console.log(d)

