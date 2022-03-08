
document.querySelectorAll('.carre').forEach(input => 
    input.addEventListener('click',(e)=>{
    e.target.classList.toggle('carreclick');
}))