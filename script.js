let body = document.querySelector('body');

let hamburger = document.querySelector('.hamburger');
let links = document.querySelector('.links');

hamburger.addEventListener('click',()=>{
    hamburger.classList.toggle('active')
    links.classList.toggle('active')
})

let darklight = document.querySelector('.darkLight');
darklight.addEventListener('click',()=>{
    darklight.classList.toggle('active')
    body.classList.toggle('dark')
})

let searchToggle  =  document.querySelector('.searchToggle');
searchToggle.addEventListener('click',()=>{
    searchToggle.classList.toggle('active')
})
    

