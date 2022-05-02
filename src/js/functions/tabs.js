const $ = (selector, query = 'single') => {
  let element
  if (query === 'single') element = document.querySelector(selector)
  if (query === 'all') element = document.querySelectorAll(selector)

  return element
}


export default function tabs({buttons, container}) {
  const btns = $(buttons, 'all')
  btns.forEach(btn => {
    btn.addEventListener('click', e => {
      const controls = btn.parentNode
      const tabs = controls.parentNode
      const tabsContainer = tabs.querySelector(container)
      
      const childrenList = Array.from(controls.children)
      const index = childrenList.indexOf(btn)
     
      tabsContainer.style.transform = `translateX(-${index * 100}%)`

      controls.querySelectorAll('button.active')
        .forEach(activeBtn => activeBtn.classList.remove('active'))
      
      btn.classList.add('active')
    })
  })
}
