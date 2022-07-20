const mySplide = new Splide(".splide", {
  type: "loop",
  pagination: false,
});
mySplide.mount();

const splide = new Splide("#recommended-carousel", {
  perPage: 4,
  width: "91.5%",
  drag: "free",
  snap: true,
  pagination: false,
});

const bar = splide.root.querySelector(".my-slider-progress-bar");

// Update the bar width:
splide.on("mounted move", function () {
  const end = splide.Components.Controller.getEnd() + 1;
  if (bar) {
    bar.style.width = String((100 * (splide.index + 1)) / end) + "%";
  }
});

splide.mount();

const openSearch = () => {
  const searchBeforeClick = document.querySelector(".search-before");
  const searchAfterClick = document.querySelector(".search-after");
  searchBeforeClick.addEventListener("click", (e) => {
    searchBeforeClick.classList.add("hidden");
    searchAfterClick.classList.remove("hidden");
    searchAfterClick.querySelector("#search-input").focus();
  });

  searchAfterClick.addEventListener("click", (e) => {
    if (e.target.getAttribute("class").includes("close")) {
      searchBeforeClick.classList.remove("hidden");
      searchAfterClick.classList.add("hidden");
    }
  });
};
document.addEventListener("DOMContentLoaded", function () {
  openSearch();
});

const centerOfAttentionEl = document.querySelectorAll(".center-attention-link");
const centerOfAttentionBtns = document.querySelectorAll(
  ".center-attention-buynow"
);

centerOfAttentionEl.forEach((el) => {
  el.addEventListener("mouseenter", (e) => {
    centerOfAttentionBtns.forEach((btn, i) => {
      if (e.target.dataset.index === `${i + 1}`) {
        centerOfAttentionBtns[i].style.textDecoration = "underline";
      }
    });
  });
});

centerOfAttentionEl.forEach((el) => {
  el.addEventListener("mouseleave", (e) => {
    centerOfAttentionBtns.forEach((btn) => {
      btn.style.textDecoration = "";
    });
  });
});
