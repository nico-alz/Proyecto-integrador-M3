import { Producto } from './Producto.js';
import { Carrito } from './Carrito.js';
import { Tienda } from './Tienda.js';

const productos = [
  new Producto(1, "Camiseta Negra", "camisetas", 45000, "assets/camiseta1.jpg"),
  new Producto(2, "Pantalón Cargo", "pantalones", 85000, "assets/pantalon1.jpg"),
  new Producto(3, "Gorra Urbana", "accesorios", 30000, "assets/gorra1.jpg"),
];

export const tienda = new Tienda(productos, new Carrito());
window.tienda = tienda;

setTimeout(() => {
  document.getElementById("main-header").classList.remove("oculto");
  tienda.mostrarProductos(productos);
}, 3000);
