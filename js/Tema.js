
const body = document.getElementById('body');
const btn_moon = document.getElementById('Switch__Icon-Moon');
const btn_sun = document.getElementById('Switch__Icon-Sun');

function toggle(){
    body.classList.toggle('dark_mode');
    btn_moon.classList.toggle('dark_mode');
    btn_sun.classList.toggle('dark_mode');
        //Guradamos el modo 
        if(body.classList.contains('dark_mode')){
            localStorage.setItem('dark_mode', 'true');
        }else{
            localStorage.setItem('dark_mode', 'false');
        }
}
btn_moon.addEventListener('click',toggle);
btn_sun.addEventListener('click',toggle);

// Obtenemos el modo actual.
if(localStorage.getItem('dark_mode') === 'true'){
	body.classList.add('dark_mode');
	btn_moon.classList.add('dark_mode');
    btn_sun.classList.remove('dark_mode');
} else {
    body.classList.remove('dark_mode');
	btn_moon.classList.remove('dark_mode');
    btn_sun.classList.remove('dark_mode');
}