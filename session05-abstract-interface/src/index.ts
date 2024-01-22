/* 
    ABSTRACT CLASS
*/

abstract class Person {
    public userName;
    public address;
    constructor(name1: string, address: string) {
        this.userName = name1;
        this.address = address;
    }
    // ghi những phương thức của đối tượng
    abstract sayHello(): void;
    abstract pay(): void;
}
class Chirld extends Person {
    public userId;
    constructor(id: number, name: string, address11: string) {
        super(name, address11);
        this.userId = id;
    }
    // bên thằng con phải implement (triển khai các phương thức bên thằng cha);
    override sayHello(): void {}
    override pay(): void {}
}
let chirld = new Chirld(11, "hoa", "hn");
console.log("111111122222", chirld);
/* 
    viết 1 phương thức abstract bên class cha
    sau đó triển khai 2 phương thức ở trên 2 class con circle,và square
 */

abstract class BankAccount {
    getBalance(id:number): void {}
}
type Minh = {
    id: number;
    money: number;
};
let arrAccount: Minh[] = [];
class SavingsAccount extends BankAccount {
    id: number;
    money: number;
    constructor(id: number, money: number) {
        super();
        this.id = id;
        this.money = money;
    }
    
    saveAccount():void{
        let newAccount:Minh = {
            id:this.id,
            money:this.money
        }
        arrAccount.push(newAccount)
        console.log("11111",arrAccount)
    }

    override getBalance(): number {
        return this.money;
    }

}
let acc = new SavingsAccount(11, 3000);
console.log(acc.id);

class CheckingAccount extends BankAccount{
     override getBalance(id:number): number | string {
        let findAcc= arrAccount.find(item => item.id === id)
        if (!findAcc) {
            return "khong tim thay"
        }
        return findAcc.money
    }
}
let check = new CheckingAccount()
console.log(check.getBalance(11));


interface Loc{
    name:string;
    showName():void;
}
interface Hao{
    name:string,
    age:number,
    showName2():void;
}
interface Thao extends Loc{
    sayHello():void;
}
// tạo 1 class đi implement interface Thao
 class Minh1 implements Thao{
    name:string;
    constructor(name:string){
     this.name=name;
    }
    sayHello(): void {
        console.log("22222222",this.name);
    }
    showName(): void {
    }
}
let std3= new Minh1("minh1111");
// console.log(std3.sayHello());

class Hieu implements Loc,Hao{
    public id:number;
    name: string;
    age:number;
    constructor(id:number,name:string,age:number){
        this.id=id;
        this.name=name;
        this.age=age;
    }
    showName(): void {
        console.log("111111111333",this.name);
        
    }
    showName2(): void {
        console.log("111111111222",this.name);
        
    }
   
}
let std= new Hieu(1,"hieu",18);
console.log(std.showName());
let ourTuple: [number, boolean, string,boolean];
ourTuple = [5, false, 'Coding God was here',true];


