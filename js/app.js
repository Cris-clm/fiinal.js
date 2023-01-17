
let articulos =
    [
        { id: 10, prenda: "zapatos", nombre: "zapatos Enzo Bonafé A", categoria: "casual", precio: 14150, marca: "Enzo Bonafé", color: "marron", imagen: "http://drive.google.com/uc?export=view&id=1nomq9AHEnzqzUQpRcUlDZyLcbmDZ55O9" },
        { id: 11, prenda: "zapatos", nombre: "zapatos Enzo Bonafé B", categoria: "casual", precio: 19000, marca: "Enzo Bonafé", color: "negro", imagen: "http://drive.google.com/uc?export=view&id=1rfTS9VS7Ee0Yze-2CdmL7ZBjfj0DsXu8" },
        { id: 12, prenda: "zapatos", nombre: "zapatos Enzo Bonafé C", categoria: "casual", precio: 17200, marca: "Enzo Bonafé", color: "marron", imagen: "http://drive.google.com/uc?export=view&id=1GI4pUClimFcBZNAhnpJb_nxCKch731a7" },
        { id: 13, prenda: "zapatos", nombre: "zapatos Santoni A", categoria: "salir", precio: 18000, marca: "Santoni", color: "negro", imagen: "http://drive.google.com/uc?export=view&id=1WEOmqcywddLSPeEkPiro07Drm8lb_Vph" },
        { id: 14, prenda: "zapatos", nombre: "zapatos Santoni B", categoria: "salir", precio: 19550, marca: "Santoni", color: "marron", imagen: "http://drive.google.com/uc?export=view&id=12zWjlUWaUz5TY6MvoGXHxjICouMvb55L" },
        { id: 15, prenda: "zapatos", nombre: "zapatos Santoni C", categoria: "salir", precio: 18600, marca: "Santoni", color: "negro", imagen: "http://drive.google.com/uc?export=view&id=1nwRAPphrk85AzZUUob9LKGNg3F9qn_nd" },
        { id: 20, prenda: "pantalones", nombre: "gabardina A", categoria: "vestir", precio: 13150, marca: "Tommy Hilfiger", color: "azul oscuro", imagen: "http://drive.google.com/uc?export=view&id=1o0XZ0FaCds_eibBaXabIYxPgSeD0dUvS" },
        { id: 21, prenda: "pantalones", nombre: "gabardina B", categoria: "vestir", precio: 13000, marca: "Tommy Hilfiger", color: "beige", imagen: "http://drive.google.com/uc?export=view&id=1ApQ7Q1P0V-CvI2q_BQnk7KqzwPqzQgVF" },
        { id: 22, prenda: "pantalones", nombre: "gabardina C", categoria: "vestir", precio: 13200, marca: "Tommy Hilfiger", color: "gris oscuro", imagen: "http://drive.google.com/uc?export=view&id=1x5IunsOrI_XT9QnkUoHw08So2gcpmPX9" },
        { id: 23, prenda: "pantalones", nombre: "gabardina D", categoria: "vestir", precio: 14000, marca: "Tommy Hilfiger", color: "negro", imagen: "http://drive.google.com/uc?export=view&id=1dC0Fcx7_inIBsrEe75079hozlOoMSTcw" },
        { id: 24, prenda: "pantalones", nombre: "jeans A", categoria: "diario", precio: 20550, marca: "Levi's", color: "azul petroleo", imagen: "http://drive.google.com/uc?export=view&id=1rX9D4bkz9DglwJXkrfFRcY5FUU1B3_r1" },
        { id: 25, prenda: "pantalones", nombre: "jeans B", categoria: "diario", precio: 24600, marca: "Levi's", color: "celeste", imagen: "http://drive.google.com/uc?export=view&id=1wVEu2Ktnl3NG-nD8IQiat7dYKmCip5wQ" },
        { id: 26, prenda: "pantalones", nombre: "jeans C", categoria: "diario", precio: 25550, marca: "Levi's", color: "azul", imagen: "http://drive.google.com/uc?export=view&id=1iwPs4KC6UAFlB6keoSr6vhVSBt4opXWm" },
        { id: 27, prenda: "pantalones", nombre: "jeans D", categoria: "diario", precio: 27600, marca: "Levi's", color: "gris oscuro", imagen: "http://drive.google.com/uc?export=view&id=1as7T0t81jZ9akxAlzb53TRhJ-zeSBgT3" },
        { id: 30, prenda: "buzos", nombre: "buzo canguro A", categoria: "vestir", precio: 13150, marca: "adidas", color: "blanco", imagen: "http://drive.google.com/uc?export=view&id=1r8HBHOQ-ZoMUQco3-e9iMOjon5WOEFWF" },
        { id: 31, prenda: "buzos", nombre: "buzo canguro B", categoria: "vestir", precio: 13000, marca: "adidas", color: "gris", imagen: "http://drive.google.com/uc?export=view&id=1GQ-dI84kVRKJ-7Gr0PoDDSosGtUUIM5E" },
        { id: 32, prenda: "buzos", nombre: "buzo canguro C", categoria: "vestir", precio: 13200, marca: "adidas", color: "negro", imagen: "http://drive.google.com/uc?export=view&id=1wdwXkdrw7Jk5STPdxDNPNPLBXk-afO4U" },
        { id: 33, prenda: "buzos", nombre: "buzo liso A", categoria: "vestir", precio: 14000, marca: "nike", color: "blanco", imagen: "http://drive.google.com/uc?export=view&id=1zqoMV1lLmT1pzG7OCwuGzKZJnaK8FbOU" },
        { id: 34, prenda: "buzos", nombre: "buzo liso B", categoria: "diario", precio: 20550, marca: "nike", color: "negro", imagen: "http://drive.google.com/uc?export=view&id=1jdxebahJhsr7b9_bHAy6u9YdatYqiYES" },
        { id: 35, prenda: "buzos", nombre: "buzo liso C", categoria: "diario", precio: 24600, marca: "nike", color: "rojo", imagen: "http://drive.google.com/uc?export=view&id=1IuwOCx3-OZCuikmKb-g3XFbsW5zIX8Vk" },
        { id: 36, prenda: "buzos", nombre: "buzo liso D", categoria: "diario", precio: 25550, marca: "nike", color: "azul marino", imagen: "http://drive.google.com/uc?export=view&id=11IfOY5zU-I8Tn0NhP9KEiIaQ6mH1aI6u" },
        { id: 40, prenda: "cardigan", nombre: "Cargigan liso A", categoria: "vestir", precio: 26500, marca: "zagreb", color: "azul ", imagen: "http://drive.google.com/uc?export=view&id=1hM3jHxMv7wP-9OP5zVNDJypZtrkxyDK2" },
        { id: 41, prenda: "cardigan", nombre: "Cargigan  liso B", categoria: "vestir", precio: 26000, marca: "zagreb", color: "gris claro ", imagen: "http://drive.google.com/uc?export=view&id=1l0pHC8O4m-8Yz3OJQleOxjUf1cu_zZvA" },
        { id: 42, prenda: "cardigan", nombre: "Cargigan  liso C", categoria: "vestir", precio: 27100, marca: "zagreb", color: "gris oscuro ", imagen: "http://drive.google.com/uc?export=view&id=1CzS0SZBQP4aVoljsSr3FreBgWo3OEOoY" },
        { id: 43, prenda: "cardigan", nombre: "Cargigan  liso D", categoria: "vestir", precio: 25100, marca: "zagreb", color: "negro", imagen: "http://drive.google.com/uc?export=view&id=12pelgpFWp0uvm3bJf0rRhcBGS5qviupH" },
        { id: 50, prenda: "camisas", nombre: "Camisa Hombre Entallada A", categoria: "vestir", precio: 21050, marca: "Dior", color: "Lisa Blanca ", imagen: "http://drive.google.com/uc?export=view&id=11s0qTUqXh7fY6u8hH6VadIzlfF5s-HiC" },
        { id: 51, prenda: "camisas", nombre: "Camisa Hombre Entallada B", categoria: "vestir", precio: 21000, marca: "Dior", color: "Lisa celeste", imagen: "http://drive.google.com/uc?export=view&id=150FXNwlAS7qfp6KCF4fMKwbOAA0eGdbE" },
        { id: 52, prenda: "camisas", nombre: "Camisa Hombre Entallada C", categoria: "vestir", precio: 25100, marca: "Dior", color: "Lisa Gris", imagen: "http://drive.google.com/uc?export=view&id=19Ai4kM0WTviMO8iE7GJ3NMxDD_FycU8f" },
        { id: 53, prenda: "camisas", nombre: "Camisa Hombre Entallada D", categoria: "vestir", precio: 22000, marca: "Dior", color: "Lisa Rosa", imagen: "http://drive.google.com/uc?export=view&id=1cB0zNOt2FAXKF9Nn5b2OR3AB707Uw6yW" },
        { id: 54, prenda: "camisas", nombre: "Camisa Hombre Entallada E", categoria: "vestir", precio: 22300, marca: "Dior", color: "Lisa Salmon", imagen: "http://drive.google.com/uc?export=view&id=1ILE62G9XxMc_rmqTomLwf0wwuAOB28oO" },
        { id: 55, prenda: "camisas", nombre: "camisa hombre Oxford F", categoria: "vestir", precio: 22100, marca: "Bowen", color: "gris claro", imagen: "http://drive.google.com/uc?export=view&id=1sNArYMM7EmoHG317VIvgvfGzTtKtMW6-" },
        { id: 56, prenda: "camisas", nombre: "camisa hombre Oxford G", categoria: "vestir", precio: 22250, marca: "Bowen", color: "gris topo", imagen: "http://drive.google.com/uc?export=view&id=1BOC6zi2Wtv4EC23-SjeiDoDD2eBu4MZq" },
    ]


