interface Contact{
    id:number
    email:string
    status: 'Active' | 'Inactive' | 'New'
}
enum stats{
    Active='Active',Inactive='Inactive',New='New'
}

let user:Contact = {
    id:1,
    email:"abc",
    status:'Active'
    
} 

// function clone(source:Contact, func:(source:Contact)=>Contact){
//     return "string";
// }