MVC.Model = class Model {
  constructor(endpoint){
    this.endpoint = endpoint
    this.modelData = {}
  }
  getPersona(){
    return fetch(`${this.endpoint}`)//RUTA DEL RECURSO A OBTENER
            .then(resp => {
              if (resp.ok) {
                return resp.json()
              }
              return Error("No se pudieron obtener los datos")
            })
            .then(data => {
              this.setModelo(data)
              return data
            })
  }
  

  // INSERTANDO ARTICULOS
  insertArti(data){
    
    fetch(this.endpoint, {
      method: 'POST',
      body: JSON.stringify(data),
      headers:{
        'Content-Type': 'application/json'
      }
    })
    .catch(error => console.error('Error:', error))
    .then(response => console.log('Success:', response));
  }
  
  
  // ELIMINAR TITULO
  eliminarArt(datos){
    // BIEN!
    fetch(`http://localhost:8080/api/articulos/${datos}`, {
      method: 'DELETE'
    })    
    .then(res => {
      console.log('Deleted:', datos)
      return res
    })
    .catch(err => console.error(err))
  }
  

  
  setModelo(data){
    this.modelData = data
  }

}
