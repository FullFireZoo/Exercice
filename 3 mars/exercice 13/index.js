const un = document.getElementById('1');
const deux = document.getElementById('2');
const trois = document.getElementById('3');
const quatre = document.getElementById('4');
const cinq = document.getElementById('5');
const six = document.getElementById('6');
const sept = document.getElementById('7');
const huit = document.getElementById('8');
const neuf = document.getElementById('9');


let screen = document.querySelector('.screen');



const pave = [un, deux, trois, quatre, cinq, six, sept, huit, neuf, screen];
console.log(pave);



document.querySelector('.calc').addEventListener('click', (e) =>{
    screen.textContent = e.target.textContent;
        for (let i = 0; i < pave.length; i++) {
            pave[i].style.backgroundColor = '#cccccc';
    } 
    e.target.style.backgroundColor = '#f2a06e';
})

// const pave = Array.from(document.querySelectorAll('p'))

// console.log(pave);
// pave.push(document.querySelector('.screen'))
// console.log(pave);
