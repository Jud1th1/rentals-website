

//select buttons & video
const btn = document.querySelector(".switch-btn")
const video = document.querySelector(".video-container")

btn.addEventListener("click", function(){
    if (!btn.classList.contains("slide")){
        btn.classList.add("slide")
        //to control video you have access variable and use pause method
        video.pause();
    }
    else{
        btn.classList.remove("slide")
        //to control video you have access variable and use play method
        video.play();
    }
})

// MDN
// The DOMContentLoaded event fires when the initial HTML document has been completely loaded and parsed, without waiting for stylesheets, images, and subframes to finish loading.
// The load event is fired when the whole page has loaded, including all dependent resources such as stylesheets and images.

//preloader
const preloader = document.querySelector(".preloader");

window.addEventListener("load", function () {
    preloader.classList.add("hide-preloader");
  });