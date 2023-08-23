'use strict'

//Seleccionar todos los elementos del DOM:
const switchTheme = document.querySelector('.switch');
const hour = document.querySelector('.hour');
const minute = document.querySelector('.minute');
const second = document.querySelector('.second');

const time = document.querySelector('.time');
const dates = document.querySelector('.date');


//Definir los nombres de los días de la semana y los meses: (arrays)
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];


// Agrega un evento click al boton 'switch', para cambiar entre modo oscuro y modo claro:
switchTheme.addEventListener('click', function() {

    //Busca y selecciona el elemento HTML y lo almacena en una constante:
    const htmlDark = document.querySelector('html'); 

    //Alterna la clase "dark" en el elemento HTML y tambien cambia entre los estilos de modo claro y oscuro
    htmlDark.classList.toggle('dark'); 

    // Cambia el texto que esta en el boton "switch", y si la clase "dark" está presente, se muestra "Light mode", de lo contrario, se muestra "Dark mode".
    switchTheme.innerHTML = htmlDark.classList.contains('dark') ? 'Ligth mode' : 'Dark mode';
});


// Funcion para actualizar el reloj y la fecha
function updateTime() {
    const now = new Date(); // Para obtener la fecha y la hora actual
    const month = now.getMonth(); 
    const day = now.getDay();
    const date = now.getDate();
    const hours = now.getHours();
    const pm = hours >= 12 ? 'PM' : 'AM'; //Si son mas de las 12 sera pm, sino am
    const hoursFormat = hours % 12 || 12; //Convierte a formato de 12 horas

    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    //Actualizar las manecillas del reloj/ animacion
    hour.style.transform = `translate(-50%, -100%) rotate(${scale(hoursFormat, 0, 12, 0, 360)}deg)`;
    minute.style.transform = `translate(-50%, -100%) rotate(${scale(minutes, 0, 60, 0, 360)}deg)`;
    second.style.transform = `translate(-50%, -100%) rotate(${scale(seconds, 0, 60, 0, 360)}deg)`;

    //Actualizar el elemento con la clase 'time' con el formato AM y PM:
    time.textContent = `${hoursFormat}:${minutes.toString().padStart(2, '0')} ${pm}`;

    //Actualizar el elemento con la clase 'date' (la fecha):
    dates.innerHTML = `${days[day]}, ${months[month]}, <span class="circle">${date}</span>`;
};

//funcion para mapear un rango de numeros a otro rango (escalado)
function scale(num, in_min, in_max, out_min, out_max) {
    return(num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
};

//Inicializar el reloj y actualizar cada segundo(1000ms)
updateTime();
setInterval(updateTime, 1000);