let contenedorRenderCarrito = document.getElementById("contenedorRenderCarrito")
let contenedoRender = document.getElementById("contenedoRender")

let carrito = []
if (localStorage.getItem("carrito")) {
    carrito = JSON.parse(localStorage.getItem("carrito"))
}
renderCarrito(carrito)

//declacion de variables 
let filtroZapatos = document.getElementById("zapatos")
let filtroPantalones = document.getElementById("pantalones")
let filtroBuzos = document.getElementById("buzos")
let filtroCardigan = document.getElementById("cardigan")
let filtroCamisas = document.getElementById("camisas")
let cantidadCarrito = document.getElementById("cantidadCarrito")
let inicio = document.getElementById("inicio")



let btnComprar = document.getElementById("comprar")
btnComprar.addEventListener("click", () => {
    localStorage.removeItem("carrito")
    carrito = []
    renderCarrito(carrito)
})

filtroZapatos.addEventListener("click", renderizarArticulosFiltrados)
filtroZapatos.addEventListener("click", ocultarSlider)
filtroPantalones.addEventListener("click", renderizarArticulosFiltrados)
filtroPantalones.addEventListener("click", ocultarSlider)
filtroBuzos.addEventListener("click", renderizarArticulosFiltrados)
filtroBuzos.addEventListener("click", ocultarSlider)
filtroCardigan.addEventListener("click", renderizarArticulosFiltrados)
filtroCardigan.addEventListener("click", ocultarSlider)
filtroCamisas.addEventListener("click", renderizarArticulosFiltrados)
filtroCamisas.addEventListener("click", ocultarSlider)
inicio.addEventListener("click", volverInicio)




