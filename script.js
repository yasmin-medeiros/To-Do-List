const ToDoList = [];

const ToDoListElements = document.querySelector("#myUL");

document.querySelector("#add_button").addEventListener("click", addTodo);
document.querySelector("#myInput").addEventListener("keydown", function(e){
if (e.keyCode ===13){
    addTodo()
}
});

//----Obtendo valores da entrada para a matriz de objetos----//
function addTodo();
    const todoText = document.querySelector("#myInput").value;

    if (todoText == ""){
        alert("You did not enter any contents");
    } else {
        const todoObject = {
            id: todoList.length,
            todoText: todoText,
            isDone: false,
        };

//----Com UNSHIFT adicionamos o novo elemento ao início da matriz, para que os novos itens apareçam no topo----//
        todoList.unshift(todoObject);
        displayTodos();
     }
    
     function doneTodo(todoId) {
         const selectedTodoIndex = todoList.findIndex((item) => item.id == todoId);
         
         todoList[selectedTodoIndex].isDone
         ? (todoList[selectedTodoIndex].isDone = false)
         : (todoList[selectedTodoIndex].isDone = true);
         displayTodos();
     }


     //----Excluir um item da lista----//
     function deleteItem(X) {
         todoList.splice(
             todoList.findIndex((item) => item.id == X),
            1
         );
         displayTodos();
        }

    //----Exibindo os itens inscritos na tela----//
        function displayTodos() {
            ToDoListElement.innerHTML = "";
            document.querySelector("#myInput").value = "";

            todoList.forEach ((item) => {
                const listElement = document.createElement("li");
                const delbtn = document.createElement("i");

                listElement.innerHTML = item.todoText;
                listElement.setAttribute("data.id", item.id);

                delBtn.setAttribute("data.id", item.id);
                delBtn.classList.add("far");
                delBtn.classList.add("fa-trash-alt");
                delBtn.setAttribute("data.id", item.id);

                if (item.isDone) {
                    listElement.classList.add("checked");
                }

                listElement.addEventListener("click", function(e) {
                    const selectedId = e.target.getAttribute("data-id");
                    doneTodo(selectedId);
            });

            delBtn.addEventListener("click", function(e) {
                const delId = e.target.getAttribute("data-id");
                deleteItem(delId);
            });

            ToDoListElement.appendChild(listElement);
            listElement.appendChild(delBtn);
        });
    }