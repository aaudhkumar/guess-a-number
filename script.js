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