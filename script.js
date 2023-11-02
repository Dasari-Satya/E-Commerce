// const bar = document.getElementById('bar');
// const close = document.getElementById('close');
// const nav = document.getElementById('navbar');
// if(bar){
//     bar.addEventListener('click', () =>{
//         nav.classList.add('active');
//     })
// };
// if(close){
//     close.addEventListener('click', () =>{
//         nav.classList.remove('active');
//     })
// };
let toggle = document.querySelector(".toggle")

let nav = document.querySelector("#navbar")

let close = document.querySelector("#close")

toggle.onclick = function () {
    nav.classList.toggle("active")
};
close.onclick = function () {
    nav.classList.close("active")
};