document.addEventListener('keydown', (e) => {

    if(e.ctrlKey) {
        switch(e.key) {
            case 'k':
                darkmode = localStorage.getItem('darkmode');
                darkmode !== 'active' ? enableDarkmode() : disableDarkmode();
        }
    }        
    

});