interface TodoItem{
    id:number
    email:string
    title:string
    status: "Active" | "InActive" | "Pending"
    complete?: Date
}

let todoItems : TodoItem[] = [
    {id:1,email:'abc',title:"do workout",status:"Active"}
];

function getNextId<T extends {id:number}>(todo:T[]):number{
    let x:number =  todo.reduce((acc:number,item:T):number=>item.id+acc,0) + 1;
    return x;
}
function addTodoItem(task:string):TodoItem{
    let id = getNextId(todoItems);
    const newTodo:TodoItem = {
        id,
        title:task,
        email:'abc',
        status: "Active"
    }
    todoItems.push(newTodo)
    return newTodo
}

addTodoItem("create an react app in ts")