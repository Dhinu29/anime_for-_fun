const animeList = [
    { title: "Naruto", image: "https://example.com/naruto.jpg" },
    { title: "One Piece", image: "https://example.com/onepiece.jpg" },
    { title: "Attack on Titan", image: "https://example.com/aot.jpg" },
    { title: "My Hero Academia", image: "https://example.com/mha.jpg" },
];

document.addEventListener("DOMContentLoaded", () => {
    const animeListElement = document.getElementById("anime-list");
    const searchBar = document.getElementById("search-bar");

    function displayAnimeList(animeArray) {
        animeListElement.innerHTML = "";
        animeArray.forEach(anime => {
            const animeItem = document.createElement("div");
            animeItem.classList.add("anime-item");
            
            animeItem.innerHTML = `
                <img src="${anime.image}" alt="${anime.title}">
                <h3>${anime.title}</h3>
            `;
            
            animeListElement.appendChild(animeItem);
        });
    }

    searchBar.addEventListener("keyup", (e) => {
        const searchString = e.target.value.toLowerCase();
        const filteredAnime = animeList.filter(anime => {
            return anime.title.toLowerCase().includes(searchString);
        });
        displayAnimeList(filteredAnime);
    });

    displayAnimeList(animeList);
});
