# BeatWise Rental Website

## Table of contents

- [Overview](#overview)
  - [Features](#features)
  - [Screenshot](#screenshot)
  - [Links](#links)
  - [Tech Stack](#tech-stack)
- [My process](#my-process)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Resources](#resources)

## Overview

BeatWise Rentals is a fictional DJ and event equipment rental company. This site was designed to showcase dynamic filtering, accessibility best practices, and JavaScript DOM manipulation.

### Features

Users should be able to:

- Learn about the BeatWise company and its offerings
- Navigate seamlessly with a fixed, responsive navbar
- Use a mobile hamburger menu for quick access
- Filter equipment by category using custom JavaScript logic
- Read equipment descriptions with a "Learn More" toggle effect
- Submit inquiries using a clean, styled contact form
- Access an interactive FAQ accordion with only one expanded answer at a time
- Navigate back to top using a smooth scrolling scroll-up button

### Screenshot

![](./screenshot.png)

### Links

- Solution URL: https://github.com/Jud1th1/rentals-website
- Live Site URL: https://beatwiserentals.netlify.app/

### Tech Stack

- HTML5 (Semantic structure)
- CSS3 (Flexbox & Grid, media queries, custom properties)
- Vanilla JavaScript (ES6+, modular functions)
- Responsive Design (Mobile-first approach)
- Font Awesome (Accessible iconography)

## My process

- This project began as a FreeCodeCamp tutorial on sliders and grew into a fully responsive, branded experience. The original inspiration used Element.getBoundingClientRect() for dynamic height and window.pageYOffset for scroll detection. From there:
  - Added a dynamic footer date using getFullYear()
  - Created a responsive navigation bar with scroll-based behavior and hamburger toggle
  - Built a fully filterable equipment section using an array of objects and Array.filter() / Array.map()
  - Used event delegation to handle dynamically generated "Learn More" toggle buttons
  - Designed and styled a FAQ accordion using classList.toggle() and DOM traversal
  - Updated all layout styling with a custom purple and gold color palette to match branding
  - Ensured responsive and accessible design across mobile and desktop

### What I learned

- How to structure clean, modular JavaScript for UI components
- Styling hover, focus, and active states for accessibility
- Dynamic rendering with .map() and filtering with .filter()
- Importance of mobile-first design and layout debugging
- Customizing iconography and scroll behavior for better UX
- Using DOM methods to handle real-time interactivity and animations
- JS inline styles can override external CSS — always inspect those overrides!

### Continued development

- In the future, I’d love to:
  - Add local storage or Firebase for user form submissions
  - Implement real-time equipment availability status
  - Add unit tests for DOM-based functions
  - Further enhance accessibility (e.g., skip links, keyboard-only nav)
  - Polish SEO metadata and add Open Graph tags

### Useful resources

- [https://www.youtube.com/watch?v=3PHXvlpOkf4&t=423s] FreeCodeCamp Slider/Menu/FAQ Tutorial
- [https://developer.mozilla.org/en-US/] MDN Web Docs
- [https://css-tricks.com/] CSS Tricks
