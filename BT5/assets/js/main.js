let listImg = document.querySelectorAll('.list-img div');
let next = document.querySelector('.next');
let prev = document.querySelector('.prev');
let imgWrap = document.querySelector('.img-wrap img');

let currentIndex = 0;

setCurrent(currentIndex)

function setCurrent(index) {
    currentIndex = index;
    imgWrap.src = listImg[currentIndex].querySelector('img').src;

	// remove all active img
	listImg.forEach((item) => {
        item.classList.remove('active');
	})

	// set active
    listImg[currentIndex].classList.add('active');
}

listImg.forEach((img, index) => {
	img.onclick = function() {
        setCurrent(index);
	}
})

next.addEventListener('click', () => {
    if (currentIndex == listImg.length - 1) {
        currentIndex = 0;
    } else currentIndex++;

    setCurrent(currentIndex);
})

prev.addEventListener('click', () => {
    if (currentIndex == 0) {
        currentIndex = listImg.length - 1;
    } else currentIndex--;

    setCurrent(currentIndex);
})