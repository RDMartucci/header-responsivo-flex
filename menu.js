// document.getElementById('hamburguesa').addEventListener('click', function () {
//     document.querySelector('.header-contenedor').classList.toggle('menu-activo');
// });
document.getElementById('hamburguesa').addEventListener('click', function () {
    document.getElementById('menu-header-top').classList.toggle('menu-top-activo');
    document.getElementById('menu-principal').classList.toggle('menu-principal-activo');
});

document.getElementById('icono-busqueda').addEventListener('click',function(){
    document.querySelector('.form-buscar').classList.toggle('form-buscar-activo');
    document.getElementById('icono-busqueda')
});