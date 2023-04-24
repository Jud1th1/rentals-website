// Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
// pageYOffset is a read - only window property that returns the number of pixels the document has been scrolled vertically.
// slice extracts a section of a string without modifying original string
//offsetTop - A Number, representing the top position of the element, in pixels

// ********** set date ************
const date = document.getElementById('date');
date.innerHTML = new Date().getFullYear();

// ********** close links ************
const navToggle = document.querySelector(".nav-toggle");
const linksContainer = document.querySelector(".links-container");
const links = document.querySelector(".links");

navToggle.addEventListener("click", function () {
   // linksContainer.classList.toggle("show-links"); - this method is not dynamic, it has a fixed height
   const containerHeight = linksContainer.getBoundingClientRect().height; //this is parent it will be default height of 0
   const linksHeight = links.getBoundingClientRect().height; //this will get our link height (console log and try removing and adding more links to see how it changes)
   
    if (containerHeight === 0) {
    linksContainer.style.height = `${linksHeight}px`;
    } 
    else{ //if the links are already open
        linksContainer.style.height = 0; //we must override this in css for bigger screens
    }
});

// ********** fixed navbar ************
const navbar = document.getElementById("nav");
const topLink = document.querySelector(".top-link");

window.addEventListener("scroll", function () {
    const scrollHeight = window.pageYOffset;
    const navHeight = navbar.getBoundingClientRect().height; //get height of navbar
    
    if (scrollHeight > navHeight) {
      navbar.classList.add("fixed-nav"); //as we scroll down, the fixed nav will stay
    } else {
      navbar.classList.remove("fixed-nav"); //removes the fixed nav
    }
    // setup back to top link
    //mobile
    if (scrollHeight > 500) {
      console.log("helo");
  
      topLink.classList.add("show-link");
    } else {
      topLink.classList.remove("show-link");
    }
  });
  

// ********** smooth scroll ************
// select links
const scrollLinks = document.querySelectorAll(".scroll-link");

scrollLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
        // prevent default
        e.preventDefault();
        // navigate to specific spot
        const id = e.currentTarget.getAttribute("href").slice(1);
        const element = document.getElementById(id);
        //calculate the heights
        const navHeight = navbar.getBoundingClientRect().height;
        const containerHeight = linksContainer.getBoundingClientRect().height;
        const fixedNav = navbar.classList.contains("fixed-nav");
        let position = element.offsetTop - navHeight;

    if (!fixedNav) {
      position = position - navHeight; //now we can see the top of the section 
    }
    if (navHeight > 82) {
      position = position + containerHeight;
    }

    window.scrollTo({
      left: 0,
      top: position,
    });
    // close the links
    linksContainer.style.height = 0;
  });
});