class Human{
    readonly city:string = "delhi"
    protected courses:string
    newCity:string 
    constructor(
        public name:string, public email:string
    ){}

    // get getEmail():string{
    //     return `my email : ${this.email}`
    // }
    // set printCity(city:string){
    //     if(!this.newCity){
    //         console.log("provide a city")
    //     }else{
    //         this.newCity = city
    //     }
    // }
}

class SubHuman extends Human{
    oldCity: string | undefined
    declareCourse(course:string){
        this.courses = course
    }
}
let one = new Human("hellbrum","h@gmail.com")
