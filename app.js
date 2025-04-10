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

//********************************* Menu ***********/
const menu = [
    {
      id: 1,
      title: "DJ Mixer",
      category: "Mixers",
      price: 200,
      img: "./assets/mixer1.jpg",
      desc: `This professional-grade DJ mixer is a powerful and versatile tool for any DJ or music producer. With multiple channels, built-in effects, and precise control over EQ and volume, this mixer allows you to create dynamic and engaging mixes that keep the crowd dancing all night long.`,
    },
    {
      id: 2,
      title: "USB Turntable",
      category: "Turntables",
      price: 40,
      img: "./assets/turntable2.jpg",
      desc: `With a built-in USB interface, these turntables allow users to digitize their vinyl records by connecting the turntable directly to a computer.`,
    },
    {
        id: 3,
        title: "Direct Drive Turntable",
        category: "Turntables",
        price: 60,
        img: "./assets/turntable3.jpg",
        desc: `The most popular type of turntables among DJs. These turntables have a motor that is directly connected to the platter, providing fast start-up times and stable playback speed. `,
      },
      {
        id: 4,
        title: "Analog Mixer",
        category: "Mixers",
        price: 160,
        img: "./assets/mixer2.jpg",
        desc: `This classic analog mixer is an essential tool for DJs who value the warm, vintage sound of analog audio processing. With its simple and intuitive design, it allows you to control multiple audio sources and create dynamic and engaging mixes that showcase your skills and creativity.`,
      },
      {
        id: 5,
        title: "Belt Drive Turntable",
        category: "Turntables",
        price: 20,
        img: "./assets/turntable1.jpg",
        desc: `At home disc jockey? The belt drive turntables have a motor that drives the platter through a rubber belt, which provides smoother playback and less motor noise. Perfect for home listening and hi-fi applications. `,
      },
      {
        id: 6,
        title: "Audio Interface Mixer",
        category: "Mixers",
        price: 140,
        img: "./assets/mixer3.jpg",
        desc: `This compact audio interface mixer is a must-have tool for DJs and music producers. With multiple inputs and intuitive software control, it allows you to create professional-sounding mixes and recordings on your computer or laptop. Also perfect for recording a podcast.`,
      },
      {
        id: 7,
        title: "Powered Speakers",
        category: "Speakers&Amp",
        price: 40,
        img: "./assets/speaker2.jpg",
        desc: `This powered speaker is a must-have for any DJ or musician who needs to amplify their sound. With its built-in power amplifier, it eliminates the need for external amplifiers and reduces setup time and complexity. Featuring high-quality sound and a durable design, this powered speaker is an essential tool for any live performance or event.`,
      },
      {
        id: 8,
        title: "Stereo Amplifiers",
        category: "Speakers&Amp",
        price: 125,
        img: "./assets/amp1.jpg",
        desc: ` Whether you're listening to your favorite album, streaming music, or watching a movie, this powerful stereo amplifier enhances your listening experience with high-quality sound and sleek design..`,
      },
      {
        id: 9,
        title: "Multichannel Amplifiers",
        category: "Speakers&Amp",
        price: 140,
        img: "./assets/amp.jpg",
        desc: `This multichannel amplifier is a powerful tool for live sound reinforcement. With multiple channels and high-quality sound, it allows you to create professional-sounding mixes that sound great in any venue.`,
      },
      {
        id: 10,
        title: "Cables",
        category: "Accessories",
        price: 0,
        img: "./assets/cables.jpg",
        desc: `Audio cables are an essential component of any DJ or musician's setup. They provide a reliable and high-quality connection between audio equipment, allowing you to transmit sound signals with minimal interference or distortion.`,
      },
      {
        id: 11,
        title: "Headphones",
        category: "Accessories",
        price: 30,
        img: "./assets/headphones1.jpg",
        desc: `With various types and styles available, headphones provide a reliable and comfortable way to hear your mixes in detail. From noise-cancelling models, to wireless options for freedom of movement, headphones are an essential tool for sound quality and accuracy.`,
      },
      {
        id: 12,
        title: "Cartridges and Styluses",
        category: "Accessories",
        price: 10,
        img: "./assets/cartridges.jpg",
        desc: `Cartridges and styluses are essential components of any DJ's turntable setup. With various types and styles available, cartridges and styluses allow you to customize your sound and achieve optimal performance from your turntable.`,
      },
      {
        id: 13,
        title: "Cases and Bags",
        category: "Accessories",
        price: 10,
        img: "./assets/cases.jpg",
        desc: `An essential tool for any musician or DJ who needs to move their equipment from one location to another. From sturdy hard cases to convenient backpacks, we have cases and bags to keep the equipment safe during transport.`,
      },
      {
        id: 14,
        title: "Microphones",
        category: "Accessories",
        price: 15,
        img: "./assets/microphone.jpg",
        desc: `From dynamic microphones for live performances to condenser microphones for recording in a studio, we provide microphones as an essential tool for quality and clarity.`,
      },
      {
        id: 15,
        title: "Powered Mixer",
        category: "Mixers",
        price: 180,
        img: "./assets/mixer4.jpg",
        desc: `This powered mixer is a powerful all-in-one solution for live sound reinforcement. With built-in power amplifier, multiple channels, and built-in effects, it creates professional-sounding mixes that sound great in any venue.`,
      },
  ];
  // get parent element
  const sectionCenter = document.querySelector(".section-center");
  const btnContainer = document.querySelector(".btn-container");
  // display all items when page loads
  window.addEventListener("DOMContentLoaded", function () {
    diplayMenuItems(menu);
    displayMenuButtons();
  });
  
  function diplayMenuItems(menuItems) {
    let displayMenu = menuItems.map(function (item) {
      // console.log(item);
  
      return `
      <article class="menu-item">
        <div class="menu-card">
          <img src="${item.img}" alt="${item.title}" class="photo" />
          <div class="menu-content">
            <div class="menu-header">
              <h4 class="menu-title">${item.title}</h4>
              <h4 class="price">$${item.price}</h4>
            </div>
            <p class="item-text">${item.desc}</p>
          </div>
        </div>
      </article>
    `;
    });
    displayMenu = displayMenu.join("");
    // console.log(displayMenu);
  
    sectionCenter.innerHTML = displayMenu;
  }
  function displayMenuButtons() {
    const categories = menu.reduce(
      function (values, item) {
        if (!values.includes(item.category)) {
          values.push(item.category);
        }
        return values;
      },
      ["all"]
    );
    const categoryBtns = categories
      .map(function (category) {
        return `<button type="button" class="filter-btn" data-id=${category}>
            ${category}
          </button>`;
      })
      .join("");
  
    btnContainer.innerHTML = categoryBtns;
    const filterBtns = btnContainer.querySelectorAll(".filter-btn");
    console.log(filterBtns);
  
    filterBtns.forEach(function (btn) {
      btn.addEventListener("click", function (e) {
        // console.log(e.currentTarget.dataset);
        const category = e.currentTarget.dataset.id;
        const menuCategory = menu.filter(function (menuItem) {
          // console.log(menuItem.category);
          if (menuItem.category === category) {
            return menuItem;
          }
        });
        if (category === "all") {
          diplayMenuItems(menu);
        } else {
          diplayMenuItems(menuCategory);
        }
      });
    });
  }
  



  //********************************* Questions ***********/
  //using selectors inside the element
