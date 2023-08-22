
document.addEventListener("DOMContentLoaded", () => {

    const agregarItem = document.getElementById('agregar');
    const contenedor = document.getElementById('contenedor');
    const limpiar = document.getElementById('limpiar');

    let items = JSON.parse(localStorage.getItem('listado'));

    const actualizarDatosContenedor = () => {
        contenedor.innerHTML = '';

        items.forEach(item => {
            const li = document.createElement('li')
            li.textContent = item;
            contenedor.appendChild(li);
        });
    }
    actualizarDatosContenedor();

    agregarItem.addEventListener('click', () => {

        const item = document.getElementById('item').value;
        items.push(item)
        localStorage.setItem('listado', JSON.stringify(items))


        actualizarDatosContenedor();
    })

    limpiar.addEventListener('click', () => {
        localStorage.removeItem('listado');
        items = []; 
        actualizarDatosContenedor(); 
    });
});

