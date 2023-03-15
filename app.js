const input = document.querySelector("#email");
const check = document.querySelector(".check_email");
const result = document.querySelector("#result");


const regExp = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9_.+-]+\.(com|ru)$/


check.addEventListener("click", () => {
    console.log(regExp.test(input.value));
    if (regExp.test(input.value)) {
        result.innerText = "succes";
        result.style.color = "green";
    } else {
        result.innerText = "its bad";
        result.style.color = "red";
    }
});

const password = document.querySelector("#password");
const check_pass = document.querySelector(".check_password");
const text = document.querySelector(".pass_text");
const see = document.querySelector('.see')

const exp = /^[a-zA-Z0-9]{8}$/

check_pass.addEventListener("click", () => {
    console.log(exp.test(password.value));
    if (exp.test(password.value)) {
        text.innerText = "good";
        text.style.color = "green";
    } else {
        text.innerText = "error";
        text.style.color = "red";
    }
});

see.onclick = () => {
    password.type = 'text'
}

//2
const block = document.querySelector('.sm')

let p = 0;

const recur = () => {
    if (p < 450) {
        p++
        block.style.left = `${p}px`
        setTimeout(recur, 1)
    }
}

recur()