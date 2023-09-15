// // nav.style.gap = "100px"
// console.log("Gap:", nav.style.gap)

// const style = getComputedStyle(nav)
// console.log("Gap:", style.gap);

const scrollingElement = document.scrollingElement;
const scrollTrigger = 500;

const nav = document.querySelector("nav");

window.onscroll = () => {
  // console.log("Scrolling....", scrollingElement.scrollTop, scrollingElement.scrollHeight)
  const percentageScrolled =
    scrollingElement.scrollTop / scrollingElement.scrollHeight;

  // once we scrolled 30 percent into the document
  // animate the navbar 
  // if (percentageScrolled >= 0.3 && !nav.classList.contains("hidden")) {
  if (percentageScrolled >= 0.3) {
    // hide nav by setting class
    nav.classList.add("hidden")
    
    // alternative: change styles directly on style object individually
    // nav.style.display = "none"
    // nav.style.opacity = 0;
    // nav.style.transform = "translateY(-100px)";
  }
  // remove hidden class when we are ABOVE 30%
  // else if (percentageScrolled < 0.3 && nav.classList.contains("hidden")) {
  else {
    // show nav by removing class    
    nav.classList.remove("hidden");
  }

};
