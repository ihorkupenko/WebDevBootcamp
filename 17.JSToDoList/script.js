var todos = [];
window.setTimeout(function() {

    do{
    var input = prompt("What do you want to do?")

        if (input === "new") {
            todos.push(prompt("Please enter a new Todo."))
        }

        if (input === "list"){
            alert(todos);
        }
    } while (input !== "quit");

}, 500);