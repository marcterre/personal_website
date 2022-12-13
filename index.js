const addEventListenerAboutMe = document.querySelector(
  '[data-js="header-navigation__about-me-event-listener"]'
);
const addEventListenerMyProjects = document.querySelector(
  '[data-js="header-navigation__my-projects-event-listener"]'
);
const addEventListenerContact = document.querySelector(
  '[data-js="header-navigation__contact-event-listener"]'
);
const addEventListenerLinks = document.querySelector(
  '[data-js="header-navigation__links-event-listener"]'
);

addEventListenerAboutMe.addEventListener("click", () => {
  console.log('You clicked on "about me"!');
});

addEventListenerMyProjects.addEventListener("click", () => {
  console.log('You clicked on "my projects"!');
});

addEventListenerContact.addEventListener("click", () => {
  console.log('You clicked on "contact me"!');
});

addEventListenerLinks.addEventListener("click", () => {
  console.log('You clicked on "links"!');
});
