let count = 0;
let isImage1 = true;
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");
const addBtn = document.getElementById("addBtn");

const valueDisplay = document.getElementById("value");

function updateDisplay() {
    valueDisplay.textContent = count;
    if(count>=1){
        valueDisplay.style.color = "green"
    } else if(count<=-1){
        valueDisplay.style.color = "red"
    } else {
        valueDisplay.style.color = "black"
    }
}

function increase() {
    count++;
    updateDisplay();
}

function increase_5() {
    count+=5;
    updateDisplay();
}

function decrease() {
    count--;
    updateDisplay();
}

function decrease_5() {
    count-=5;
    updateDisplay();
}

function reset() {
    count = 0;
    updateDisplay();
}

function changeImage() {
const img = document.getElementById("myImage");
if (isImage1) {
    img.src = "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcQPJ_ioxRJogLllkP20rAYLKrkm64s7a_N1CxMXmC_Lhw_VJSwZM3By9OGi-Zqu_oVzJWEQDimQSMA1Pa-RMDBcvEQkcJa0bZTs7POWJmUj9VGY4H1EJ37HADacmEvckoDljwZOW_fHePaD&s=19";
} else {
    img.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8Gp_gRhWLygGR83MQC7v_UUjTzXJn-QLsGEXQCrGi74yJtV6Vax7MSEXhLxBpa1h5-7M1Hx4h8I5k9DSgGuFgS8FLru-9bugNz5ZX68KU2g&s=10";
}

  isImage1 = !isImage1;
}

function addTask() {
  const text = taskInput.value;
  if (!text) return;
  const li = document.createElement("li");
  const span = document.createElement("span");
  span.textContent = text;
  const actions = document.createElement("div");
  actions.className = "actions";
  const doneBtn = document.createElement("button");
  doneBtn.textContent = "Hoàn thành";
  doneBtn.onclick = () => {
    span.classList.toggle("done");
  };

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Xóa";
  deleteBtn.onclick = () => {
    li.remove();
  };

  actions.appendChild(doneBtn);
  actions.appendChild(deleteBtn);

  li.appendChild(span);
  li.appendChild(actions);

  taskList.appendChild(li);

  taskInput.value = "";
}

addBtn.addEventListener("click", addTask);