var navDivEl, demoBtnEl, navPopupMEl, burgerMEl, closeMEl;

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
var burgerHandler = e => {
    e.preventDefault()
    if(e.target.id === 'burgerM')   {
        console.log(e.target.id)
        burgerMEl.classList.add('clicked')
        navPopupMEl.classList.add('clicked')
        closeMEl.classList.remove('clicked')
    }
}

var closeHandler = e => {
    e.preventDefault()
    if(e.target.id === 'closeM')   {
        console.log(e.target.id)
        burgerMEl.classList.remove('clicked')
        navPopupMEl.classList.remove('clicked')
        closeMEl.classList.add('clicked')
    }
}

var setEventListeners = () => {
    navDivEl.addEventListener('mouseover', setHoverClass)
    demoBtnEl.addEventListener('mouseover', setHoverClass)
    navDivEl.addEventListener('mouseout', removeHoverClass)
    demoBtnEl.addEventListener('mouseout', removeHoverClass)
    burgerMEl.addEventListener('touchend', burgerHandler)
    closeMEl.addEventListener('touchend', closeHandler)
}

var getElements = () => {
    navDivEl = document.getElementById('navDiv')
    demoBtnEl = document.getElementById('demoBtn')
    navPopupMEl = document.getElementById('navPopupM')
    burgerMEl = document.getElementById('burgerM')
    closeMEl = document.getElementById('closeM')
}

var init = () => {
    getElements()
    setEventListeners()
}

init()