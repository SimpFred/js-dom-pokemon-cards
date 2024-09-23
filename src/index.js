
function renderCards(data) {
    const cards = document.querySelector(".cards");
  
    data.forEach((pokemon) => {
      const card = document.createElement("li");
      card.className = "card";
  
      const title = createTitle(pokemon);
      const img = createImage(pokemon);
      const stats = createStats(pokemon);
      const games = createGames(pokemon);
      const showMoreBtn = createShowMoreButton(games);
      const toggleImageBtn = createToggleImageButton(pokemon, img);
  
      card.appendChild(title);
      card.appendChild(img);
      card.appendChild(toggleImageBtn);
      card.appendChild(stats);
      card.appendChild(document.createElement("h3")).textContent = "Appears in:";
      card.appendChild(games);
      card.appendChild(showMoreBtn);
      cards.appendChild(card);
    });
  }

function createTitle(pokemon) {
    const title = document.createElement("h2");
    title.className = "card--title";
    const capitalizedName = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);
    title.textContent = capitalizedName;
    return title;
  }

  function createImage(pokemon) {
    const img = document.createElement("img");
    img.className = "card--img";
    img.width = 256;
    img.height = 256;
    img.src = pokemon.sprites.other["official-artwork"].front_default;
    return img;
  }

  function createStats(pokemon) {
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
  
    return text;
  }

  function createGames(pokemon) {
    const games = document.createElement("ul");
    games.className = "card--games";
    games.style.display = "none";
    const gameNames = pokemon.game_indices.map((game) => game.version.name);
    gameNames.forEach((gameName) => {
      const li = document.createElement("li");
      li.textContent = gameName;
      games.appendChild(li);
    });
  
    return games;
  }

  function createShowMoreButton(games) {
    const showMoreBtn = document.createElement("button");
    showMoreBtn.className = "show-more-btn";
    showMoreBtn.textContent = "Visa mer";
    showMoreBtn.addEventListener("click", () => {
      if (games.style.display === "none" || games.style.display === "") {
        games.style.display = "grid";
        showMoreBtn.textContent = "Visa mindre";
      } else {
        games.style.display = "none";
        showMoreBtn.textContent = "Visa mer";
      }
    });
  
    return showMoreBtn;
  }

  function createToggleImageButton(pokemon, img) {
    const toggleImageBtn = document.createElement("button");
    toggleImageBtn.className = "toggle-image-btn";
    toggleImageBtn.textContent = "Toggle Image";
  
    const imageUrls = [
      pokemon.sprites.back_default,
      pokemon.sprites.back_female,
      pokemon.sprites.back_shiny,
      pokemon.sprites.back_shiny_female,
      pokemon.sprites.front_default,
      pokemon.sprites.front_female,
      pokemon.sprites.front_shiny,
      pokemon.sprites.front_shiny_female,
      pokemon.sprites.other.dream_world.front_default,
      pokemon.sprites.other.dream_world.front_female,
      pokemon.sprites.other["official-artwork"].front_default,
    ].filter(url => url !== null);
  
    let currentImageIndex = imageUrls.indexOf(img.src);
    toggleImageBtn.addEventListener("click", () => {
      currentImageIndex = (currentImageIndex + 1) % imageUrls.length;

      img.src = imageUrls[currentImageIndex];
    });
  
    return toggleImageBtn;
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    renderCards(data);
  });