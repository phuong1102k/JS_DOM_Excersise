const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const tabs = $$(".tab-item");
// console.log(tabs);
const panes = $$(".tab-pane")
// console.log(panes);

const tabActive = $(".tab-item.active");
const line = $(".line");


line.style.left = tabActive.offsetLeft +"px"

tabs.forEach(
  (tab, idx) => 
    (tab.onclick = function(e) {
      const pane = panes[idx];

      $(".tab-item.active").classList.remove("active");
      $(".tab-pane.active").classList.remove("active");

    line.style.left = this.offsetLeft + "px"
    
    
    // log(e.target);
      e.target.classList.add("active");
      pane.classList.add("active");
  })
);

// tabs.forEach(
//   (tab, index) =>
//     (tab.onclick = function () {
//       const pane = panes[index]; //lấy ra nội dung pane ứng với mỗi tab

//       $('.tab-item.active').classList.remove('active'); //xóa class active khỏi tab đang active
//       $('.tab-pane.active').classList.remove('active'); //xóa class active khỏi pane đang active

//       this.classList.add('active'); //add class active vào el được click
//       pane.classList.add('active'); //add class active vào el pane tương tứng với tab khi click
//     })
// );