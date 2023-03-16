let btnHamburger = undefined;
let btnClose = undefined;
btnHamburger = document.querySelector('.menu-btn') ;
btnClose = document.querySelector('.close-menu');
btnHamburger.addEventListener('click', () => {
    document.querySelector('nav').classList.toggle('show-menu');
})
btnClose.addEventListener('click', () => {
    document.querySelector('nav').classList.toggle('show-menu');
})


// Switch dark-light mode

let darkMode = true;
let classClient = undefined;
classClient = document.querySelectorAll('.client');
console.log(classClient);
document.querySelector('.theme-btn').addEventListener('click', () => {
    if(darkMode){
        document.querySelector('.hamburger-btn').classList.add('light_mode');
        document.querySelector('body').classList.add('light_mode');
        document.querySelector('main').classList.add('light_mode');
        document.querySelector('.intro').classList.add('light_mode');
        document.querySelector('footer').classList.add('light_mode');
        document.querySelector('.end-info').classList.add('light_mode');
        classClient.forEach( (client) => {
            client.classList.add('light_mode');
        });
        darkMode = false;
        
    }
    else{
        document.querySelector('.hamburger-btn').classList.remove('light_mode');
        document.querySelector('body').classList.remove('light_mode');
        document.querySelector('main').classList.remove('light_mode');
        document.querySelector('.intro').classList.remove('light_mode');
        document.querySelector('footer').classList.remove('light_mode');
        document.querySelector('.end-info').classList.remove('light_mode');
        classClient.forEach( (client) => {
            client.classList.remove('light_mode');
        });
        darkMode = true;
    }
})