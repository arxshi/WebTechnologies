const signupPopup = document.querySelector('.popup.signup');
const loginPopup = document.querySelector('.popup.login');

const signupInputs = document.querySelectorAll('.popup.signup .form-element input');
const loginInputs = document.querySelectorAll('.popup.login .form-element input');

function clearSignupInputs() {
    signupInputs.forEach(i => {
        i.value = '';
    })
}

function clearLoginInputs() {
    loginInputs.forEach(i => {
        i.value = '';
    })
}

function closePopup(popup, callback) {
    popup.classList.remove('active-popup');
    callback();
}

document.querySelector(".auth #show-login").addEventListener("click", () => {
    loginPopup.classList.add('active-popup');
    closePopup(signupPopup, clearSignupInputs);
})

document.querySelector(".auth #show-signup").addEventListener("click", () => {
    signupPopup.classList.add('active-popup');
    closePopup(loginPopup, clearLoginInputs);
})

document.querySelectorAll(".close-btn").addEventListener("click", () => {
    closePopup(loginPopup, clearLoginInputs);
});

document.querySelector(".signup .close-btn").addEventListener("click", () => {
    closePopup(signupPopup, clearSignupInputs);
});

