var todos = ["Ihor", "Olha"];
window.setTimeout(function() {

    do{
    var input = prompt("What do you want to do?")

        if (input === "new") {
            todos.push(prompt("Please enter a new Todo."))
        }

        if (input === "list"){
            todos.forEach(function(element, i){
                console.log(i +": "+element)
            });
        }

        if (input === "delete"){
            var i = prompt("Please enter an index of todo which you want to delete.")
            todos.splice(i, 1);
        }

    } while (input !== "quit");

}, 500);