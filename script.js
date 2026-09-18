let showingMonsters = false;

function toggleScary() {
    showingMonsters = !showingMonsters;
    document.getElementById("cute-content").hidden = showingMonsters;
    document.getElementById("monster-content").hidden = !showingMonsters;
    document.getElementById("content-title").textContent = showingMonsters ? "Scary Monsters" : "Cute and Cuddly";
    document.getElementById("scary-button").textContent = showingMonsters ? "Bring Back the Cute" : "Show Scary Monsters";
}
