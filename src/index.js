const globalNav = document.getElementById("js-global-nav-list");
globalNav.addEventListener("click", function (e) {
  e.preventDefault();
  const globalNavItem = e.target;
  const headerHeight = document.getElementById("js-header").clientHeight;
  const href = globalNavItem.getAttribute("href");
  const sectionName = href.replace("#", "");
  const sectionId = document.getElementById(sectionName);
  const rect = sectionId.getBoundingClientRect().top;
  const offset = window.pageYOffset;
  const target = rect + offset - headerHeight;
  window.scrollTo({
    top: target,
    behavior: "smooth"
  });
});

const topUp = document.getElementById("topup");
topUp.addEventListener("click", function (e) {
  e.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

const callback = (entries) => {
  entries.forEach((entry) => {
    if (entry.boundingClientRect.top < 0) {
      topUp.classList.remove("is-show");
      if (entry.isIntersecting) {
        topUp.classList.remove("is-show");
      } else {
        topUp.classList.add("is-show");
      }
    }
  });
};
const observer = new IntersectionObserver(callback);
observer.observe(document.getElementById("section2"));
