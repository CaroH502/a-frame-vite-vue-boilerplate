AFRAME.registerComponent('look-at', {
  multiple: false,

  //propriété du composant
  //correction dans le gitHub de Chabloz
  schema: {
    target: {type: 'selector'},
    
  },
  init: function () { 
  
  },


  onEvent: function () {
  },

  //appelé à chaque fois que le composant est mis à jour
  update: function (oldData) {
   console.log('update-look-at');
  },
 
  //appelé à chaque fois que le composant est supprimé
  remove: function () {
  },
});