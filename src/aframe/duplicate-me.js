AFRAME.registerComponent('duplicate-me', {
  multiple: false,

  //propriété du composant
  schema: {
    //choisir un nom pour le paramètres, checker les types de la doc aframe
    nb: {type: 'int', default: 10},
    
  },
  //appelé une fois lors de l'initialisation du composant
  //méthode obligatoire
  init: function () { 
    // console.log(this.el);
    const count = 0;
    this.tick = AFRAME.utils.thottledTick(this.tick, 1000, this);

  },


  onEvent: function () {
    this.el.emit(this.data.emit);
  },

  //appelé à chaque fois que le composant est mis à jour
  update: function (oldData) {
   console.log('update-duplicate-me');
  },
 
  //appelé à chaque fois que le composant est supprimé
  remove: function () {
    this.data.target.removeEventListener(this.data.event, this.onEvent);
  },

  //va être appelé seulement qd la main boucle est prête
  tick: function (time, timeDelta) {
    if(this.count >= this.data.nb) return;
    this.count++;
    const clone = this.el.cloneNode(true);
    clone.setAttribute('position', 'z','-7');
    clone.setAttribute('position', 'y', '2');
    clone.removeAttribute('duplicate-me');
    //ici le clone n'est pas ajouter au dom
    document.querySelector('a-scene').appendChild(clone);


    // console.log('tick');
  }

});