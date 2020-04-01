const button = document.getElementById("dark-mode");
const anchor = document.querySelectorAll('.nav-link-anchor')
const body = document.getElementsByTagName("body")[0]
const h1 = document.getElementById('heading-name')
const h3 = document.getElementById('heading-tag')

const white = '#ffffff'
const black = '#000000'
const dark = '#272727'
const primary = "#ef4836"

button.addEventListener('click', () => {
 if(button.innerText === 'Dark Mode'){
    darkMode()
 }
 else {
    lightMode()
 }
})

function darkMode(){
    button.innerText = 'Light Mode';
    body.style.backgroundColor = dark;
    h1.style.color = white;
    h3.style.color = white;
    anchor.forEach(item=>{
        if(item.id.includes('active')){
            item.style.color=primary;
        }
        else {
            item.style.color = white;
        }
    })
}

function lightMode(){
    button.innerText = 'Dark Mode';
    body.style.backgroundColor = white;
    h1.style.color = black
    h3.style.color = black
    anchor.forEach(item=>{
        if(item.id.includes('active')){
            item.style.color=primary
        }
        else {
            item.style.color = black;
        }
    })
}