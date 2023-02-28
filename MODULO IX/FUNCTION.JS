/**
document.getElementById('button').onclick = function () {
    console.log("Capturamos el evento click");
    document.getElementById("demo").innerHTML = "Estoy probando mi primero evento en JS"
}

document.addEventListener('click', function(){
    console.log("Hola Mundo desde EvenListener");
    document.getElementById("demo").innerHTML = "Estoy probando mi primero evento en JS"
});
*/

document.getElementById('button').addEventListener('click', function(){
    console.log("Hola Mundo desde EvenListener");
    document.getElementById("demo").innerHTML = "Estoy probando mi primero evento en JS"
});

document.getElementById('button_color').addEventListener('click', function(){
    document.body.style.backgroundColor = '#FF0000';
});

document.getElementById('button_default').addEventListener('click', function(){
    document.body.style.backgroundColor = 'aquamarine';
});

document.getElementById('button_ocultar').addEventListener('click', function(){
    document.getElementById("demo").style.display = 'none';
});

const collection = document.getElementsByClassName("prueba");
for (let i = 0; i<collection.length; i++){
    collection[i].style.backgroundColor = "orange";
}
