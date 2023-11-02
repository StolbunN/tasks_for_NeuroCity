const wrapper = document.querySelector(".square-wrapper");
const title = document.querySelector(".amount");

function setNumber(min, max) {
    return Math.floor(Math.random() * (max-min+1) + min);
}

const amount = setNumber(10, 100);
title.append(amount);

for(let i = 1; i <= amount; i++){
    wrapper.insertAdjacentHTML("afterbegin", `
    <div class="square" style="background-color:${getColor()}"></div>
    `);
}

function getColor() {
    const r = setNumber(0, 255);
    const g = setNumber(0, 255);
    const b = setNumber(0, 255);
    return `rgb(${r}, ${g}, ${b})`
}