var inpt1 = document.getElementById('inpt1') ; 
var inpt2 = document.getElementById('inpt2');
var btn = document.getElementById('btn');
var enter = document.getElementById('enter');
var darkModeBtn = document.getElementById('dark-mode');
var lightModeBtn = document.getElementById('light-mode');
var systemModeBtn = document.getElementById('system-mode');

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

darkModeBtn.addEventListener('click', function() {
    document.body.style.backgroundColor = 'black';
    document.body.style.color = 'white';
    document.querySelectorAll('.container').forEach(function(container) {
        container.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
    });
});

lightModeBtn.addEventListener('click', function() {
    document.body.style.backgroundColor = 'white';
    document.body.style.color = 'black';
    document.querySelectorAll('.container').forEach(function(container) {
        container.style.backgroundColor = 'white';
    });
});

systemModeBtn.addEventListener('click', function() {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        darkModeBtn.click();
    } else {
        lightModeBtn.click();
    }
});

// Listen for changes in system theme
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
    if (event.matches) {
        darkModeBtn.click();
    } else {
        lightModeBtn.click();
    }
});