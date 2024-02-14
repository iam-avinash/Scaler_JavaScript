let allStars = document.querySelectorAll(".star");
let starContainer = document.querySelector(".star-container");
let rating = document.querySelector("h2");
let prevClicked;
// Hover Functionality
function removeColorFromStar(n) {
  for (let i = 0; i < n; i++) {
    allStars[i].classList.remove("active");
  }
}

function addColorToStar(n) {
  for (let i = 0; i < n; i++) {
    allStars[i].classList.add("active");
  }
}

starContainer.addEventListener("click", function (e) {
  if (e.target.classList.contains("star")) {
    // console.log(e.target.dataset.pos);
    //remove active class from all the stars.
    removeColorFromStar(allStars.length);
    //before we make n stars yellow make sure to remove active class from all stars
    let currentStar = e.target.dataset.pos;
    addColorToStar(currentStar);
    prevClicked = currentStar;
    rating.innerText = "Rating : " + currentStar;
  }
});

starContainer.addEventListener("mouseover", function (e) {
  // console.log(e.target);
  //before we make n stars yellow make sure to remove active class from all stars
  if (e.target.classList.contains("star")) {
    removeColorFromStar(allStars.length);
    let currentStar = e.target.dataset.pos;
    addColorToStar(currentStar);
  }
});

starContainer.addEventListener("mouseout", function (e) {
  if (e.target.classList.contains("star")) {
    removeColorFromStar(allStars.length);
    addColorToStar(prevClicked);
  }
});

// const allStars = document.querySelectorAll(".star");
// const starContainer = document.querySelector(".star-container");
// const rating = document.querySelector("h2");
// let prevClicked = 0; // Initialize prevClicked to avoid potential errors

// function toggleStars(n) {
//   allStars.forEach((star, i) => star.classList.toggle("active", i < n));
// }

// starContainer.addEventListener("click", (e) => {
//   if (e.target.classList.contains("star")) {
//     const currentStar = e.target.dataset.pos;
//     toggleStars(currentStar);
//     prevClicked = currentStar;
//     rating.textContent = "Rating : " + currentStar;
//   }
// });

// starContainer.addEventListener("mouseover", (e) => {
//   if (e.target.classList.contains("star")) {
//     const currentStar = e.target.dataset.pos;
//     toggleStars(currentStar);
//   }
// });

// starContainer.addEventListener("mouseout", (e) => {
//   if (e.target.classList.contains("star")) {
//     toggleStars(prevClicked);
//   }
// });