//funcion de filtrado de articulos 

function renderizarArticulosFiltrados(e) {
    if (e.target.id == "todos") {
        renderizarContenedor(articulos)
    } else {
        renderizarContenedor(articulos.filter(articulo => articulo.prenda.toLowerCase() == e.target.id))
    }
}
    comprobar(carrito)

    function comprobar() {
        if (localStorage.getItem("Carrito")) {
            carrito = JSON.parse(localStorage.getItem("Carrito"))
            renderCarrito(carrito)
           
        } 
    }

//funcion de filtrado de renderezar articulos 
function renderizarContenedor(arrayDeProductos) {
    contenedoRender.innerHTML = ""
    for (const producto of arrayDeProductos) {
        let tarjeta = document.createElement("div")
        tarjeta.className = "tarjeta"
        tarjeta.innerHTML = `
        <h3>${producto.nombre}</h3>
        <h4>$${producto.precio}</h4>
        <h4>${producto.marca}</h4>
        <h4>${producto.color}</h4>
        <img src=${producto.imagen}>
        <button class="btn" id= ${producto.id}>Agregar al Carrito</button>
        `
        contenedoRender.appendChild(tarjeta)
    }
    let botones = document.getElementsByClassName("btn")
    for (const btn of botones) {
        btn.addEventListener("click", agreCarrito)
    }
}


