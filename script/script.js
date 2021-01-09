let loadDatos = () => {

  fetch("data/download.json")
    .then(function(resultado){
      return resultado.json()
    })
    .then(function(str) {
      
      // Toma como referencia la plantilla para mostrar todos los datos del personal.
      let datos = str
      
      let general = document.getElementById("plantillas");
      for(i=0; i<datos.users.length; i++){

        let name = datos.users[i].name
        let gender = datos.users[i].gender
        let tag1 =  datos.users[i].tags[0]
        let tag2 = datos.users[i].tags[1]
        let tag3 = datos.users[i].tags[2]
        let tag4 = datos.users[i].tags[3]
        let tag5 = datos.users[i].tags[4]
        let plantilla = `<div class="usuario col-4">
  <div class="datos">
    <h4 class="nombre">${name}</h4>
    <small class="genero">${gender}</small>
    <p class="etiquetas">
      <small><a href="#">${tag1}</a></small>
      <small><a href="#">${tag2}</a></small>
      <small><a href="#">${tag3}</a></small>
      <small><a href="#">${tag4}</a></small>
      <small><a href="#">${tag5}</a></small>
    </p>
  </div>
</div>`

        let div = document.createElement("div");
        div.innerHTML = plantilla
        general.appendChild(div)
        let tagx = div.getElementsByTagName("a")
        for (d of tagx) {
          d.addEventListener('click', (e) => {
            filtros( e.target.textContent);
          });
        }  
      }
      

    })
    .catch(function(error) {
      console.log('Hubo un problema con la petición Fetch:' + error.message);
    });
}

function filtros(codigo) {
  console.log( {"codigo":codigo});
  let filter = codigo

  let div = document.getElementById("plantillas").getElementsByTagName("div")

  for (i = 0; i < div.length; i++) {
      let aTags = div[i].getElementsByTagName('a');
      let flag = 0
      for (let a of aTags) {
        let txtValue = a.textContent;
        if (txtValue === filter) {
          flag = 1
        }
        let x = div[i]
      
        if(flag === 0) x.style.display = 'none'
        else x.style.display = ''
      }
      
  }

}



document.addEventListener('DOMContentLoaded', function() {
  loadDatos();
  //filterResults();
})