const todoForm = document.querySelector(".js-todo"),
  todoInput = todoForm.querySelector("input");
const todoPrint = document.querySelector(".js-todo-print");

/* {timer document}
const timerDiv = document.querySelector(".js-div-timer"),
  timerDialog = timerDiv.querySelector(".js-dialog-timer"),
  timerForm = timerDialog.querySelector(".js-form-timer-set"),
  timerHour = timerForm.querySelector(".js-input-timer-hours"),
  timerMin = timerForm.querySelector(".js-input-timer-minutes"),
  timerSec = timerForm.querySelector(".js-input-timer-seconds"),
  submitBtn = timerForm.querySelector(".submit-btn");
  */

//const timer_icon = "timer-icon"; [iimer css]
const span_place = "span-place";
const dltbtn_hide_CN = "dltbtn-type-hide";
const dltbtn_show_CN = "dltbtn-type-show";

let todosList = [];

function dltlabel(event) {
  const btnTarget = event.target;
  const liNode = btnTarget.parentNode;
  todoForm.removeChild(liNode);
  const filterArray = todosList.filter(function (todo) {
    return todo.id !== parseInt(liNode.id);
  });
  todosList = filterArray;
  saveToLocal();
}

/* [timer function Logic]
function aramFunc(event) {
  event.preventDefault();
  const hourValue = timerHour.value,
    minValue = timerMin.value,
    secValue = timerSec.value;
  console.log(hourValue, minValue, secValue);
  if (
    !Number.isNaN(parseInt(hourValue, minValue, secValue)) &&
    parseInt(hourValue, minValue, secValue) >= 0
  ) {
    console.log(hourValue, minValue, secValue);
  }
}

function setTheAram(event) {
  const aramNode = event.target.parentNode;
  console.dir(aramNode);
}
*/

function paintTodos(string) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  span.innerText = "❌"; //win + dot key
  span.addEventListener("click", dltlabel);
  const label = document.createElement("label");
  label.innerText = string;
  label.id = span_place;
  span.classList.add(dltbtn_hide_CN);
  li.addEventListener("mousemove" || "mouseenter", function () {
    span.classList.remove(dltbtn_hide_CN);
    span.classList.add(dltbtn_show_CN);
  });
  li.addEventListener("mouseout", function () {
    span.classList.remove(dltbtn_show_CN);
    span.classList.add(dltbtn_hide_CN);
  });
  /*    [timer function Logic]
  const img = document.createElement("img");
  img.addEventListener("click", setTheAram);
  */
  const documentId = todosList.length + 1;
  /*    [timer function Logic]
  img.id = timer_icon;
  img.src =
    "./day manager icon list/img icon hours hiding/(color) white/hide text timer end -white.png";
  */
  li.id = documentId;
  li.appendChild(label);
  //li.appendChild(img);
  li.appendChild(span);
  todoForm.appendChild(li);

  const todosDeta = {
    string: string,
    id: documentId
  };

  todosList.push(todosDeta);
  saveToLocal();
}

function saveToLocal() {
  const todosLocalKey = "todos";
  localStorage.setItem(todosLocalKey, JSON.stringify(todosList));
}

function loadToLocal() {
  const localValue = localStorage.getItem("todos");
  if (localValue !== null) {
    const changeToObj = JSON.parse(localValue);
    changeToObj.forEach(function (todo) {
      paintTodos(todo.string);
    });
  }
}

function handleSubmit(event) {
  event.preventDefault();
  const inputValue = todoInput.value;
  paintTodos(inputValue);
  todoInput.value = "";
}

function init() {
  loadToLocal();
  todoForm.addEventListener("submit", handleSubmit);

  /*    [timer function Logic]
  submitBtn.addEventListener("click", aramFunc);
  
  timerForm.addEventListener("click", function(event) {
    function keydownEvent(elemunt) {
      elemunt.addEventListener("keydown", function(event) {
        const target = event.target;
        const value = target.value;
        //console.log(value);
        //console.dir(event.target.value);
        console.log(
          isNaN(event.key)
            ? event.preventDefault()
            : Math.sign(event.key) < 0
            ? console.log("dlt -number")
            : []
        );

        console.log(timerHour.value);
      });
    }
    keydownEvent(event.target);
  });
  */
}
init();
