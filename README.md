# Exercice : Utilisation de `readline`

Cet exercice a pour but de demander à l'utilisateur de saisir un nombre dans le terminal et ensuite afficher ce nombre. Ce code suit une logique très naturelle : on prépare les outils, on ouvre la discussion, on pose une question, on transforme la réponse, on affiche le résultat et on raccroche.

## Objectifs de l'exercice

Voici les étapes détaillées de notre logique :

* **La mise en place** : Une fois l'outil importé, on crée une interface de communication. On explique au programme que l'entrée des données se fera par le clavier (`process.stdin`), et que la sortie se fera sur l'écran (`process.stdout`). C'est comme si on ouvrait une ligne téléphonique entre l'ordinateur et l'utilisateur.
* **La question** : Ensuite, on pose la question. Le programme affiche à l'écran le message "Entrez un nombre :" et se met en attente. Quand l'utilisateur tape sa réponse et appuie sur Entrée, cette réponse est stockée dans une variable qui s'appelle `answer`. À ce stade, la réponse est encore du texte.
* **La conversion** : C'est pour cela que l'étape suivante est de convertir ce texte en un vrai nombre grâce à `Number(answer)`. On range ce vrai nombre dans une nouvelle variable `number`.
* **L'affichage** : Après cela, on affiche simplement le résultat à l'écran avec un `console.log`.
* **La fermeture** : Enfin, pour terminer proprement, on ferme la communication avec `rl.close()`. Si on oublie cette étape, le programme reste bloqué et ne se ferme jamais.

##  Le Code

Voici le script complet (fichier `index.js`) qui applique cette logique :

```javascript
const readline = require("node:readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Entrez un nombre : ", (answer) => {
  const number = Number(answer);
  console.log("Le nombre est :", number);
  rl.close();
});