let carrusel = document.querySelector('.destinos__contenedor__carrusel');
let carrusel_lista = document.querySelector('.carrusel__lista');
let imagen = document.querySelectorAll('.lista__imagen')

let presiono = false;
let inicioX = 0;
let x;

carrusel.addEventListener('mousedown',(e)=>{
    presiono = true;
    inicioX = e.offsetX - carrusel_lista.offsetLeft;
    carrusel.style.cursor = 'grabbing';
})

carrusel.addEventListener('mouseenter',()=>{
    carrusel.style.cursor = 'grab';
})

carrusel.addEventListener('mouseup',()=>{
    carrusel.style.cursor = 'grab';
})

carrusel.addEventListener('mouseup',()=>{
    presiono = false;
})

carrusel.addEventListener('mousemove',(e)=>{
    
    if(!presiono) return;
    e.preventDefault()
    x = e.offsetX;
    
    nuevo_offset = (x - inicioX) + "px";
    carrusel_lista.style.left = nuevo_offset;
    checkSobrepaso();
})

function checkSobrepaso(){
    let longitudC = carrusel.getBoundingClientRect();
    let longitudCL = carrusel_lista.getBoundingClientRect();
    let longitudImg = imagen[0].getBoundingClientRect().width;

    console.log((imagen.length * longitudImg) + " -- " + longitudC.width)

    if(parseInt(carrusel_lista.style.left) > 0){
        carrusel_lista.style.left = "0px";
    }
}