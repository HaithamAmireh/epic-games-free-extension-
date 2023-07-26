const url = 'https://epic-free-games.p.rapidapi.com/epic-free-games';
const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '6f335f07dfmsh1d2e866931fd32ap122d39jsn295e66eb0c55',
    'X-RapidAPI-Host': 'epic-free-games.p.rapidapi.com'
  }
};

const mainCard = document.getElementById("main-card")

async function fetchData() {
  const res = await fetch(url, options);
  const record = await res.json();
  console.log(record)
  mainCard.innerHTML = record.map(item =>
    `
    <div id="child-container">
    <img id="game-preview" src="${item.offerImageTall}" alt="Game-Preview">
    <div id="content">
    <h1 id="game-title">${item.name}</h1>
    <p id="game-description">${item.description}</p>
    <a id="game-url" href="${item.appUrl}" target=”_blank">Game Page</a>
    </div>
    </div>
  `
  )

}
fetchData();