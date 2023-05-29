const nextSelector = document.querySelector(".next");
const prevSelector = document.querySelector(".prev");
const mySLiderAll = document.querySelectorAll(".fade");
const dotElementAll = document.querySelectorAll(".dot");

let index = 0;

//next
// nextSelector.addEventListener("click", () => {
//   for (let i = 0; i < mySLiderAll.length; i++) {
//     mySLiderAll[i].classList.add("mySlides");
//     dotElementAll[i].classList.remove("active");
//   }
//   index++;
//   if (index === mySLiderAll.length) {
//     index = 0;
//   }
//   mySLiderAll[index].classList.remove("mySlides");
//   dotElementAll[index].classList.add("active");
// });

//prev
// prevSelector.addEventListener("click", () => {
//   for (let i = 0; i < mySLiderAll.length; i++) {
//     mySLiderAll[i].classList.add("mySlides");
//     dotElementAll[i].classList.remove("active");
//   }
//   index--;
//   if (index < 0) {
//     index = mySLiderAll.length - 1;
//   }
//   mySLiderAll[index].classList.remove("mySlides");
//   dotElementAll[index].classList.add("active");
// });

// setInterval(() => {
//   for (let i = 0; i < mySLiderAll.length; i++) {
//     mySLiderAll[i].classList.add("mySlides");
//     dotElementAll[i].classList.remove("active");
//   }
//   index++;
//   if (index === mySLiderAll.length) {
//     index = 0;
//   }
//   mySLiderAll[index].classList.remove("mySlides");
//   dotElementAll[index].classList.add("active");
// }, 3000);

// dotElementAll.forEach((dot, i) => {
//   dot.addEventListener("click", (e) => {
//     for (let i = 0; i < mySLiderAll.length; i++) {
//       mySLiderAll[i].classList.add("mySlides");
//       dotElementAll[i].classList.remove("active");
//     }
//     index = i;

//     mySLiderAll[index].classList.remove("mySlides");
//     dotElementAll[index].classList.add("active");
//   });
// });
// function automatic() {
//   for (let i = 0; i < mySLiderAll.length; i++) {
//     mySLiderAll[i].classList.add("mySlides");
//     dotElementAll[i].classList.remove("active");
//   }

//   index++;
//   if (index === mySLiderAll.length) {
//     index = 0;
//   }
//   mySLiderAll[index].classList.remove("mySlides");
//   dotElementAll[index].classList.add("active");

//   setTimeout(automatic, 3000);
// }
// automatic();

const carousel = document.querySelector(".carousel");
const arrowIcons = document.querySelectorAll(".wrapper i");
const imageAll = document.querySelectorAll(".wrapper img");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

console.log(imageAll);
arrowIcons.forEach((icon) => {
  icon.addEventListener("click", () => {});
});
let isDragStart = false,
  prevPageX,
  prevScrollLeft;

const dragging = (e) => {
  if (!isDragStart) return;
  e.preventDefault();
  let positionDiff = e.pageX - prevPageX;
  carousel.scrollLeft = prevScrollLeft - positionDiff;
};

const dragStart = (e) => {
  isDragStart = true;
  prevPageX = e.pageX;
  prevScrollLeft = carousel.scrollLeft;
};

const dragStop = () => (isDragStart = false);
carousel.addEventListener("mousemove", dragging);
carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("mouseup", dragStop);

nextBtn.addEventListener("click", () => {
  imageAll.forEach((img) => {
    img.classList.add("mySlides");
  });
  index++;

  imageAll[index % 3].classList.remove("mySlides");
  imageAll[(index % 3) + 1].classList.remove("mySlides");
  imageAll[(index % 3) + 2].classList.remove("mySlides");
});
