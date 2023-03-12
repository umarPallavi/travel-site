function right() {
  const widthItem = document.querySelector(".owl-item").offsetWidth;
  const mainWidth = widthItem + 30;
  document.querySelector(".image_container").scrollLeft += mainWidth;
  // console.log("right");
  // console.log("widthitem" + widthItem);
  // console.log("main width" + mainWidth);
  // console.log("end");
}
function left() {
  const widthItem = document.querySelector(".owl-item").offsetWidth;
  const mainWidth = widthItem + 30;
  document.querySelector(".image_container").scrollLeft -= mainWidth;
  // console.log("left");
  // console.log("widthitem" + widthItem);
  // console.log("main width" + mainWidth);
  // console.log("end");
}



