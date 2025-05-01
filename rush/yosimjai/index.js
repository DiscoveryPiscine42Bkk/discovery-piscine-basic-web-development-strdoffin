const sections = document.querySelectorAll('section');
const navlis = document.querySelectorAll('nav ul li')
window.addEventListener('scroll' , ()=>{
    let cursection = ''
    sections.forEach( (section) => {
        const sectionTop = section.offsetTop
        const sectionHeight = section.clientHeight
        if(pageYOffset >= sectionTop-250){
            cursection =  section.getAttribute('id')
        }
    })
    navlis.forEach( (li) =>{
        li.classList.remove('bg-orange-700')
        if(li.getAttribute('id')== cursection+'Li'){
            li.classList.add('bg-orange-700')
        }
    })
})





function sent(){
    alert('Sent Email Success!')
}