const sections = document.querySelectorAll('section');
const navlis = document.querySelectorAll('nav ul li')
window.addEventListener('scroll', () => {
    let cursection = ''
    sections.forEach((section) => {
        const sectionTop = section.offsetTop
        const sectionHeight = section.clientHeight
        if (pageYOffset >= sectionTop - 250) {
            cursection = section.getAttribute('id')
        }
    })
    navlis.forEach((li) => {
        li.classList.remove('bg-orange-700')
        if (li.getAttribute('id') == cursection + 'Li') {
            li.classList.add('bg-orange-700')
        }
    })
})


var cnt = 0;
var frontend = document.getElementById('frontend')
var backend = document.getElementById('backend')
var tool = document.getElementById('tool')


function prevCard() {
    frontend.classList.add('hidden')
    backend.classList.add('hidden')
    tool.classList.add('hidden')
    cnt--
    if (cnt < 0) {
        cnt = 2
    }
    switch (cnt) {
        case 0:
            frontend.classList.remove('hidden')
            return
        case 1:
            backend.classList.remove('hidden')
            return
        case 2:
            tool.classList.remove('hidden')
            return
    }
}
function nextCard() {
    frontend.classList.add('hidden')
    backend.classList.add('hidden')
    tool.classList.add('hidden')

    cnt++
    if (cnt > 2) {
        cnt = 0
    }
    switch (cnt) {
        case 0:
            frontend.classList.remove('hidden')
            return
        case 1:
            backend.classList.remove('hidden')
            return
        case 2:
            tool.classList.remove('hidden')
            return
    }
}



function sent() {
    alert('Sent Email Success!')
}