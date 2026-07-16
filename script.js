var inpt1 = document.getElementById('inpt1') ; 
var inpt2 = document.getElementById('inpt2');
var btn = document.getElementById('btn');
var enter = document.getElementById('enter');

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
})

// Theme Toggle Functionality
var darkModeBtn = document.getElementById('dark-mode-btn');
var lightModeBtn = document.getElementById('light-mode-btn');
var systemModeBtn = document.getElementById('system-mode-btn');

// Function to apply dark mode
function applyDarkMode() {
    document.body.classList.add('dark-mode');
    document.body.classList.remove('light-mode');
}

// Function to apply light mode
function applyLightMode() {
    document.body.classList.add('light-mode');
    document.body.classList.remove('dark-mode');
}

// Function to apply system mode
function applySystemMode() {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        applyDarkMode();
    } else {
        applyLightMode();
    }
}

// Event listeners for buttons

darkModeBtn.addEventListener('click', applyDarkMode);
lightModeBtn.addEventListener('click', applyLightMode);
systemModeBtn.addEventListener('click', applySystemMode);

// Apply system mode on initial load
applySystemMode();