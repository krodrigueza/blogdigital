MVC.View = class View {
  constructor(elem){
    this.eventHandler()
    this.elem = elem
  }
  eventHandler(){
    document.body.addEventListener("onLoadData", (event) => {
      this.updateView(event.detail)
    })
  }
  notify(data){
    const onLoadDataEvent = new CustomEvent("onLoadData",{detail:data, bubbles: true})
    this.elem.dispatchEvent(onLoadDataEvent)
  }

  // INSERTANDO DATOS
  insertaVista(){

    var tituloIn = document.getElementById("tituloInsert").value;
    var autorIn = document.getElementById("autorInsert").value;
    var articuloIn = document.getElementById("articuloInsert").value;
    var palabraIn = document.getElementById("palabrasInsert").value;

    var data = {
      titulo: tituloIn,
      autor: autorIn,
      articulo: articuloIn,
      palabrasClave: palabraIn
    }

    return data;

  }

  // ELIMINANDO DATOS
  eliminaVista(){

    var tituloEli = document.getElementById("tituloEli").value;
    return tituloEli;

  }

  //PETICION DE DATOS POR ID EN EL FORMULARIO DESDE JSON
  updateView(datos){
    console.log(datos);
    var seccion = document.getElementsByTagName("article")[1];

    var tabla = document.createElement("table");

    var tblHead = document.createElement("thead");
      var hileraHead = document.createElement("tr");

        var celdaCabeceraTi = document.createElement("th");
        var celdaCabeceraAu = document.createElement("th");
        var celdaCabeceraAr = document.createElement("th");
        var celdaCabeceraPa = document.createElement("th");

        var textTitulo = document.createTextNode("TITULO");
        var textAutor = document.createTextNode("AUTOR");
        var textArti = document.createTextNode("ARTICULO");
        var textPala = document.createTextNode("PALABRAS CLAVE");

        celdaCabeceraTi.appendChild(textTitulo);
        celdaCabeceraAu.appendChild(textAutor);
        celdaCabeceraAr.appendChild(textArti);
        celdaCabeceraPa.appendChild(textPala);

      hileraHead.appendChild(celdaCabeceraTi);
      hileraHead.appendChild(celdaCabeceraAu);
      hileraHead.appendChild(celdaCabeceraAr);
      hileraHead.appendChild(celdaCabeceraPa);

    tblHead.appendChild(hileraHead);
    tabla.appendChild(tblHead);

    var tblBody = document.createElement("tbody");

    for (var i = 0; i < datos.length; i++) {

      var hilera = document.createElement("tr");
      var celdaTi = document.createElement("td");
      var celdaAu = document.createElement("td");
      var celdaAr = document.createElement("td");
      var celdaPa = document.createElement("td");

      var titulo = document.createTextNode(datos[i].titulo);
      var autor = document.createTextNode(datos[i].autor);
      var articulo = document.createTextNode(datos[i].articulo);
      var palabra = document.createTextNode(datos[i].palabrasClave);

      celdaTi.appendChild(titulo);
      celdaAu.appendChild(autor);
      celdaAr.appendChild(articulo);
      celdaPa.appendChild(palabra);


      hilera.appendChild(celdaTi);
      hilera.appendChild(celdaAu);
      hilera.appendChild(celdaAr);
      hilera.appendChild(celdaPa);

      tblBody.appendChild(hilera);

    }
    tabla.appendChild(tblBody);
    seccion.appendChild(tabla);
  }
}