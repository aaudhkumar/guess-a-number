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
var darkModeButton = document.getElementById('dark-mode');
var lightModeButton = document.getElementById('light-mode');
var systemModeButton = document.getElementById('system-mode');

function applyDarkMode() {
    document.body.style.backgroundColor = 'black';
    document.body.style.color = 'white';
    document.querySelector('.container').style.backgroundColor = '#333';
}

function applyLightMode() {
    document.body.style.backgroundColor = 'white';
    document.body.style.color = 'black';
    document.querySelector('.container').style.backgroundColor = 'white';
}

function applySystemMode() {
    // This will be handled by the user's system settings
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        applyDarkMode();
    } else {
        applyLightMode();
    }
}

// Event Listeners
darkModeButton.addEventListener('click', applyDarkMode);
lightModeButton.addEventListener('click', applyLightMode);
systemModeButton.addEventListener('click', applySystemMode);

// Apply system mode on load
applySystemMode();