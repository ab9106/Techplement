
document.addEventListener('DOMContentLoaded', () => {
    const wrapper = document.querySelector('.wrapper');

    // Initially set the 'active-popup' class on the wrapper
    wrapper.classList.add('active-popup');
});
const registerLink = document.querySelector('.register-link');
const iconClose = document.querySelector('.icon-close');
const loginLink = document.querySelector('.login-link');
loginLink.addEventListener('click', ()=> {
    wrapper.classList.remove('active');
});
iconClose.addEventListener('click', ()=> {
    wrapper.classList.remove('active-popup');
});

const wrapper = document.querySelector('.wrapper');
registerLink.addEventListener('click', ()=> {
    wrapper.classList.add('active');
});
