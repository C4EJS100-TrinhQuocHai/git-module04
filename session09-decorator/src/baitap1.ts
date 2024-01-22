/* 

 */
import "reflect-metadata" ;
/* 
    tạo class có các thuộc tính
    name,price description,inStock,
 */
    // triển khai reflect-metadata
    function validate<T> (target:any,propertyKey:string):void{
        const propertType= Reflect.getMetadata("design:type",target,propertyKey)
        Object.defineProperty(target,propertyKey,{
            set: function (value:T):void {
                if(Number(value)<0){
                    throw new Error("số truyền vào không được âm");
                }
                this[`${propertyKey}`]=value;
            },
            get: function() :T{
                return  this[`${propertyKey}`];
            },
            value:true,
        })
    }
 class Product {
     @validate<string|number>
     private name;
     @validate<string|number>
    private price;
     @validate<string|number>
    private description;
     @validate<string|number>
    private inStock;
    constructor(name:string,price:number,des:string,stock:number){
        this.name=name;
        this.price=price;
        this.description=des;
        this.inStock=stock;
    }
    set price1(price:number){
        this.price=price;
    }
    get getPrice(): any{
        return this.price
    }

 }
 let p1= new Product("iphone",500,"ôk",5);
//  console.log("1111111",p1.getPrice);
 

