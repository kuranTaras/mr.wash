const buttonAuto = document.querySelector('.service__auto')
const buttonPool = document.querySelector('.service__pool')
const autoPrice = document.querySelector('.service__auto-price')
const poolPrice = document.querySelector('.service__pool-price')
const servicePoolImg = document.querySelector('.service__big-pool')
const serviceAutoImg = document.querySelector('.service__big-auto')
const chooseAuto = document.querySelector('.choose-auto')
const choosePool = document.querySelector('.choose-pool')
const chooseMan = document.querySelector('.choose-man')

buttonAuto.addEventListener('click', () => {
    servicePoolImg.classList.remove('service__big-active')
    serviceAutoImg.classList.add('service__big-active')
    buttonAuto.classList.add('service__button-active')
    buttonPool.classList.remove('service__button-active')
    chooseAuto.classList.add('choose-active')
    chooseMan.classList.remove('choose-active')
    choosePool.classList.remove('choose-active')
    poolPrice.style.opacity = '0'
    setTimeout(() => {
        poolPrice.style.display = 'none'
        autoPrice.style.display = 'flex'
    }, 350)
    setTimeout(() => {
        autoPrice.style.opacity = '1'
    }, 450)

})
buttonPool.addEventListener('click', () => {
    servicePoolImg.classList.add('service__big-active')
    serviceAutoImg.classList.remove('service__big-active')
    buttonAuto.classList.remove('service__button-active')
    buttonPool.classList.add('service__button-active')
    chooseAuto.classList.remove('choose-active')
    chooseMan.classList.add('choose-active')
    choosePool.classList.add('choose-active')
    autoPrice.style.opacity = '0'
    setTimeout(() => {
        autoPrice.style.display = 'none'
        poolPrice.style.display = 'flex'
    }, 350)
    setTimeout(() => {
        poolPrice.style.opacity = '1'
    }, 450)
})

const upDownButton = document.querySelectorAll('.questions__button')
const upDown = document.querySelectorAll('.questions__up-down')


upDownButton.forEach((item, i) => {
    item.addEventListener('click', () => {
        upDown[i].classList.toggle('questions__active')
        item.classList.toggle('questions__subtitle-active')
        if (upDown[i].classList.contains('questions__active')) {
            upDown[i].style.maxHeight = upDown[i].scrollHeight + 'px'
        } else {
            upDown[i].style.maxHeight = '0'
        }
    })
})


const burgerKing = document.querySelector('.header__burger-king')
const headerMenu = document.querySelector('.header__menu')
const headerMenuHeight = headerMenu.scrollHeight + 'px'
burgerKing.addEventListener('click', () => {
    headerMenu.classList.toggle('header__menu-active')
    burgerKing.classList.toggle('header__burger-active')
    if (headerMenu.classList.contains('header__menu-active')) {
        headerMenu.style.maxHeight = headerMenuHeight
    } else {
        headerMenu.style.maxHeight = '0px'
    }
})
