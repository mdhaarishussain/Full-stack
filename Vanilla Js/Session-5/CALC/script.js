//<DOM Manipulation>
//<Event Handling>
//<Arrow Functions>
//<Error Handling>
//<Attributes Manipulation>
//<Updating Element Values>
document.querySelectorAll('.btn').forEach(button=>{
    button.addEventListener('click',()=>{
        const display=document.querySelector('#display');
        const value=button.getAttribute('data-value');

        if(value === 'c'){
            display.value='';
        }else if(value==='='){
            display.value=eval(display.value);
        }else{
            display.value+=value;
        }
    });
});