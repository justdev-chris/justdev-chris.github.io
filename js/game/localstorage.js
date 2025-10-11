// Game data
let fish = 0;
let powerLevel = 1;
let minigameWins = 0;
let unlockedSkins = ['default'];
let totalClicks = 0;
let fishPerSecond = 0;
let comboMeter = 0;
let purrCrystals = 0;
let evolutionLevel = 0;
let catSkin = 'default';

// Save selected game data to localStorage
function saveGame() {
  const gameState = {
    fish,
    powerLevel,
    minigameWins,
    unlockedSkins,
    totalClicks,
    fishPerSecond,
    comboMeter,
    purrCrystals,
    evolutionLevel,
    catSkin
  };
  localStorage.setItem('catClickerSave', JSON.stringify(gameState));
}

// Load selected game data from localStorage
function loadGame() {
  const saved = localStorage.getItem('catClickerSave');
  if (!saved) return;
  const gameState = JSON.parse(saved);
  fish = gameState.fish ?? fish;
  powerLevel = gameState.powerLevel ?? powerLevel;
  minigameWins = gameState.minigameWins ?? minigameWins;
  unlockedSkins = gameState.unlockedSkins ?? unlockedSkins;
  totalClicks = gameState.totalClicks ?? totalClicks;
  fishPerSecond = gameState.fishPerSecond ?? fishPerSecond;
  comboMeter = gameState.comboMeter ?? comboMeter;
  purrCrystals = gameState.purrCrystals ?? purrCrystals;
  evolutionLevel = gameState.evolutionLevel ?? evolutionLevel;
  catSkin = gameState.catSkin ?? catSkin;
}

// Auto-save every 10 seconds
setInterval(saveGame, 10000);

// Load game on start
window.addEventListener('load', () => {
  loadGame();
});
