const wrapper = document.querySelector(".wrapper");

wrapper.addEventListener("click", e => {
    const shape = e.target.closest(".shape");
    if(!shape) return;

    shape.classList.toggle(`animation__${shape.className.split(" ")[1]}`)
});