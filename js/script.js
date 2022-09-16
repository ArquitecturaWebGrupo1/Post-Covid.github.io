document.getElementById("btn__iniciar-sesion").addEventListener("click", iniciarSesion);
document.getElementById("btn__registrarse").addEventListener("click", register);
window.addEventListener("resize", anchoPagina);

let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');
let question = document.querySelectorAll('.question');
let btnDropdown = document.querySelectorAll('.question .more');
let answer = document.querySelectorAll('.answer');
let parrafo = document.querySelectorAll('.answer p');

var contenedor_login_register = document.querySelector(".contenedor__login-register");
var formulario_login = document.querySelector (".formulario__login");
var formulario_register= document.querySelector (".formulario__register");
var caja_trasera_login= document.querySelector (".caja__trasera-login");
var caja_trasera_register= document.querySelector (".caja__trasera-register");
                        
menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}
/*for ( let i = 0; i < btnDropdown.length; i ++ ) {
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
}*/

function anchoPagina(){

    if(window.innerWidth > 850 ) {
        caja_trasera_login.style.display= "block";
        caja_trasera_register.style.display= "block";
    } else {
        caja_trasera_register.style.display= "block";
        caja_trasera_register.style.opacity= "1";
        caja_trasera_login.style.display= "none";
        formulario_login.style.display= "block";
        formulario_register.style.display= "none";                        
        contenedor_login_register.style.left= " 0px";
    }
}
anchoPagina();

function iniciarSesion(){
    if(window.innerHeight>850){
    formulario_register.style.display= "none";
    contenedor_login_register.style.left= "10px";
    formulario_login.style.display= "block";
    caja_trasera_register.style.opacity= "1"; 
    caja_trasera_login.style.opacity= "0";
    }else{
        formulario_register.style.display= "none";
        contenedor_login_register.style.left= "0px";
        formulario_login.style.display= "block";
        caja_trasera_register.style.display= "block"; 
        caja_trasera_login.style.display= "none";
    }
}

function register(){
    if(window.innerWidth>850){
        formulario_register.style.display= "block";
        contenedor_login_register.style.left= "410px";
        formulario_login.style.display= "none";
        caja_trasera_register.style.opacity= "0"; 
        caja_trasera_login.style.opacity= "1";
    }else{
        formulario_register.style.display= "block";
        contenedor_login_register.style.left= "0px";
        formulario_login.style.display= "none";
        caja_trasera_register.style.display= "none"; 
        caja_trasera_login.style.display= "block";
        caja_trasera_login.style.opacity= "1";
    }
    
}

