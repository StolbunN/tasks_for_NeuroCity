const circle = document.querySelector(".circle");
const shapes = document.querySelectorAll(".shape");

const debounce = (fn, delay) => {
    let timeoutID;
    return function(){
        if(timeoutID){
            clearTimeout(timeoutID);
        }
        timeoutID = setTimeout(() => {
            fn();
        }, delay)
    }
}

circle.addEventListener("click", debounce(() => {
    if(!circle.dataset.click){
        shapes.forEach((sh) => {
            sh.classList.remove("visibility-hidden");
            circle.dataset.click = "click";
        });
    } else {
        shapes.forEach((sh) => {
            sh.classList.add("visibility-hidden");
            delete circle.dataset.click;
        });
    }
}, 1000));