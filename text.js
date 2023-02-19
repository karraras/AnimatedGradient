let back = document.querySelector(".back");
let present = document.querySelector(".present span");
let co = 0;
present.addEventListener("click", (ele) => {
  back.classList.toggle("rotate");

  let count = setInterval(() => {
    if (back.classList.contains("rotate")) {
      co = co + 1;
      ele.target.textContent = co + "%";
      if (co >= 100) {
        clearInterval(count);
        co = 0;
      }
    } else {
      clearInterval(count);
    }
  }, 100);
});
