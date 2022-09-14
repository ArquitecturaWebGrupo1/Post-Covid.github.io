let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');
let question = document.querySelectorAll('.question');
let btnDropdown = document.querySelectorAll('.question .more');
let answer = document.querySelectorAll('.answer');
let parrafo = document.querySelectorAll('.answer p');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}
for ( let i = 0; i < btnDropdown.length; i ++ ) {
    let altoParrafo= parrafo[i].clientHeight;
    let switchc=0;

    btnDropdown.addEventListener('click', () => { 

            if (switchc == 0) {
                answer[i].style.height = '${altoParrafo}px';
                question[i].style.marginBotton = '10px';
                btnDropdown[i].innerHTML = '<i></i>';
                switchc++;
            }
            else if (switchc == 1) {
                answer[i].style.height = '0';
                question[i].style.marginBotton = '0';
                btnDropdown[i].innerHTML = '<i></i>';
                switchc--;
            }
        })
}


