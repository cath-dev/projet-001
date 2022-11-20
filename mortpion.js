
// On cree un tableau de 9 cases
let jeu = new Array(9);
let currentPlayer = "X";
// On cree une boucle pour remplir le tableau

function checkWin(player) {
    // On verifie si le joueur a gagne
    if (jeu[0] == player && jeu[1] == player && jeu[2] == player) {
        return true;
    }
    if (jeu[3] == player && jeu[4] == player && jeu[5] == player) {
        return true;
    }
    if (jeu[6] == player && jeu[7] == player && jeu[8] == player) {
        return true;
    }
    if (jeu[0] == player && jeu[3] == player && jeu[6] == player) {
        return true;
    }
    if (jeu[1] == player && jeu[4] == player && jeu[7] == player) {
        return true;
    }
    if (jeu[2] == player && jeu[5] == player && jeu[8] == player) {
        return true;
    }
    if (jeu[0] == player && jeu[4] == player && jeu[8] == player) {
        return true;
    }
    if (jeu[2] == player && jeu[4] == player && jeu[6] == player) {
        return true;
    }
    return false;
}

for (let i = 0; i < 3; i++) {
    const row = document.createElement('div');
    row.classList.add('row');
    for (let j = 0; j < 3; j++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        row.appendChild(cell);

        // On ajoute un event listener sur chaque cellule
        cell.addEventListener('click', () => {
            // On verifie si la case est vide
            if (cell.textContent === "") {
                // On ajoute le joueur courant dans la case
                cell.textContent = currentPlayer;
                // On ajoute le joueur courant dans le tableau
                jeu[i * 3 + j] = currentPlayer;
                // On verifie si le joueur courant a gagne
                if (checkWin(currentPlayer)) {
                    alert(`${currentPlayer} a gagne`);
                }
                // On change de joueur
                currentPlayer = currentPlayer === "X" ? "O" : "X";
            }
        });
    }
    document.getElementById('jeu').appendChild(row);
}
