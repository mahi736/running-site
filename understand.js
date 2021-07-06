if(localStorage.getItem('understand') == null){
    localStorage.setItem('understand', false);
    var status = false;
} else {
    var status = localStorage.getItem('understand');
}
var warning = document.getElementById('warning');
var undButton = document.getElementById('undButton');
if(status == 'true'){
    warning.style.display = 'none';
}
undButton.addEventListener('click', (e)=>{
    localStorage.removeItem('understand');
    localStorage.setItem('understand', true);
    e.target.parentNode.parentNode.classList.add('dowAnimation');
    setTimeout(() => {
        e.target.parentNode.parentNode.style.display = 'none';
    }, 700);  
})