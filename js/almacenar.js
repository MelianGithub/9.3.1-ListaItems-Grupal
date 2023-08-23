document.addEventListener("DOMContentLoaded", () => {

    const agregarItem = document.getElementById('agregar');
    const contenedor = document.getElementById('contenedor');
    const limpiar = document.getElementById('limpiar');
    const valorItem = document.getElementById('item');
    let items = JSON.parse(localStorage.getItem('listado')) || [];

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

        const item = valorItem.value;
        items.push(item)
        localStorage.setItem('listado', JSON.stringify(items))
        valorItem.value = '';
        actualizarDatosContenedor();

    })

    limpiar.addEventListener('click', () => {
        localStorage.removeItem('listado');
        items = [];
        actualizarDatosContenedor();
    });
});


