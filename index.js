var element = document.querySelector(".door");
element.addEventListener("click", toggleDoor);

function toggleDoor() {
  element.classList.toggle("doorOpen");
}

var element2 = document.querySelector(".door2");
element2.addEventListener("click", toggleDoor2);

function toggleDoor2() {
  element2.classList.toggle("doorOpen2");
}
