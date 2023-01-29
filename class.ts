class User {
    public email:string
    private name: string
    readonly city: string = "Jaiputra"
    constructor(email:string,name:string){
        this.email = email
        this.name = name
    }
}

//in js #name in ts private name
//private means you can't access it

class UserO {
    readonly city : string = "Jaipur"
    constructor(
        public email : string,
        public name : string,
        private userId : string
    ){}
}
