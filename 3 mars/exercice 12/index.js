let light= document.querySelector('p')
console.log(light);

light.addEventListener('click',() => {
    if (document.body.style.backgroundColor =='white')
    {document.body.style.backgroundColor ='black'} else {document.body.style.backgroundColor ='white'} 
})


