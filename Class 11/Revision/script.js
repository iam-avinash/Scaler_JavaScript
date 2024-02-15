// let tag = document.querySelector("h1");
// tag.innerHTML = "Bye World";
// console.log(tag);

// let mainDiv = document.getElementById("one");
// let newElement = document.createElement("h2");
// newElement.innerText = "i am tag two";
// mainDiv.appendChild(newElement);
// // console.log(mainDiv);

// On clicking the button append hello to the page.

let newBTN = document.querySelector(".BTN");
newBTN.addEventListener("click", function (e) {
  console.log(e);

  let mainDiv = document.getElementById("one");
  let newElement = document.createElement("h2");
  newElement.innerText = "Hello World ";
  mainDiv.appendChild(newElement);
});
console.log(newBTN);
console.log("");
