export class Tienda {
  constructor(productos, carrito) {
    this.productos = productos;
    this.carrito = carrito;
  }

  mostrarProductos(lista) {
    const contenedor = document.getElementById("catalogo");
    contenedor.innerHTML = "";
    lista.forEach((producto) => {
      const div = document.createElement("div");
      div.className = "producto";
      div.innerHTML = `
        <img src="${producto.imagen}" alt="${producto.nombre}" />
        <h3>${producto.nombre}</h3>
        <p>$${producto.precio.toLocaleString()}</p>
        <button onclick="tienda.agregarAlCarrito(${producto.id})">Agregar al carrito</button>
      `;
      contenedor.appendChild(div);
    });
  }

  filtrarCategoria(categoria) {
    if (categoria === "todos") {
      this.mostrarProductos(this.productos);
    } else {
      const filtrados = this.productos.filter(p => p.categoria === categoria);
      this.mostrarProductos(filtrados);
    }
  }

  agregarAlCarrito(id) {
    const producto = this.productos.find(p => p.id === id);
    this.carrito.agregar(producto);
  }

  verCarrito() {
    const lista = document.getElementById("listaCarrito");
    const total = document.getElementById("totalCarrito");
    const items = this.carrito.listar();
    lista.innerHTML = "";
    items.forEach((item) => {
      const li = document.createElement("li");
      li.textContent = `${item.nombre} - $${item.precio.toLocaleString()}`;
      lista.appendChild(li);
    });
    total.textContent = `Total: $${this.carrito.obtenerTotal().toLocaleString()}`;
    document.getElementById("carrito").classList.remove("oculto");
  }

  cerrarCarrito() {
    document.getElementById("carrito").classList.add("oculto");
  }
}
