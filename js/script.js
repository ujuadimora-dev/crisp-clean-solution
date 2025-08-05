/* header bg reveal */
const headerBg = ()=> {
    const header = document.querySelector(".js-header");
    window.addEventListener("scroll", function() {
        if(this.scrollY > 0){
            header.classList.add("bg-reveal");
        }
        else{
            header.classList.remove("bg-reveal");
        }
    });
}
headerBg();

// JavaScript to toggle the nav menu
document.addEventListener("DOMContentLoaded", () => {
  const toggler = document.querySelector(".nav-toggler");
  const nav = document.querySelector(".nav");

  if (toggler && nav) {
    toggler.addEventListener("click", () => {
      nav.classList.toggle("show");
    });
  }
});
