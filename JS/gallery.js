
    const button = document.querySelectorAll(".gallery-content .gallery_enlarge_icon");
    button.forEach(function(ind){ 
    ind.onclick =(i)=> {
    // console.log("wow")
    // const buttonWidth =img[i];
    // console.log("button width " + ind[i])

    const image = document.querySelectorAll("gallery-content img")

image.forEach(function (i) {
    const imgLength = image[i]
//    console.log(imgLength)
   if(imgLength===buttonWidth){
   document.querySelector(".gallery-popup").style.display = " block";
   document.querySelector(".gallery-popup img").src= image.getAttribute("src")
   } }
);
    

    };
    
});


function closePopup() {
    document.querySelector(".gallery-popup").style.display = " none";
    
}

