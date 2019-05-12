MVC.Controller = class Controller {
  constructor(props){
    this.eventHandler()
    this.model = new props.model(props.endpoint)
    this.view = new props.view(props.contentElement)
    this.inserta()
    this.eliminar()
  }

  
  eventHandler(){
    document.body.addEventListener("onloadApp", (event) => {
      this.getData()
    })
    
  }
  getData(){
    this.model.getPersona()
    .then(data => {
      this.view.notify(data)
    })
    .catch(console.log)
  }
  
// INSERTAR
  inserta(){
    var insertarBoton = document.getElementById("guardar")
    insertarBoton.addEventListener('click', (e) => {//SE INGRESA EN UNA FUNCIÓN PARA QUE PUEDA REALIZAR LA ACCION
      this.insertaAr()
    })
  }

  insertaAr(){
    let data = this.view.insertaVista()
    this.model.insertArti(data)
  }

  // ELIMINAR
  eliminar(){
    var eliminarBoton = document.getElementById("eliminar")
    eliminarBoton.addEventListener('click', (e) => {
      this.eliminaTitu()
    })
  }

  eliminaTitu(){
    let datos = this.view.eliminaVista()
    this.model.eliminarArt(datos)
  }

}
