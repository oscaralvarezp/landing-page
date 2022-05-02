import dropdown from "./functions/dropdown.js";
import hamburgerMenu from "./functions/hamburgerMenu.js"
import tabs from "./functions/tabs.js";

const d = document

d.addEventListener('DOMContentLoaded', () => {
  hamburgerMenu({
    panelBtn: ".hamburger-btn",
    panel: ".navbar-links",
    menuLink: ".nav-link",
  });

  tabs({
    buttons: '.controls button',
    container: '.tabs-container'
  })

  dropdown({
    dropdownButtons: '.faq-question-btn'
  })
})