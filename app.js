// ********** set date ************
const date = document.getElementById('date');
date.innerHTML = new Date().getFullYear();

// ********** Navigation Toggle ************
const navToggle = document.querySelector(".nav-toggle");
const linksContainer = document.querySelector(".links-container");
const links = document.querySelector(".links");

navToggle.addEventListener("click", function () {
   const containerHeight = linksContainer.getBoundingClientRect().height; //this is parent it will be default height of 0
   const linksHeight = links.getBoundingClientRect().height; //this will get our link height 
   
    if (containerHeight === 0) {
    linksContainer.style.height = `${linksHeight}px`;
    } 
    else{ //if the links are already open
        linksContainer.style.height = 0; 
    }
});

// ********** fixed navbar ************
const navbar = document.getElementById("nav");
const topLink = document.querySelector(".top-link");

window.addEventListener("scroll", function () {
    const scrollHeight = window.pageYOffset;
    const navHeight = navbar.getBoundingClientRect().height; 
    
    if (scrollHeight > navHeight) {
      navbar.classList.add("fixed-nav"); //as we scroll down, the fixed nav will stay
    } else {
      navbar.classList.remove("fixed-nav"); //removes the fixed nav
    }
    // setup back to top link
    //mobile
    topLink.classList.toggle("show-link", scrollHeight > 500);
});


// ********** smooth scroll for nav links************
const scrollLinks = document.querySelectorAll(".scroll-link");

scrollLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
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
      position = position - navHeight;  
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

