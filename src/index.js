function renderCards(data) {
  data.forEach((pokemon) => {
    const cards = document.querySelector(".cards");
    const card = document.createElement("li");
    card.className = "card";

    const title = document.createElement("h2");
    title.className = "card--title";
    title.textContent = pokemon.name;

    const img = document.createElement("img");
    img.className = "card--img";
    img.width = 256;
    img.src = pokemon.sprites.other["official-artwork"].front_default;

    const text = document.createElement("ul");
    text.className = "card--text";
    const stats = [
      "hp",
      "attack",
      "defense",
      "special-attack",
      "special-defense",
      "speed",
    ];

    stats.forEach((stat) => {
      const li = document.createElement("li");
      li.textContent = `${stat.toUpperCase()}: ${
        pokemon.stats.find((s) => s.stat.name === stat).base_stat
      }`;
      text.appendChild(li);
    });

    card.appendChild(title);
    card.appendChild(img);
    card.appendChild(text);
    cards.appendChild(card);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  renderCards(data);
});
