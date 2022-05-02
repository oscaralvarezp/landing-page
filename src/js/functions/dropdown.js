const $ = (selector, query = "single") => {
  let element;
  if (query === "single") element = document.querySelector(selector);
  if (query === "all") element = document.querySelectorAll(selector);

  return element;
}

function changeHeight(element) {
  let height = 0;
  let items = element.nextElementSibling;

  if (items.clientHeight === 0) {
    height = items.scrollHeight;
  }

  items.style.height = `${height}px`;
}

export default function dropdown({ dropdownButtons }) {
  const buttons = $(dropdownButtons, 'all')
  buttons.forEach(button => {
    button.addEventListener('click', (e) => {
      const btnIcon = button.querySelector('.bx')
      changeHeight(button)
      btnIcon.classList.toggle('rotate')
    })
  })
  
}
