const progress = document.getElementById("progress");
const nextButton = document.getElementById("next");
const prevButton = document.getElementById("prev");
const circles = document.querySelectorAll(".circle");
let activeCircles = 1;

nextButton.addEventListener("click", () => {
  activeCircles++;

  if (activeCircles > circles.length) {
    activeCircles = circles.length
  }
  updateProgress();
});

prevButton.addEventListener("click", () => {
  activeCircles--;
  if (activeCircles < 1) {
    activeCircles = 1;
  }
  updateProgress();
});

function updateProgress() {
  circles.forEach((circle, index) => {
    if (index < activeCircles) {
      circle.classList.add("active");
    } else {
      circle.classList.remove("active");
    }
  });

  const actives = document.querySelectorAll(".active")

  progress.style.width = (actives.length - 1) / (circles.length - 1) * 100 + "%";

  if (activeCircles === 1) {
    prevButton.disabled = true;
  } else if (activeCircles === circles.length) {
    nextButton.disabled = true;
  } else {
    prevButton.disabled = false;
    nextButton.disabled = false;
  }
}
