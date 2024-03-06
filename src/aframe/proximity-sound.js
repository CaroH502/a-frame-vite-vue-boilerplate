// Enregistrez un nouveau composant A-Frame pour la détection de proximité
AFRAME.registerComponent('proximity-sound', {
    schema: {
      target: {type: 'selector'}, // Sélecteur de l'objet cible (le dragon dans ce cas)
      sound: {type: 'selector'}, // Sélecteur de l'élément audio à jouer
      distance: {type: 'number'} // Distance de déclenchement pour jouer le son
    },
    init: function () {
      this.playSound = this.playSound.bind(this);
    },
    playSound: function () {
      // Calculez la distance entre la position actuelle et la cible
      const distance = this.el.object3D.position.distanceTo(this.data.target.object3D.position);
      // Jouez le son si la distance est inférieure au seuil spécifié
      if (distance < this.data.distance) {
        this.data.sound.components.sound.playSound();
      }
    },
    tick: function () {
      // Vérifiez périodiquement la distance toutes les 100 millisecondes
      this.playSound();
    }
  });
  