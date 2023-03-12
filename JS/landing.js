// image slider
var indexValue = 1;
scrollSlide(indexValue);

function arrow_click(e) {
  scrollSlide((indexValue += e));
}

function scrollSlide(e) {
  const slide = document.querySelectorAll(".img-slider");
  if (e > slide.length) {
    indexValue = 1;
  }
  if (e < 1) {
    indexValue = slide.length;
  }
  for (let i = 0; i < slide.length; i++) {
    slide[i].style.display = "none";
  }

  slide[indexValue - 1].style.display = "block";
}

// colorselector
const colorSelector = document.querySelector(".style-switcher");
const open = document.querySelector("#open");
const close = document.querySelector("#close");

function colorSlide() {
  colorSelector.style.left = "0px";
  close.style.display = "block";
}
function slideClose() {
  colorSelector.style.left = "-220px";
  close.style.display = "none";
  open.style.display = "block";
}

//frame
function openFrame() {
  const frameContainer = document.querySelector(".YouTubePopUp-Wrap");
  frameContainer.style.display = "block";
}
function farmeClose() {
  const frameContainer = document.querySelector(".YouTubePopUp-Wrap");
  frameContainer.style.display = "none";
}

//color pletlet selector
const colorPletlets = document.querySelectorAll(".pick-color");
// console.log(colorPletlets);
colorPletlets.forEach(pletlet => {
  const color = getComputedStyle(pletlet);
  const colorValue = color.backgroundColor;

  pletlet.addEventListener("click", function() {
    // console.log(colorValue);
    const changedCcolor = document.querySelectorAll(".changed-color");

    changedCcolor.forEach(item => {
      item.style.color = colorValue;
    });

    const changeBgColor = document.querySelectorAll(".change-bgcolor");

    changeBgColor.forEach(bgchange => {
      bgchange.style.backgroundColor = colorValue;
      bgchange.style.border = colorValue;

      // console.log("bg color")
    });
  });
});

//header open close

function openMenu() {
  const navOpen = document.querySelector("#main-menu");
  const openBtn = document.querySelector("#open-menu");
  const closeBtn = document.querySelector("#close-menu");
  const btnnone = openBtn.style;
  const btnvisible = closeBtn.style;
  const navStyle = navOpen.style;
  btnvisible.display = "block";
  btnnone.display = "none"; //
  navStyle.display = "block";
}
function closeMenu() {
  const navOpen = document.querySelector("#main-menu");
  const openBtn = document.querySelector("#open-menu");
  const closeBtn = document.querySelector("#close-menu");
  const btnnone = openBtn.style;
  const btnvisible = closeBtn.style;
  const navStyle = navOpen.style;
  navStyle.display = "none"; //close
  btnvisible.display = "none";
  btnnone.display = "block"; //open
}
