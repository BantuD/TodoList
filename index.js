let todoInput = document.querySelector(".input");
let addTodoButoon = document.querySelector(".button");
let showTodos = document.querySelector(".todos-container");
let todo,
    todoList=[];

    /***** Creating function to get unique id */
function uuid() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0,
            v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
  }
  /******Ending******* */
addTodoButoon.addEventListener("click", (e) => {
  e.preventDefault();
  todo=todoInput.value; 
  if(todo.length>0){
    todoList.push({id:uuid(),
                    todo:todo,
                    isCompleted:false});
  }
  renderTodoList(todoList);
});

function renderTodoList(todoList){
  showTodos.innerHTML=todoList.map((todo)=>{
    return `<div><input type="checkbox"><label class="todo">${todo.todo}</label><button>delete</button></div>`;
  })
}
renderTodoList(todoList);