console.log('hello world!')

const myButton = document.getElementById('button')
const userName = document.getElementById('my-name');
const inputElement = document.getElementById('user-input');

myButton.addEventListener('click', () => {
    userName.textContent = inputElement.value
})

const proButton = document.getElementById('pro');
const proElement = document.getElementById('user-pro');
const myPronouns = document.getElementById('my-pronouns');

proButton.addEventListener('click', () => {
    myPronouns.textContent = proElement.value
})

const bgGreen = document.getElementById('bg-green');
const bg1 = document.getElementById('bg-1');
const bg2 = document.getElementById('bg-2');
const bg3 = document.getElementById('bg-3');

bgGreen.addEventListener('click', () => {
    bg1.style.backgroundColor = 'green';
    bg2.style.backgroundColor = 'green';
    bg3.style.backgroundColor = 'green';
})

const bgBlue = document.getElementById('bg-blue');

bgBlue.addEventListener('click', () => {
    bg1.style.backgroundColor = 'blue';
    bg2.style.backgroundColor = 'blue';
    bg3.style.backgroundColor = 'blue';
})

let count = 0;

document.getElementById('counter').onclick = function onClick() {
        count =+ 1;
    }

