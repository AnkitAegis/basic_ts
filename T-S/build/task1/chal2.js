let todoItems = [
    { id: 1, title: "do workout", status: "Active" }
];
function getNextId(todo) {
    let x = todo.reduce((acc, item) => item.id + acc, 0) + 1;
    return x;
}
function addTodoItem(task) {
    let id = getNextId(todoItems);
    const newTodo = {
        id,
        title: task,
        status: "Active"
    };
    todoItems.push(newTodo);
    return newTodo;
}
addTodoItem("create an react app in ts");
