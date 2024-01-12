/* 
    ABSTRACT CLASS
*/

abstract class Person{
    public userName;
    public address;
    constructor(name1:string,address:string){
        this.userName=name1;
        this.address=address;
    }
    // ghi những phương thức của đối tượng
    abstract sayHello():void;
    abstract pay():void;
}
 class Chirld extends Person{
    public userId;
    constructor(id:number,name:string,address11:string){
        super(name,address11);
        this.userId=id;
    }
    // bên thằng con phải implement (triển khai các phương thức bên thằng cha);
    override sayHello(): void { 
    }
    override pay(): void {
        
    }
 }
 let chirld =new Chirld(11,"hoa","hn");
 console.log("1111111",chirld);
 /* 
    viết 1 phương thức abstract bên class cha
    sau đó triển khai 2 phương thức ở trên 2 class con circle,và square
 */
 