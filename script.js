
function addEmployee() {
    let name = document.getElementById("name").value;
    let id = document.getElementById("id").value;

    if (name == "" || id == "") {
        alert("Enter all details");
        return;
    }

    let li = document.createElement("li");
    li.innerHTML = name + " - " + id;

    document.getElementById("list").appendChild(li);
}
