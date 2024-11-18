const signupForm = document.getElementById('signup-form')

const signupUsernameInput = document.getElementById('signup-username-input')
const signupPassInput = document.getElementById('signup-password-input')
const signupRepeatPassInput = document.getElementById('signup-password-repeat-input')

const signupErrorMessage = document.getElementById('signup-error-message')

signupForm.addEventListener('submit', (e) => {

    let errors = getSignupErrors(signupUsernameInput.value, signupPassInput.value, signupRepeatPassInput.value);

    if(errors.length > 0) {
        e.preventDefault()
        signupErrorMessage.innerText = errors.join(", ")
    }

    localStorage.setItem(signupUsernameInput.value, signupPassInput.value);
});

function getSignupErrors(username, pass, repeatPass) {
    let errors = [];

    if(username === '' || username == null) {
        errors.push('username is required');
        signupUsernameInput.parentElement.classList.add('incorrect');
    } else if (username.length < 3 || username.length > 16) {
        errors.push('username must be between 3 and 16 characters long');
        signupUsernameInput.parentElement.classList.add('incorrect');
    }

    if(pass === '' || pass == null) {
        errors.push('password is required');
        signupPassInput.parentElement.classList.add('incorrect');
    } else {
        if(pass.length < 8) {
            errors.push('password must be at least 8 characters long');
            signupPassInput.parentElement.classList.add('incorrect');
        } else {
            const hasUpperCase = /[A-Z]/.test(pass);
            const hasLowerCase = /[a-z]/.test(pass);
            const hasNumber = /[0-9]/.test(pass);
            const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(pass);

            if (!hasUpperCase || !hasLowerCase || !hasNumber || !hasSpecialChar) {
                errors.push('password must include uppercase, lowercase, number, and special character');
                signupPassInput.parentElement.classList.add('incorrect');
            } else if (pass !== repeatPass) {
                errors.push('passwords do not match');
                signupPassInput.parentElement.classList.add('incorrect');
                signupRepeatPassInput.parentElement.classList.add('incorrect');
            }
        }
    }

    if(localStorage.getItem(username) !== null) {
        errors.push('user already exists');
        signupUsernameInput.parentElement.classList.add('incorrect');
    }

    return errors;
}


const allSignupInputs = [signupUsernameInput, signupPassInput, signupRepeatPassInput];

allSignupInputs.forEach(i => {
    i.addEventListener('input', () => {
        if(i.parentElement.classList.contains('incorrect')) {
            i.parentElement.classList.remove('incorrect');
            signupErrorMessage.innerText = '';
        }
    })
})