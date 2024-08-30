const hamburgerToggle_div = document.getElementById('hamburgerToggle');
const navList_Div = document.getElementById('navList')
const closeMenu_B = document.getElementById('closeMenu');



closeMenu_B.addEventListener('click', () => {

    navList_Div.classList.toggle('show');
    
});

hamburgerToggle_div.addEventListener('click', () => {

    navList_Div.classList.toggle('show');
    
});




