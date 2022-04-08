// import pokemon array
import pokemonArray from "./data/pokemon.js";

// select the main container
const container = document.querySelector(".card-container");

const toProper = (string) => {
  return string.name[0].toUpperCase() + string.name.substring(1);
}

const generateImage = (pokemon) => {
  return `<img class="card__image" src="${pokemon.sprite}" alt="${toProper(pokemon)}"/>`
}

const generateCardContent = (pokemon) => {
  const heading = `<h2 class="card__heading">${toProper(pokemon)} </h2>`
  let typeDescr = pokemon.types.join(" & ")
  const text = `<p class="card__text">${toProper(pokemon)} (#${pokemon.id}) is a ${typeDescr} type pokemon</p>`
  return `<div class="card__content">${heading} ${text}</div>`
}

// for each pokemon in array
pokemonArray.forEach(pokemon => {
  // generate HTML for a card from pokemon object
  const card = `<article class="card">${generateImage(pokemon)}${generateCardContent(pokemon)}</article>`;
  container.innerHTML += card;
})



// add HTML to DOM