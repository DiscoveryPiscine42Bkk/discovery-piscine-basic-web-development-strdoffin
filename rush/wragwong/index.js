window.addEventListener('scroll',()=>{
    if(pageYOffset > 180){
        document.getElementById("nav").classList.add('bg-white')
    }else{
        document.getElementById("nav").classList.remove('bg-white')
    }
})