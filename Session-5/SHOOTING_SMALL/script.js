let score = 0;
document.addEventListener('click', (e)=>{
    if(e.target.classList.contains('object'))
        score++;
        e.target.remove();
        document.getElementById('score').innerText=`Score: ${score}`;
});