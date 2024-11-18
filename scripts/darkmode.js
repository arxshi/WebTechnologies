let activeUserMode = localStorage.getItem('active-user');
if(activeUserMode == null) {
    activeUserMode = '';
}
let mode = localStorage.getItem(activeUserMode+'mode');
const themeSwitch = document.getElementById('theme-switch');

const disableDarkmode = () => {
    document.body.classList.add('darkmode');
    localStorage.setItem(activeUserMode+'mode', 'lightmode');
}

const enableDarkmode = () => {
    document.body.classList.remove('darkmode');
    localStorage.setItem(activeUserMode+'mode', 'darkmode');
}

function checkDarkmode() {
    if(mode === 'darkmode') enableDarkmode();    
    else disableDarkmode();
}

checkDarkmode();

themeSwitch.addEventListener("click", () => {
    mode = localStorage.getItem(activeUserMode+'mode');
    mode !== "darkmode" ? enableDarkmode() : disableDarkmode(); 
})