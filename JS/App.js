import { Producto } from './Producto.js';
import { Carrito } from './Carrito.js';
import { Tienda } from './Tienda.js';

const productos = [
new Producto(1, "Sombra Urbana", "camisetas", 45000, "Imagenes de productos/camisa 7.jpg", "Camiseta negra con actitud callejera y estilo minimalista."),
new Producto(2, "Gris Neutro", "camisetas", 45000, "Imagenes de productos/camisa 8.jpg", "Diseño limpio para días casuales con un toque urbano."),
new Producto(3, "Violeta Rebelde", "camisetas", 45000, "Imagenes de productos/camisa 9.jpg", "Camiseta morada para quienes rompen las reglas con estilo."),
new Producto(4, "Denim Claro", "pantalones", 85000, "Imagenes de productos/pantalon 1.jpg", "Jean clásico para días brillantes y looks relajados."),
new Producto(5, "Denim Nocturno", "pantalones", 85000, "Imagenes de productos/pantalon 3.jpg", "Jean oscuro ideal para noches urbanas y outfits elegantes."),
new Producto(6, "Cargo Táctico", "pantalones", 85000, "Imagenes de productos/pantalon 4.jpg", "Pantalón cargo negro con bolsillos funcionales y estilo callejero."),
new Producto(7, "Cargo Cemento", "pantalones", 85000, "Imagenes de productos/pantalon 5.jpg", "Cargo gris para un look relajado y moderno."),
new Producto(8, "Cargo Arena", "pantalones", 85000, "Imagenes de productos/pantalon 6.jpg", "Pantalón beige con vibra desértica y urbana."),
new Producto(9, "Dual Core", "buzos", 85000, "Imagenes de productos/camisa 10.jpg", "Buzo negro con gris, contraste perfecto para días fríos."),
new Producto(10, "Polar Blanco", "buzos", 85000, "Imagenes de productos/camisa 11.jpg", "Buzo blanco con detalles oscuros, limpio pero audaz."),
new Producto(11, "Azul Profundo", "buzos", 85000, "Imagenes de productos/camisa 12.jpg", "Buzo blanco con azul, fresco y moderno para cualquier ocasión."),
new Producto(12, "Visión Callejera", "accesorios", 85000, "Imagenes de productos/gafas.jpg", "Gafas oscuras con actitud urbana y diseño clásico."),
new Producto(13, "Trama Plateada", "accesorios", 85000, "Imagenes de productos/Anillos.jpg", "Anillos con textura metálica y carácter rebelde."),
new Producto(14, "Tiempo Cero", "accesorios", 85000, "Imagenes de productos/reloj.jpg", "Reloj minimalista para quienes dominan su tiempo."),
];

export const tienda = new Tienda(productos, new Carrito());
window.tienda = tienda;

setTimeout(() => {
  document.getElementById("main-header").classList.remove("oculto");
  tienda.mostrarProductos(productos);
}, 3000);
