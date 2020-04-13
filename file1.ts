// console.log("Hello")
// var a = 10;
// console.log(a)
// // let a1ge1:number = 2
// // let f1name:string = "Kamesh";
// console.log(age1,fname)


// let result = function(num1,num2){
//     return num1+num2
// }
// console.log(result(10,20))

class product implements productInterface{
    name:string
    price:number
    constructor(n:string,p:number){
        this.name=n;
        this.price=p
    }
    displayDetails(){
        console.log('Product created is',this.name)
    }
}

class computer extends product{
id:number
constructor(i:number,n:string,p:number){
    super(n,p)
    this.id=i
}

}

let obj = new computer(10,'Dell',10)
obj.displayDetails()

interface productInterface{
    displayDetails()
}