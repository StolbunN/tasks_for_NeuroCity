"use stric"

const form = document.querySelector(".form__body");
const arrival = form.querySelector(".form__arrival");
const reset = form.querySelector(".button__reset");

form.addEventListener("submit", function(e){
    e.preventDefault();

    let err = formValidate(form);

    if(err === 0){
        alert("Форма отправлена!");
    } else {
        alert("Заполните оставшиеся поля корректно!");
    }
});


form.addEventListener("input", function(){
    formValidate(form);
})

// Валидация формы
function formValidate(form){
    let error = 0;
    const formReq = document.querySelectorAll("._req");

    for(let i = 0; i < formReq.length; i++){
        const input = formReq[i];
        formRemoveError(input);

        
        if(input.classList.contains("_firstName")) {
            if(firstNameTest(input)) {
                formAddError(input);
                error++;
            }
        } else if(input.classList.contains("_phone")) {
            if(phoneTest(input) ) {
                formAddError(input);
                error++;
            }
        } else if(input.classList.contains("_password")){
            if(passwordTest(input) ) {
                formAddError(input);
                error++;
            }
        } else if(input.classList.contains("_repeatPassword")){
            if(repeatPasswordTest(input) ) {
                formAddError(input);
                error++;
            }
        } else if(input.value === ""){
            formAddError(input);
            error++;
        }
    }
    return error;
}

function formAddError(input) {
    input.classList.add("_error");
}

function formRemoveError(input) {
    input.classList.remove("_error");
}

// Проверка имени
function firstNameTest(input) {
    return !/^[А-ЯЁA-Z]{1}[а-яёa-z]{2,29}$/.test(input.value);
}

// Проверка телефона
function phoneTest(input) {
    return !/^((\+7|8))\d{9,14}$/.test(input.value);
}

// Проверка пароля
function passwordTest(input) {
    return !/(?=.*[A-Z])(?=.*[0-9])^[0-9a-zA-Z]{8,40}$/.test(input.value) ;
}

// Проверка паролей на совпадение
function repeatPasswordTest(input){
    return !(input.value === document.querySelector("._password").value);
}