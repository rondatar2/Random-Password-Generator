const characters =
 ["A","B","C","D","E","F","G","H","I","J","K","L",
"M","N","O","P","Q","R","S","T","U","V","W","X",
"Y","Z","a","b","c","d","e","f","g","h","i","j",
"k","l","m","n","o","p","q","r","s","t","u","v",
"w","x","y","z", "0", "1", "2", "3", "4", "5", "6",
 "7", "8", "9","~","`","!","@","#","$","%","^","&",
 "*","(",")","_","-","+","=","{","[","}","]",",","|",
 ":",";","<",">",".","?","/"];
const characterswithoutnum = 
["A","B","C","D","E","F","G","H","I","J","K","L",
"M","N","O","P","Q","R","S","T","U","V","W","X",
"Y","Z","a","b","c","d","e","f","g","h","i","j",
"k","l","m","n","o","p","q","r","s","t","u","v",
"w","x","y","z","~","`","!","@","#","$","%","^","&",
"*","(",")","_","-","+","=","{","[","}","]",",","|",
":",";","<",">",".","?","/"]
const increment = document.getElementById('plus')
const decrement = document.getElementById('minus')
const value = document.getElementById('increment-el')
const withnum = document.getElementById('withnum')
const withoutnum = document.getElementById('withoutnum')
const withsym = document.getElementById('withsym')
const withoutsym = document.getElementById('withoutsym')
const genBtn = document.getElementById('generate-btn')
const firstPassBtn = document.getElementById('first-btn')
const secondPassBtn = document.getElementById('second-btn')
let firstPassword = ''
let secondPassword = ''
withnum.checked = true
withsym.checked = true

//increment and decrement
increment.addEventListener('click', function(){
    if(value.textContent < 30){
        value.textContent++
    }
})
decrement.addEventListener('click', function(){
    if(value.textContent > 1){
        value.textContent--
    }
})
//generate
function passwordGen(charac, num){
    for(let i = 0; i < Number(value.textContent); i++){
        char = Math.floor(Math.random() * num)
        firstPassword += charac[char]
    }
    for(let i = 0; i < Number(value.textContent); i++){
        char = Math.floor(Math.random() * num)
        secondPassword += charac[char]
    }
}
function show(dom, value){
    dom.style.display = 'inline'
    dom.innerHTML = value
}
genBtn.addEventListener('click', function(){
    if(withoutnum.checked == true && withoutsym.checked == true){
        passwordGen(characters, 52)
    }
    else if(withoutnum.checked == true){
        passwordGen(characterswithoutnum, 81)
    }
    else if(withoutsym.checked == true){
        passwordGen(characters, 62)
    }
    else{
        passwordGen(characters, 91)
    }
    show(firstPassBtn, firstPassword)
    show(secondPassBtn, secondPassword)
    firstPassword = ''
    secondPassword = ''
})

//copytext
function copyText(htmlel){
    if(!htmlel){
        return;
    }
    let elementText = htmlel.innerText
    let inputElement = document.createElement('input')
    inputElement.setAttribute('value', elementText)
    document.body.appendChild(inputElement)
    inputElement.select()
    document.execCommand('copy')
    inputElement.parentNode.removeChild(inputElement)
}
firstPassBtn.addEventListener('click', function(){
    copyText(firstPassBtn)
})
secondPassBtn.addEventListener('click', function(){
    copyText(secondPassBtn)
})