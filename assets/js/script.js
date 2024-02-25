// IIFE para ser invocada cuando se carga la página
(async function() {
  try {
    // Obtener datos de la API
    // se dejaron 10 usuarios para traer de la API de un total de 5000 porque se demoraba mucho en cargar pagina, se respeta los 10 recomendados en desafio. 
    const respuesta = await fetch('https://randomuser.me/api/?results=10');
    const datos = await respuesta.json();

    // Obtener el div donde mostraremos los datos
    const divDatosUsuario = document.getElementById('user-data');

    // Iterar sobre los datos y crear una imagen y un párrafo para cada usuario
    datos.results.forEach(usuario => {
      const img = document.createElement('img');
      img.src = usuario.picture.medium; // Asegúrate de que la API proporciona una URL de imagen
      img.alt = `Imagen de ${usuario.name.first} ${usuario.name.last}`;

      const p = document.createElement('p');
      p.textContent = `Nombre: ${usuario.name.first} ${usuario.name.last}, Correo: ${usuario.email}, Teléfono: ${usuario.phone}`; 
      
      divDatosUsuario.appendChild(img);
      divDatosUsuario.appendChild(p);
    });
  } catch (error) {
    console.error('Hubo un error:', error);
  }
})();
