const form = document.getElementById('login-form')

const loginBtn = document.getElementById('show-login');
const signupBtn = document.getElementById('show-signup');

const loginBtnFinal = loginBtn;
const signupBtnFinal = signupBtn;

const usernameInput = document.getElementById('login-username-input')
const passInput = document.getElementById('login-password-input')

const error_message = document.getElementById('login-error-message')

const successAudio = document.getElementById('success');

let userElm = document.createElement('button');

let logoutElm = document.createElement('button');

let activeUser = localStorage.getItem('active-user');

let user = '';

let userPopupHTML = '';

const userPopup = document.querySelector('.popup.user');

function createUserPopupComponent(name) {
    userPopupHTML = 
        `   
            <h2 class="centered">${name}</h2>
            <p style="font-size: 20px">Theme: ${localStorage.getItem(name+"mode")}</p>
        `
    userPopup.innerHTML = userPopup.innerHTML + userPopupHTML;
    document.querySelector(".user .close-btn").addEventListener("click", () => {
        closePopup(userPopup, clearLoginInputs);
    });
}

document.querySelectorAll(".close-btn").forEach(el => {
    el.addEventListener("click", () => {
        closePopup(el.parentElement, clearLoginInputs);
    });
})


function replaceButtons(name) {
    userElm.innerText = name;
    userElm.id = 'user';
    createUserPopupComponent(name);
    userElm.addEventListener('click', () => {
        userPopup.classList.add('active-popup');
    });
    loginBtn.replaceWith(userElm)
    
    signupBtnFinal.addEventListener("click", () => {
        closePopup(userPopup, clearLoginInputs);
    });
    loginBtnFinal.addEventListener("click", () => {
        closePopup(userPopup, clearLoginInputs);
    });

    logoutElm.id = 'logout';
    logoutElm.innerText = 'log out'     
    logoutElm.addEventListener('click', () => {
        logoutElm.replaceWith(signupBtnFinal);
        userElm.replaceWith(loginBtnFinal);
        localStorage.removeItem('active-user');
        location.reload();
    })

    signupBtn.replaceWith(logoutElm);
}

if(activeUser !== null) {
    replaceButtons(activeUser);
}

form.addEventListener('submit', (e) => {

    let errors = getLoginErrors(usernameInput.value, passInput.value);

    if(errors.length > 0) {
        e.preventDefault()
        error_message.innerText = errors.join(", ") 
        return;
    }

    user = localStorage.getItem(usernameInput.value);
    if (user == null) {
        e.preventDefault();
        error_message.innerText = 'user does not exists'
        usernameInput.parentElement.classList.add('incorrect')
        return;
    }

    if(user !== passInput.value) {
        e.preventDefault();
        error_message.innerText = 'wrong password'
        passInput.parentElement.classList.add('incorrect')
        return;
    }
    
    e.preventDefault()
    replaceButtons(usernameInput.value);
    localStorage.setItem('active-user', usernameInput.value);
    location.reload();
    let sound = new Audio("sounds/success.mp3");
    sound.play();
    closePopup(loginPopup, clearLoginInputs);
    
});

function getLoginErrors(username, pass) {
    let errors = [];

    if(username === '' || username == null) {
        errors.push('username is required');
        usernameInput.parentElement.classList.add('incorrect');
    }

    if(pass === '' || pass == null) {
        errors.push('password is required');
        passInput.parentElement.classList.add('incorrect');
    }

    return errors;
}

const allLoginInputs = [usernameInput, passInput];

allLoginInputs.forEach(i => {
    i.addEventListener('input', () => {
        if(i.parentElement.classList.contains('incorrect')) {
            i.parentElement.classList.remove('incorrect');
            error_message.innerText = '';
        }
    })
})



