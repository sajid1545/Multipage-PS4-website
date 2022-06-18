let body = document.querySelector('body');

let hamburger = document.querySelector('.hamburger');
let links = document.querySelector('.links');

hamburger.addEventListener('click',()=>{
    hamburger.classList.toggle('active')
    links.classList.toggle('active')
})


