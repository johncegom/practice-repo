var images = document.querySelectorAll(".image-slider img");
var i = 0;
function ToggleImage() {
  if (i === 4) {
    images[i].classList.toggle("hide");
    i = 0;
    images[i].classList.toggle("hide");
  }
  images[i].classList.toggle("hide");
  images[i+1].classList.toggle("hide");
  i++;
};
setInterval(ToggleImage, 3500);