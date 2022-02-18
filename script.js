var navDivEl, demoBtnEl;

var setHoverClass = e => {
    e.preventDefault()
    if(e.target.classList.contains('hoverable'))    {
        e.target.classList.add('hover')
    }   
}

var removeHoverClass = e => {
    e.preventDefault()
    console.log(e.target.id)
    if(e.target.classList.contains('hoverable'))    {
        e.target.classList.remove('hover')
    }
}

var setEventListeners = () => {
    navDivEl.addEventListener('mouseover', setHoverClass)
    demoBtnEl.addEventListener('mouseover', setHoverClass)
    navDivEl.addEventListener('mouseout', removeHoverClass)
    demoBtnEl.addEventListener('mouseout', removeHoverClass)
}

var getElements = () => {
    navDivEl = document.getElementById('navDiv')
    demoBtnEl = document.getElementById('demoBtn')
}

var init = () => {
    getElements()
    setEventListeners()
}

init()