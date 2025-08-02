function mostrarPersonas(lista) {
  const ul = document.getElementById("lista-personas");
  ul.innerHTML = ""; // Limpiar
  lista.forEach(persona => {
    const li = document.createElement("li");
    li.innerHTML = `
      <strong>${persona.nombre}</strong><br>
      ${persona.cargo}<br>
      <a href="mailto:${persona.email}">${persona.email}</a><br>
      <span>📞 ${persona.telefono}</span>
    `;
    ul.appendChild(li);
  });
}

function filtrarPersonas() {
  const filtro = document.getElementById("buscador").value.toLowerCase();
  const filtradas = personas.filter(p =>
    p.nombre.toLowerCase().includes(filtro) ||
    p.cargo.toLowerCase().includes(filtro)
  );
  mostrarPersonas(filtradas);
}

document.addEventListener("DOMContentLoaded", () => mostrarPersonas(personas));