//traversing the dom


//1. Traversing the dom
//select all the buttons
    //const btns = document.querySelectorAll(".question-btn");
//add event listener
//also because btn is a parameter you have to add it in the function then access the event function (e)
    //btns.forEach(function(btn){
        //btn.addEventListener("click", function(e){
            //const question = e.currentTarget.parentElement.parentElement //we are referencing the parent of the question and question title
            //question.classList.toggle("show-text");
        //});
    //});
//traverse the dom (moving up and down the dom tree)


//2.Use Selectors inside the Element 
//select questions NOT button
const questions = document.querySelectorAll(".question");
//We want to loop over that 
questions.forEach(function(question){
    //console.log(question); //for testing
    //select button from within question NOT the document or it will select ALL
    const btn = question.querySelector(".question-btn");
    //event listener
    btn.addEventListener("click", function(){

        questions.forEach(function(item){
            if(item !== question){
                item.classList.remove("show-text");
            }
        });
        //use question: that is the name of the parameter it will reference the button within the article
        question.classList.toggle("show-text");
    })

});

//add functionality that when another question is open, it closes the other by default do this by selecting question again in the event listener
    //questions.forEach(function(item){ //item is referencing the SAME thing as question, we just changed the name
        //if(item !== question){ //if item does not match article button that we are clicking then remove that text 
           //item.classList.remove("show-text");
        //} 
    //});