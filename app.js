const hover = document.querySelectorAll(".clicks");
let socials = document.querySelector(".socials");

for (i = 0; i < hover.length; i++) {
  hover[i].addEventListener("mouseover", function () {
    socials.classList.add("show");
  });

  hover[i].addEventListener("mouseout", function () {
    socials.classList.remove("show");
  });
};
