const btnTop = document.getElementById("btnTop")

btnTop.addEventListener("click", ()=>{
    window.scrollTo(0,0)
})


document.addEventListener('scroll', ocultar)

function ocultar(){
    if(window.scrollY>10){
        btnTop.style.display = "flex"
    }else{
        btnTop.style.display = "none"
    }
}
