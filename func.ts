function add(a:number,b:number):number{
    return a+b;
}
function print(yourname:string):void{
    console.log(`hey ${yourname}`,"i don't return anything")
}

interface User {
    name:string
    email:string
    userId:number
    startTrail():string
    getCoupon(coupon:string):number
}

let userOne:User = {
    name:'ritz',
    email:"ritz@gmail.com",
    userId:234,
    startTrail:()=>{
        return "trail started";
    },
    getCoupon:(cou:"string")=>{
        return 8989;
    }
} 

export {}