let a:number = 23;
let b:string = "string";

type User = {
    name:string
    email:string
    phone:number
}

let userOne:User = {
    name:"rock",email:"r@g.com",phone:8989
} 
let userArr:User[] = [
    {name:"rock",email:"r@g.com",phone:8989},
    {name:"rock",email:"r@g.com",phone:8989},
    {name:"rock",email:"r@g.com",phone:8989}
]

let mixArr:(number | string)[] = [2,"str",34,"vtr"];

interface Admin{
    name:string
    email:string
    phone:number
    role:string
    readonly _id?:string
}
let userTwo:(Admin | User) = {
    name:"brock",email:"b@g.com",phone:9898,role:"admin",_id:"asdfjkl;"
}



export {}