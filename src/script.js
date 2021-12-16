(function () {
  var pokemons;

  // Get all Pokemons
  var getItems = () =>
    fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
      .then((response) => response.json())
      .then((data) => {
        pokemons = data.results;
        addToListElement(pokemons);
      });

  // Replaces the list of Pokemons with the filtered Pokemons
  var addToListElement = (pokemons) => {
    var list = document.getElementById("pokemons");
    list.innerHTML = "";

    console.log(pokemons);
    for (var pokemon of pokemons) {
      list.innerHTML +=
        '<li><a href="' + pokemon.url + '">' + pokemon.name + "<a/></li>";
    }
  };

  getItems();

  // Filter
  var filter = document.getElementById("search-input");
  filter.addEventListener("keydown", (event) => {
    var filteredPokemons = pokemons.filter((pokemon) =>
      pokemon.name.includes(event.target.value)
    );
    addToListElement(filteredPokemons);
  });
})();
