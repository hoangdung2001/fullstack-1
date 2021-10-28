let add = document.getElementById("add");
let xoa = document.getElementsByClassName("delete");
let newli = document.getElementsByClassName("newli").length;
add.addEventListener("click", () => {
  let newDo = document.getElementById("newTodo").value;
  if(newDo == ""){
      return;
  }

  let newElement = `<li class="newli">
    <div id="checkbox-text">
     <input type="checkbox" name="" id="" class="box" onchange="checkToDo(event);">
     <span>${newDo}</span>
    </div>
    <button class="delete">delete</button>
    </li>`;
  document.getElementById("newul").insertAdjacentHTML("beforeend", newElement);

  xoa = document.getElementsByClassName("delete");
  newli = document.getElementsByClassName("newli").length;
  deleteToDo();
  numberElement(newli);
  document.getElementById("newTodo").value = "";
});

const deleteToDo = () => {
  for (let item of xoa) {
    item.addEventListener("click", () => {
      let parent = item.parentElement;
      parent.remove();
      newli = document.getElementsByClassName("newli").length;
      numberElement(newli);
    });
  }
};
const numberElement = (newli) => {
  let title = null;
  if (newli == 0) {
    title = "All tasks are done";
  } else if (newli == 1) {
    title = `There is ${newli} task to complete`;
  } else {
    title = `There are ${newli} task to complete`;
  }
  document.getElementById("h2").innerHTML = title;
};
let box = document.getElementsByClassName("box");
const checkToDo = (e) => {
  let nextElement = e.target.nextElementSibling;
  nextElement.classList.toggle("line_through");
  if (nextElement.classList.contains("line_through")) {
    newli -= 1;
  } else {
    newli += 1;
  }
  numberElement(newli);
};

deleteToDo();
numberElement(newli);
