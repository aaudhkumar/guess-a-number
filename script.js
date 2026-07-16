var inpt1 = document.getElementById('inpt1') ; 
var inpt2 = document.getElementById('inpt2');
var btn = document.getElementById('btn');
var enter = document.getElementById('enter');

// Theme toggle buttons
var darkModeBtn = document.createElement('button');
var lightModeBtn = document.createElement('button');
var systemModeBtn = document.createElement('button');

// Set button text

darkModeBtn.innerText = 'Dark Mode';
lightModeBtn.innerText = 'Light Mode';
systemModeBtn.innerText = 'System Mode';

// Append buttons to body
document.body.appendChild(darkModeBtn);
document.body.appendChild(lightModeBtn);
document.body.appendChild(systemModeBtn);

// Event listeners for theme buttons

darkModeBtn.addEventListener('click', function() {
    document.body.classList.add('dark-mode');
});

lightModeBtn.addEventListener('click', function() {
    document.body.classList.remove('dark-mode');
});

systemModeBtn.addEventListener('click', function() {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.body.classList.add('dark-mode');
    } else {
        document.body.classList.remove('dark-mode');
    }
});

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