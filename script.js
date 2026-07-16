var inpt1 = document.getElementById('inpt1');
var inpt2 = document.getElementById('inpt2');
var btn = document.getElementById('btn');
var enter = document.getElementById('enter');
var body = document.body;
var isPinkTheme = localStorage.getItem('isPinkTheme') === 'true';

// Apply the saved theme on load
if (isPinkTheme) {
    body.classList.add('pink-theme');
}

// Create and append the toggle button
var toggleButton = document.createElement('button');
toggleButton.innerText = 'Toggle Pink Theme';
toggleButton.style.position = 'absolute';
toggleButton.style.top = '10px';
toggleButton.style.left = '10px';
document.body.appendChild(toggleButton);

toggleButton.addEventListener('click', function() {
    isPinkTheme = !isPinkTheme;
    if (isPinkTheme) {
        body.classList.add('pink-theme');
        showToast('🌸 Pink theme enabled!');
    } else {
        body.classList.remove('pink-theme');
    }
    localStorage.setItem('isPinkTheme', isPinkTheme);
});

function showToast(message) {
    var toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerText = message;
    document.body.appendChild(toast);
    toast.style.display = 'block';
    setTimeout(function() {
        toast.style.opacity = '0';
        setTimeout(function() {
            document.body.removeChild(toast);
        }, 500);
    }, 2000);
}

btn.addEventListener('click', function() {
    let rndmNumber = Number(inpt1.value) + Math.random() * Number(inpt2.value - inpt1.value);
    if (inpt1.value === inpt2.value) {
        alert("Both values are same, Change one of the value");
        return;
    }
    enter.innerText = Math.round(rndmNumber);
    console.log(rndmNumber);
    console.log(inpt1.value);
    console.log(inpt2.value);
});