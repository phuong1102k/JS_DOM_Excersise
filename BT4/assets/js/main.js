const searchBtn = document.querySelector(".search-btn");
const searchBox = document.querySelector(".search-box");

searchBtn.onclick = function () {
    if (searchBox.classList.contains("open")) {
        searchBox.classList.remove("open");
    } else {
        searchBox.classList.add("open");
    }
}