//funcion de agregar a carrito
function agreCarrito(e) {
    let articuloBuscado = articulos.find(articulo => articulo.id == e.target.id)
    let posicionArticuloBuscado = carrito.findIndex(articulo => articulo.id == articuloBuscado.id)

    if (posicionArticuloBuscado != -1) {
        carrito[posicionArticuloBuscado].unidades++
        carrito[posicionArticuloBuscado].subtotal = carrito[posicionArticuloBuscado].unidades * carrito[posicionArticuloBuscado].precioUnitario

        carritoJSON = JSON.stringify(carrito)
        localStorage.setItem("Carrito", carritoJSON)
    } else {
        carrito.push({
            id: articuloBuscado.id, nombre: articuloBuscado.nombre, color: articuloBuscado.color, precioUnitario:
                articuloBuscado.precio, unidades: 1, subtotal: articuloBuscado.precio

        })
        carritoJSON = JSON.stringify(carrito)
        localStorage.setItem("Carrito", carritoJSON)
    }
    localStorage.setItem("Carrito", JSON.stringify(carrito))
    renderCarrito(carrito)
}
//funcion de renderizado carrito 
function renderCarrito(arrayDeProductos) {
    contenedorRenderCarrito.innerHTML = ''
    for (const producto of arrayDeProductos) {
        contenedorRenderCarrito.innerHTML += `
        <div class="flex">
        <table>
        <theat>
        <th>Nombre</th> <th>Color</th> <th>Precio Unitario</th><th>Unidades</th><th>Subtotal</th>
        </theat>
        <tr>
        <td>${producto.nombre}</td> 
        <td>${producto.color}</td>
        <td>$${producto.precioUnitario}</td>
        <td>${producto.unidades}</td>
        <td>$${producto.subtotal}</td>
        </tr>
        </table>
        </div>
        `

    }
    let total = carrito.reduce((acc, valorActual) => acc + valorActual.subtotal, 0)
    contenedorRenderCarrito.innerHTML += `
        <div class="container-total"><h3>Total De Compra: ${total}$</h3></div>
        `

}

function ocultarSlider() {
    document.getElementById("contenedor-slider").style.display = "none";
    document.getElementById("contenedoRender").style.display = "flex";
}

function volverInicio() {
    document.getElementById("contenedor-slider").style.display = "block";
    document.getElementById("contenedoRender").style.display = "none";
}
let vaciar = document.getElementById("vaciar")
vaciar.addEventListener("click", vaciarCarrito)

function vaciarCarrito() {
    localStorage.removeItem("Carrito")
    carrito = []
    renderCarrito(carrito)
}



