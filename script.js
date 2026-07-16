var inpt1 = document.getElementById('inpt1') ; 
var inpt2 = document.getElementById('inpt2');
var btn = document.getElementById('btn');
var enter = document.getElementById('enter');
var darkModeToggle = document.getElementById('darkModeToggle');

// Load user preference for dark mode
if (localStorage.getItem('darkMode') === 'enabled') {
    document.body.classList.add('dark-mode');
    toggleButtonStyles(true);
}

btn.addEventListener('click' , function(){
    let rndmNumber = Number(inpt1.value)  +  Math.random() * Number(inpt2.value - inpt1.value) ; 
    if(inpt1.value === inpt2.value){
        alert("Both values are same , Change one of the value ") ; 
        return ;
    }
    enter.innerText = Math.round(rndmNumber) ; 
    console.log(rndmNumber) ; 
    console.log(inpt1.value) ; 
    console.log(inpt2.value) ; 
});

// Toggle dark mode
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    toggleButtonStyles(document.body.classList.contains('dark-mode'));
    // Save user preference
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('darkMode', 'enabled');
    } else {
        localStorage.setItem('darkMode', 'disabled');
    }
}

function toggleButtonStyles(isDarkMode) {
    if (isDarkMode) {
        btn.classList.add('dark-mode');
    } else {
        btn.classList.remove('dark-mode');
    }
}

darkModeToggle.addEventListener('click', toggleDarkMode);