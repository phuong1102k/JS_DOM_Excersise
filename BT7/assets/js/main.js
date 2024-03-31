const $ = document.querySelector.bind(document);
// const $$ = document.querySelectorAll.bind(document);
const alert = $(".alert");
const box = $(".box");
const result = $(".result");

const eKey = $(".card.key p:last-child");
const eLocation = $(".card.location p:last-child");
const eWhich = $(".card.which p:last-child");
const eCode = $(".card.code p:last-child");


document.onkeydown = function (e) {

    let keyName = e.code === 32 ? "Space" : e.key;
    eKey.innerText = keyName;
    eLocation.innerText = e.location;
    result.innerText = e.which;
    eWhich.innerText = e.which;
    eCode.innerText = e.code;

    alert.classList.add('hide');
    box.classList.remove("hide");
}

