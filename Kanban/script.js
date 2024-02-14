// Show and hide modal on click button

let addBtn = document.querySelector(".add-btn");
let modal = document.querySelector(".modal");
let isModalHideen = true;
let deleteBtn = document.querySelector(".remove-btn");
let isDeleteBtnActive = false;
let color = ["red", "green", "blue", "pink"];
let textArea = document.querySelector(".text-area");
let mainCont = document.querySelector(".main-cont");
var uid = new ShortUniqueId();
//storing data of each ticket in the form of object
let ticketArr = [];
if (localStorage.getItem("taskArr")) {
  let ticketArrStr = localStorage.getItem("taskArr");
  ticketArr = JSON.parse(ticketArrStr);
  for (let i = 0; i < ticketArr.length; i++) {
    let ticket = ticketArr[i];

    createTicket(ticket.value, ticket.color, ticket.id);
  }
}
let lockUnlockBtn = document.querySelector(".lock-unlock-btn i");
let allPriorityColor = document.querySelectorAll(".task-color1");
let priorityColor = "red";
for (let i = 0; i < allPriorityColor.length; i++) {
  allPriorityColor[i].addEventListener("click", function () {
    // console.log(allPriorityColor[i].classList[1]);

    //before we add border, let's remove border from all
    for (let j = 0; j < allPriorityColor.length; j++) {
      allPriorityColor[j].classList.remove("active");
    }

    allPriorityColor[i].classList.add("active"); // add border
    //update the priority Color
    priorityColor = allPriorityColor[i].classList[1];
  });
}

addBtn.addEventListener("click", function () {
  if (isModalHideen) {
    modal.style.display = "flex";
    isModalHideen = false;
  } else {
    modal.style.display = "none";
    isModalHideen = true;
  }
});

deleteBtn.addEventListener("click", function () {
  if (isDeleteBtnActive) {
    deleteBtn.style.color = "black";
    isDeleteBtnActive = false;
  } else {
    deleteBtn.style.color = "red";
    isDeleteBtnActive = true;
  }
});

textArea.addEventListener("keydown", function (e) {
  let key = e.key;
  if (key == "Enter") {
    //generate a ticket
    createTicket(textArea.value, priorityColor);
    //hide the modal
    modal.style.display = "none";
    isModalHidden = true;
    //empty the textArea value;
    textArea.value = "";
  }
});

function createTicket(task, priorityColor, ticketId) {
  let id;
  if (ticketId) {
    // id is there it means we are creating from localstorage.
    id = ticketId;
  } else {
    // else we are creating from UI.
    id = uid.rnd();
  }
  let ticketCont = document.createElement("div");

  ticketCont.className = "ticket-cont";
  ticketCont.innerHTML = `<div class="ticket-color1 ${priorityColor}"></div>  
                        <div class="ticket-id">#${id}</div> 
                        <div class="ticket-area">${task}</div>
                        <div class = "lock-unlock-btn"><i class="fa-solid fa-lock"></i></div>`;
  if (!ticketId) {
    // only make changes in the array when ticketId is not passed. or
    // we can say it is created with UI and not from the localStorage.
    ticketArr.push({ id: id, color: priorityColor, value: task });
    // console.log(ticketArr);
    let ticketArrStr = JSON.stringify(ticketArr);
    localStorage.setItem("TaskArr", ticketArrStr);
  }

  mainCont.appendChild(ticketCont);

  ticketCont.addEventListener("click", function () {
    if (isDeleteBtnActive) ticketCont.remove();
  });

  let lockUnlockBtn = ticketCont.querySelector(".lock-unlock-btn i");
  let ticketArea = ticketCont.querySelector(".ticket-area");
  lockUnlockBtn.addEventListener("click", function () {
    if (lockUnlockBtn.classList.contains("fa-lock")) {
      lockUnlockBtn.classList.remove("fa-lock");
      lockUnlockBtn.classList.add("fa-lock-open");
      ticketArea.setAttribute("contenteditable", "true");
    } else {
      lockUnlockBtn.classList.add("fa-lock");
      lockUnlockBtn.classList.remove("fa-lock-open");
      ticketArea.setAttribute("contenteditable", "false");
    }
  });

  // Handle Ticekt colour change

  let ticketColor = ticketCont.querySelector(".ticket-color1");
  ticketColor.addEventListener("click", function () {
    // console.log(ticketColor);
    let currentColor = ticketColor.classList[1];
    // console.log(currentColor);
    let idx;
    for (let i = 0; i < color.length; i++) {
      if (currentColor == color[i]) {
        idx = 1;
        break;
      }
    }
    let nextIdx = (idx + 1) % color.length;
    let nextColor = color[nextIdx];

    ticketColor.classList.remove(currentColor);
    ticketColor.classList.add(nextColor);
  });
}

let filterpenDiv = document.querySelectorAll(".Colour");
let mainContainer = document.querySelector(".toolbox-main");
// console.log(mainContainer);
// console.log(filterpenDiv);

for (let i = 0; i < filterpenDiv.length; i++) {
  filterpenDiv[i].addEventListener("click", function () {
    let;
  });
}
