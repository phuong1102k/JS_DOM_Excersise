const body = document.querySelector("body");
const range = document.querySelector(".range");
const rangeBar = document.querySelector(".range-bar");

function setRangeBar(percent) {
    rangeBar.style.width = `${percent}%`
    rangeBar.querySelector("span").innerText = `${percent}%`;
    body.style.backgroundColor = `rgba(0, 0, 0, ${percent / 100})`;
}



range.onmousemove = function (e) {
	const process = e.pageX - this.offsetLeft
	let percent = (process / this.offsetWidth) * 100

	percent = Math.ceil(percent)
	setRangeBar(percent)
}



// range.addEventListener('mousemove', function (e) {
// 	const process = e.pageX - this.offsetLeft
// 	let percent = (process / this.offsetWidth) * 100

// 	percent = Math.ceil(percent)
// 	setRangeBar(percent)
// }) 