MVC.controllerInstance = new MVC.Controller({
  model: MVC.Model,
  view: MVC.View,
  contentElement: document.querySelector('#section'),
  endpoint: 'http://localhost:8080/api/articulos'
})

document.body.dispatchEvent(new Event('onloadApp'))
