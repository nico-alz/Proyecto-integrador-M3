export class Carrito {
  constructor() {
    this.items = [];
  }

  agregar(producto) {
    this.items.push(producto);
    document.getElementById("contadorCarrito").textContent = this.items.length;
  }

  obtenerTotal() {
    return this.items.reduce((acc, item) => acc + item.precio, 0);
  }

  listar() {
    return this.items;
  }

  vaciar() {
    this.items = [];
  }
}