//***************** Menu *********************/
const menu = [
    {
      id: 1,
      title: "DJ Mixer",
      category: "Mixers",
      rating: "★★★★★",
      price: 200,
      img: "./assets/images/mixer1.jpg",
      desc: `This professional-grade DJ mixer is a powerful and versatile tool for any DJ or music producer. With multiple channels, built-in effects, and precise control over EQ and volume, this mixer allows you to create dynamic and engaging mixes that keep the crowd dancing all night long.`,
    },
    {
      id: 2,
      title: "USB Turntable",
      category: "Turntables",
      rating: "★★★★",
      price: 40,
      img: "./assets/images/turntable2.jpg",
      desc: `With a built-in USB interface, these turntables allow users to digitize their vinyl records by connecting the turntable directly to a computer.`,
    },
    {
        id: 3,
        title: "Direct Drive Turntable",
        category: "Turntables",
        rating: "★★★★★",
        price: 60,
        img: "./assets/images/turntable3.jpg",
        desc: `The most popular type of turntables among DJs. These turntables have a motor that is directly connected to the platter, providing fast start-up times and stable playback speed. `,
      },
      {
        id: 4,
        title: "Analog Mixer",
        category: "Mixers",
        rating: "★★★",
        price: 160,
        img: "./assets/images/mixer2.jpg",
        desc: `This classic analog mixer is an essential tool for DJs who value the warm, vintage sound of analog audio processing. With its simple and intuitive design, it allows you to control multiple audio sources and create dynamic and engaging mixes that showcase your skills and creativity.`,
      },
      {
        id: 5,
        title: "Belt Drive Turntable",
        category: "Turntables",
        rating: "★★★★",
        price: 20,
        img: "./assets/images/turntable1.jpg",
        desc: `At home disc jockey? The belt drive turntables have a motor that drives the platter through a rubber belt, which provides smoother playback and less motor noise. Perfect for home listening and hi-fi applications. `,
      },
      {
        id: 6,
        title: "Audio Interface Mixer",
        category: "Mixers",
        rating: "★★★★★",
        price: 140,
        img: "./assets/images/mixer3.jpg",
        desc: `This compact audio interface mixer is a must-have tool for DJs and music producers. With multiple inputs and intuitive software control, it allows you to create professional-sounding mixes and recordings on your computer or laptop. Also perfect for recording a podcast.`,
      },
      {
        id: 7,
        title: "Powered Speakers",
        category: "Speakers&Amp",
        rating: "★★★★★",
        price: 40,
        img: "./assets/images/speaker2.jpg",
        desc: `This powered speaker is a must-have for any DJ or musician who needs to amplify their sound. With its built-in power amplifier, it eliminates the need for external amplifiers and reduces setup time and complexity. Featuring high-quality sound and a durable design, this powered speaker is an essential tool for any live performance or event.`,
      },
      {
        id: 8,
        title: "Stereo Amplifiers",
        category: "Speakers&Amp",
        rating: "★★★",
        price: 125,
        img: "./assets/images/amp1.jpg",
        desc: ` Whether you're listening to your favorite album, streaming music, or watching a movie, this powerful stereo amplifier enhances your listening experience with high-quality sound and sleek design..`,
      },
      {
        id: 9,
        title: "Multichannel Amplifiers",
        category: "Speakers&Amp",
        rating: "★★★★",
        price: 140,
        img: "./assets/images/amp.jpg",
        desc: `This multichannel amplifier is a powerful tool for live sound reinforcement. With multiple channels and high-quality sound, it allows you to create professional-sounding mixes that sound great in any venue.`,
      },
      {
        id: 10,
        title: "Cables",
        category: "Accessories",
        rating: "★★★★★",
        price: 0,
        img: "./assets/images/cables.jpg",
        desc: `Audio cables are an essential component of any DJ or musician's setup. They provide a reliable and high-quality connection between audio equipment, allowing you to transmit sound signals with minimal interference or distortion.`,
      },
      {
        id: 11,
        title: "Headphones",
        category: "Accessories",
        rating: "★★★★",
        price: 30,
        img: "./assets/images/headphones1.jpg",
        desc: `With various types and styles available, headphones provide a reliable and comfortable way to hear your mixes in detail. From noise-cancelling models, to wireless options for freedom of movement, headphones are an essential tool for sound quality and accuracy.`,
      },
      {
        id: 12,
        title: "Cartridges and Styluses",
        category: "Accessories",
        rating: "★★★★",
        price: 10,
        img: "./assets/images/cartridges.jpg",
        desc: `Cartridges and styluses are essential components of any DJ's turntable setup. With various types and styles available, cartridges and styluses allow you to customize your sound and achieve optimal performance from your turntable.`,
      },
      {
        id: 13,
        title: "Cases and Bags",
        category: "Accessories",
        rating: "★★★★",
        price: 10,
        img: "./assets/images/cases.jpg",
        desc: `An essential tool for any musician or DJ who needs to move their equipment from one location to another. From sturdy hard cases to convenient backpacks, we have cases and bags to keep the equipment safe during transport.`,
      },
      {
        id: 14,
        title: "Microphones",
        category: "Accessories",
        rating: "★★★★",
        price: 15,
        img: "./assets/images/microphone.jpg",
        desc: `From dynamic microphones for live performances to condenser microphones for recording in a studio, we provide microphones as an essential tool for quality and clarity.`,
      },
      {
        id: 15,
        title: "Powered Mixer",
        category: "Mixers",
        rating: "★★★★★",
        price: 180,
        img: "./assets/images/mixer4.jpg",
        desc: `This powered mixer is a powerful all-in-one solution for live sound reinforcement. With built-in power amplifier, multiple channels, and built-in effects, it creates professional-sounding mixes that sound great in any venue.`,
      },
  ];
  

  const sectionCenter = document.querySelector(".section-center");
  const btnContainer = document.querySelector(".btn-container");
  // display all items when page loads
  window.addEventListener("DOMContentLoaded", function () {
    displayMenuItems(menu);
    displayMenuButtons();
  });
  
  function displayMenuItems(menuItems) {
    let displayMenu = menuItems.map(function (item) { 
      return ` 
      <article class="menu-item menu-card">
        <img src=${item.img} alt=${item.title} class="photo" />
        <div class="menu-content">
          <h4 class="menu-title">${item.title}</h4>
          <div class="stars">${item.rating}</div> 
          <p class="price">$${item.price}</p>
          <p class="item-text">${item.desc}</p>
          <button class="toggle-btn">Learn More+</button>
        </div>
      </article>`;
  });
    displayMenu = displayMenu.join("");
  
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
          displayMenuItems(menu);
        } else {
          displayMenuItems(menuCategory);
        }
      });
    });
  }
  
  sectionCenter.addEventListener('click', function (e) {
    if (e.target.classList.contains('toggle-btn')) {
      const text = e.target.previousElementSibling;
      text.classList.toggle('show');
      e.target.textContent = text.classList.contains('show') ? 'Show Less' : 'Learn More';
    }
  });
  

const questions = document.querySelectorAll(".question");
questions.forEach(function(question){
  
    const btn = question.querySelector(".question-btn");
   
    btn.addEventListener("click", function(){

        questions.forEach(function(item){
            if(item !== question){
                item.classList.remove("show-text");
            }
        });
        question.classList.toggle("show-text");
    })

});

