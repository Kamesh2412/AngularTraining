// console.log("Hello")
// var a = 10;
// console.log(a)
// // let a1ge1:number = 2
// // let f1name:string = "Kamesh";
// console.log(age1,fname)
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// let result = function(num1,num2){
//     return num1+num2
// }
// console.log(result(10,20))
var product = /** @class */ (function () {
    function product(n, p) {
        this.name = n;
        this.price = p;
    }
    product.prototype.displayDetails = function () {
        console.log('Product created is', this.name);
    };
    return product;
}());
var computer = /** @class */ (function (_super) {
    __extends(computer, _super);
    function computer(i, n, p) {
        var _this = _super.call(this, n, p) || this;
        _this.id = i;
        return _this;
    }
    return computer;
}(product));
var obj = new computer(10, 'Dell', 10);
obj.displayDetails();
