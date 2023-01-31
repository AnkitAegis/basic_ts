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
interface User{
    birthDate:string
}
interface Admin extends User{
    role: "admin" | "hr" | "devloper"
}
//can't re-open a 'type'
let userOne:Admin = {
    name:'ritz',
    role:"hr",
    birthDate:"30/08/2022",
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