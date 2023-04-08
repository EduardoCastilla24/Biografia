const toggleButton = document.getElementById('toggle');
const sidebar = document.getElementById('container__links');
const overlay = document.getElementById('overlay');
const links = document.querySelectorAll('.nav__links--item');

toggleButton.addEventListener('click', ()=>{
    sidebar.classList.toggle('show')
    overlay.classList.toggle('show')

    links.forEach((link)=>{
        link.addEventListener('click', ()=>{
            removeShow()
        })
    })
})


// PREVENT CLASS ACTIVE ON DESKTOP
const sizeScreen = 1200

window.addEventListener('resize', function() {
    if(window.innerWidth >= sizeScreen){
        if(sidebar.classList.contains('show')){
            removeShow()
        }
    }
})
// REMOVE SHOW CLASS
function removeShow(){
    sidebar.classList.remove('show')
    overlay.classList.remove('show')
}