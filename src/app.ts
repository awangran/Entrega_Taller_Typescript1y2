// Renderizado de la tabla
function renderTabla(seriesList: Serie[]): void {
  const tbody = document.getElementById("tablaSeries") as HTMLTableSectionElement;

  seriesList.forEach((s: Serie) => {
    const tr = document.createElement("tr");
    tr.dataset["id"] = String(s.id);
    tr.innerHTML = `
      <td>${s.id}</td>
      <td class="td-name">${s.name}</td>
      <td>${s.channel}</td>
      <td>${s.seasons}</td>
    `;
    tr.addEventListener("click", () => mostrarDetalle(s, tr));
    tbody.appendChild(tr);
  });

  // Promedio de temporadas
  const total: number = seriesList.reduce((acc, s) => acc + s.seasons, 0);
  const promedio: string = (total / seriesList.length).toFixed(1);

  const tfoot = document.getElementById("tablaFoot") as HTMLTableSectionElement;
  tfoot.innerHTML = `
    <tr>
      <td colspan="4">Seasons average: ${promedio}</td>
    </tr>
  `;
}

// Detalle al hacer clic
function mostrarDetalle(serie: Serie, trActivo: HTMLTableRowElement): void {
  document
    .querySelectorAll<HTMLTableRowElement>("tbody tr")
    .forEach((r) => r.classList.remove("selected"));
  trActivo.classList.add("selected");

  const imgHtml: string = serie.image
    ? `<img src="${serie.image}" class="card-img-top" alt="${serie.name}">`
    : "";

  const detalle = document.getElementById("detalle") as HTMLDivElement;
  detalle.innerHTML = `
    <div class="card">
      ${imgHtml}
      <div class="card-body">
        <h6 class="card-title">${serie.name}</h6>
        <p class="card-text">${serie.description}</p>
        <a href="${serie.link}" target="_blank" class="card-link">${serie.link}</a>
      </div>
    </div>
  `;
}

renderTabla(series);