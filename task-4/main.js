const cards = document.querySelector(".cards");
const pagination = document.querySelector(".pagination");
const paginationList = document.querySelector(".pagination__list");
const links = document.querySelectorAll(".pagination__link");


const request = ["https://reqres.in/api/users", "https://reqres.in/api/users?page=2"];

function getData(request){
    fetch(request)
    .then((response) => response.json())
    .then((data) => {
        console.log(data.data);
        return renderData(data.data)
    })
}

getData(request[0]);

function renderData(data){
    data.forEach((card) => {
        cards.insertAdjacentHTML("beforeend", `
    <div class="card">
            <div class="card__image">
                <img src=${card.avatar} alt="avatar">
            </div>
            <h2 class="card__fullName">
                ${card.first_name} ${card.last_name}
            </h2>
            <div class="card__id">ID: ${card.id}</div>
            <div class="card__email">${card.email}</div>
        </div>
    `)
    })
}


paginationList.addEventListener("click", (e)=> {
    e.preventDefault();

    const clicked = e.target.closest(".pagination__link");
    if(!clicked) return;
    
    links.forEach((link) => {
        link.classList.remove("active");
        console.log(link);
    })
    clicked.classList.add("active");
    cards.innerHTML = "";

    const numLink = +clicked.innerHTML

    getData(request[numLink - 1]);
});

