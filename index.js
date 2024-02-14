let inputField = document.querySelector("#inputField")
let addBtn = document.querySelector("#addBtn");
let taskBoxContainer = document.querySelector("#taskBox");
let resetBtn = document.getElementById('resetBtn');




addBtn.addEventListener("click", (e)=>{
    e.preventDefault();
    let getTask = inputField.value;

    if(getTask !== "" && getTask !== "Enter a task here"){
        let div = document.createElement("div");
        div.className = "task";


        let checkbox = document.createElement("input");
        checkbox.id = "task"
        checkbox.setAttribute("type", "checkbox");

        let label = document.createElement("label");
        label.setAttribute("for", "task");
        label.appendChild(document.createTextNode(getTask));


        div.appendChild(checkbox);
        div.appendChild(label);


        taskBoxContainer.appendChild(div);
    } else {
        alert("Please enter a task");
    }

})



// Adding functionality to reset/clear button
      

resetBtn.addEventListener('click', function() {
    inputField.value = "Enter a task here";
taskBoxContainer.innerHTML = "";
});