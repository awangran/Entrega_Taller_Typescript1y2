"use strict";
class Serie {
    constructor(id, name, channel, seasons, description, link, image) {
        this.id = id;
        this.name = name;
        this.channel = channel;
        this.seasons = seasons;
        this.description = description;
        this.link = link;
        this.image = image;
    }
}
const series = [
    new Serie(1, "Breaking Bad", "AMC", 5, "Set and filmed in Albuquerque, New Mexico, the series tells the story of Walter White, a struggling and depressed high school chemistry teacher who is diagnosed with lung cancer", "https://www.amc.com/shows/breaking-bad", "src/images/breakingbad.jpeg"),
    new Serie(2, "Orange Is the New Black", "Netflix", 6, "The series begins revolving around Piper Chapman, a woman in her thirties living in New York City who is sentenced to 15 months in Litchfield Penitentiary", "https://www.netflix.com/co/title/70242311", "src/images/orange.jpeg"),
    new Serie(3, "Game of Thrones", "HBO", 7, "American fantasy drama", "https://www.hbo.com/game-of-thrones", "src/images/got.jpeg"),
    new Serie(4, "The Big Bang Theory", "CBS", 12, "Leonard and Sheldon are brilliant physicists—geniuses in the laboratory but socially challenged everywhere else. Enter beautiful, street-smart neighbor Penny, who aims to teach them a thing or two about life. Despite their on-again, off-again relationship in the past, Leonard and Penny have finally gotten married. Even Sheldon has found a female companion, entering into a relationship agreement with neurobiologist Amy Farrah Fowler, and he recently took their relationship to the next level by marrying her after a long courtship. In their free time, Leonard and Sheldon enjoy fantasy role-playing games with their ever-expanding universe of friends, including fellow scientists Koothrappali, Wolowitz, and Wolowitz’s adorable microbiologist wife, Bernadette, who is adjusting to life with their two children.", "https://www.cbs.com/shows/big_bang_theory/about/", "src/images/bigbang.jpeg"),
    new Serie(5, "Sherlock", "BBC", 4, "Sherlock depicts consulting detective Sherlock Holmes (Benedict Cumberbatch) solving various mysteries in modern-day London. Holmes is assisted by his flatmate and friend, Dr John Watson (Martin Freeman), who has returned from military service in Afghanistan with the Royal Army Medical Corps", "https://www.bbc.co.uk/programmes/b018ttws", "src/images/sherlock.jpeg"),
    new Serie(6, "A Very English Scandal", "BBC", 2, "A Very English Scandal is a fact-based three-part British television comedy-drama miniseries based on John Preston's book of the same name.", "https://www.bbc.co.uk/programmes/p065smy4", "src/images/english.jpeg"),
];
// Renderizado de la tabla
function renderTabla(seriesList) {
    const tbody = document.getElementById("tablaSeries");
    seriesList.forEach((s) => {
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
    const total = seriesList.reduce((acc, s) => acc + s.seasons, 0);
    const promedio = (total / seriesList.length).toFixed(1);
    const tfoot = document.getElementById("tablaFoot");
    tfoot.innerHTML = `
    <tr>
      <td colspan="4">Seasons average: ${promedio}</td>
    </tr>
  `;
}
// Detalle al hacer clic
function mostrarDetalle(serie, trActivo) {
    document
        .querySelectorAll("tbody tr")
        .forEach((r) => r.classList.remove("selected"));
    trActivo.classList.add("selected");
    const imgHtml = serie.image
        ? `<img src="${serie.image}" class="card-img-top" alt="${serie.name}">`
        : "";
    const detalle = document.getElementById("detalle");
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
