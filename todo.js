let button = document.getElementById("btn");
let input = document.querySelector("#inp");
let res = document.querySelector("#maindiv");

button.addEventListener("click", () => {
  if (input.value == "") {
    alert("Cannot be Empty");
  } else {
    let div = document.createElement("div");
    div.className = "main-div";
    let p = document.createElement("p");
    p.innerHTML = input.value;
    div.addEventListener("click", () => {
      p.style.textDecoration = "line-through";
      p.style.color = "red";
      i1.style.visibility = "visible";
      i1.innerHTML = "Undo";
    });
    let i1 = document.createElement("i");
    i1.style.visibility = "hidden";
    i1.className = "fas fa-check";
    i1.addEventListener("dblclick", () => {
      p.style.textDecoration = "none";
      p.style.color = "navy";
      i1.style.visibility = "hidden";
      alert("Selected");
    });
    let i2 = document.createElement("i");
    i2.className = "fas fa-times";
    i2.addEventListener("click", () => {
      div.style.display = "none";
      alert("Are you sure , You want to delete this item ??");
    });

    div.appendChild(i1);
    div.appendChild(p);
    div.appendChild(i2);
    res.appendChild(div);
    input.value = "";
  }
});
