

class Square implements Shape{
    color:string
    side:number
    constructor(c:string,s:number){
        this.color =c
        this.side = s
    }
    area1(){
        console.log('Area is ',(this.side*this.side))
    }
    perimeter1(){
        console.log('Perimter',(4*this.side) )
    }
    displayDetails(){
console.log("The details are printed")
    }
}
let obj = new Square("Red",11)
obj.area1()
obj.perimeter1()
// obj.displayDetails()

interface Shape{
    area1()
    perimeter1() 
 }