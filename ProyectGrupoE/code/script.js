const cursos = [//Creación de cursos
  { id: 1, nombre: "Curso de JavaScript", precio: 20 },
  { id: 2, nombre: "Curso de HTML y CSS", precio: 15 },
  { id: 3, nombre: "Curso de React", precio: 30 },
  { id: 4, nombre: "Curso de Node.js", precio: 25 }
];
//Carrito de compras
let carrito = [];

const contenedorCursos = document.getElementById("cursos");
const listaCarrito = document.getElementById("carrito");
const total = document.getElementById("total");
const botonComprar = document.getElementById("comprar");
const inputBuscar = document.getElementById("buscar");
const filtroPrecio = document.getElementById("filtro-precio");

// Mostrar cursos
function mostrarCursos(lista) {
  contenedorCursos.innerHTML = "";
  lista.forEach(curso => {
    const div = document.createElement("div");
    div.className = "card";
    div.innerHTML = `
      <h3><a href="detalleCurso.html?id=${curso.id}">${curso.nombre}</a></h3>
      <p>Precio: $${curso.precio}</p>
      <button onclick="agregarAlCarrito(${curso.id})">Agregar al carrito</button>
    `;
    contenedorCursos.appendChild(div);
  });
}

// Filtro combinado
function aplicarFiltros() {
  const texto = inputBuscar.value.toLowerCase();
  const precioMax = parseFloat(filtroPrecio.value) || Infinity;

  const filtrados = cursos.filter(curso => {
    const coincideNombre = curso.nombre.toLowerCase().includes(texto);
    const coincidePrecio = curso.precio <= precioMax;
    return coincideNombre && coincidePrecio;
  });

  mostrarCursos(filtrados);
}

// Buscar y filtrar
if (inputBuscar) inputBuscar.addEventListener("input", aplicarFiltros);
if (filtroPrecio) filtroPrecio.addEventListener("input", aplicarFiltros);

// Agregar al carrito sin duplicar
function agregarAlCarrito(id) {
  const curso = cursos.find(c => c.id === id);
  if (!carrito.some(c => c.id === id)) {
    carrito.push(curso);
    actualizarCarrito();
  } else {
    alert("Este curso ya está en el carrito.");
  }
}

function eliminarDelCarrito(index) {
  carrito.splice(index, 1);
  actualizarCarrito();
}

// Actualizar el carrito
function actualizarCarrito() {
  if (!listaCarrito) return;
  listaCarrito.innerHTML = "";
  carrito.forEach((curso, index) => {
    const li = document.createElement("li");
    li.innerHTML = `
      ${curso.nombre} - $${curso.precio}
      <button onclick="eliminarDelCarrito(${index})">Eliminar</button>
    `;
    listaCarrito.appendChild(li);
  });

  const totalPagar = carrito.reduce((sum, c) => sum + c.precio, 0);
  total.textContent = `Total a pagar: $${totalPagar}`;
}

// Confirmar compra
if (botonComprar) {
  botonComprar.addEventListener("click", () => {
    if (carrito.length === 0) {
      alert("El carrito está vacío");
      return;
    }

    const confirmar = confirm("¿Estás seguro de comprar estos cursos?");
    if (confirmar) {
      const existentes = JSON.parse(localStorage.getItem("comprados")) || [];
      const conFecha = carrito.map(c => ({ ...c, fecha: new Date().toLocaleDateString() }));
      const actualizados = [...existentes, ...conFecha];
      localStorage.setItem("comprados", JSON.stringify(actualizados));
      carrito = [];
      actualizarCarrito();
      alert("¡Compra realizada con éxito!");
    }
  });
}

// Inicializar
if (contenedorCursos) {
  mostrarCursos(cursos);
}