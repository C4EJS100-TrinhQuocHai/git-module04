console.log("!1111111");

interface SuHao{
    suhao:string
   
}
class Hao2 implements SuHao{
    suhao: string;
    constructor(suhao:string){
            this.suhao=suhao;
    }
   set sayHello(value:string){
       this['suhao']=value;
       console.log("111111",this.suhao);
       
    }
}
let minh= new Hao2("hello");
minh.sayHello="hlllllle";
/* 
Bài tập
 */

