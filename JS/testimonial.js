function moveLeft(){
    const widthItem = document.querySelector(".testimonial-item").offsetWidth;
    const mainWidth = widthItem + 7;
    document.querySelector(".outer-container").scrollLeft -= mainWidth;
}
function moveRight(){
    const widthItem = document.querySelector(".testimonial-item").offsetWidth;
    const mainWidth = widthItem + 7;
    document.querySelector(".outer-container").scrollLeft += mainWidth;

}