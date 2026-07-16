var inpt1 = document.getElementById('inpt1') ; 
var inpt2 = document.getElementById('inpt2');
var btn = document.getElementById('btn');
var enter = document.getElementById('enter');
var themeToggle = document.getElementById('theme-toggle');

// Load theme from local storage
var currentTheme = localStorage.getItem('theme') || 'default';
if (currentTheme === 'pink') {
    document.body.classList.add('pink-theme');
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
})

themeToggle.addEventListener('click', function() {
    if (currentTheme === 'default') {
        document.body.classList.add('pink-theme');
        localStorage.setItem('theme', 'pink');
        currentTheme = 'pink';
        showToast('🌸 Pink theme enabled!');
    } else {
        document.body.classList.remove('pink-theme');
        localStorage.setItem('theme', 'default');
        currentTheme = 'default';
    }
});

function showToast(message) {
    var toast = document.createElement('div');
    toast.innerText = message;
    toast.style.position = 'fixed';
    toast.style.top = '20px';
    toast.style.left = '20px';
    toast.style.backgroundColor = '#FF4FA3';
    toast.style.color = 'white';
    toast.style.padding = '10px';
    toast.style.borderRadius = '5px';
    toast.style.transition = 'opacity 0.5s';
    toast.style.opacity = '1';
    document.body.appendChild(toast);
    setTimeout(function() {
        toast.style.opacity = '0';
        setTimeout(function() { document.body.removeChild(toast); }, 500);
    }, 2000);
}