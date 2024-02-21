
export function decalage() {
    // Cette fonction applique un décalage vertical aléatoire à l'élément spécifié.
    const decalageY = Math.random() * (-0.02 - 0.02);
    // Ajoute le décalageY à la position Y actuelle de l'élément.
    console.log(decalageY)
    return decalageY;
}
