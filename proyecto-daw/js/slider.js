const $slides = document.querySelectorAll(".slider-slide");
const $prev = document.querySelector(".prev");
const $next = document.querySelector(".next");
let i = 0;
document.addEventListener("click", (e) =>{
    if(e.target.matches(".prev")){
        $slides[i].classList.remove("active");
        i--;
        if(i < 0){
            i = $slides.length - 1;
        }

        $slides[i].classList.add("active");
    }

    if(e.target.matches(".next")){
        $slides[i].classList.remove("active");
        i++;
        if(i > $slides.length-1){
            i = 0;
        }

        $slides[i].classList.add("active");
    }
});