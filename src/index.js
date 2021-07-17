const globalNav = document.querySelectorAll('a[href^="#"]');
for(let i = 0; i < globalNav.length; i++) {
  const globalNavItem = globalNav[i];
  globalNavItem.addEventListener('click', function(e) {
    e.preventDefault();
    const headerHeight = document.getElementById('js-header').clientHeight; 
    const href = globalNavItem.getAttribute('href');
    if(href == "#" || href == "") {
      'html';
      window.scrollTo( {
        top: 0,
        behavior: "smooth"
      });
    } else {
      const sectionName = href.replace('#',"");
      const sectionId = document.getElementById(sectionName);
      const rect = sectionId.getBoundingClientRect().top;
      const offset = window.pageYOffset;
      const target = rect + offset - headerHeight;
      window.scrollTo( {
        top: target,
        behavior: "smooth"
      });
    }
  });
}
window.addEventListener('scroll', function() {
  const topUp = document.getElementById('topup');
  const scroll = window.pageYOffset;
  if (scroll > 100) {
    topUp.classList.add('is-show');
  } else {
    topUp.classList.remove('is-show');
  }
});
