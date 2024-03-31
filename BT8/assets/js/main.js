const $ = document.querySelector.bind(document);

const modal = $(".modal");
const openModal = $(".open-modal");
const iconCloseModal = $(".modal-header i");
const btnCloseModal = $(".modal-footer button");

function toggleModal() {
    modal.classList.toggle("hide");
}

openModal.addEventListener("click", toggleModal);
iconCloseModal.addEventListener("click", toggleModal);
btnCloseModal.addEventListener("click", toggleModal);

modal.onclick = function (e) {
    if (e.target == e.currentTarget) {
        toggleModal();
    }
}