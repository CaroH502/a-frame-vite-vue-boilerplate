
import {decalage} from'../utils/decalage.js'
import { randomHsl } from '../utils/color.js';

AFRAME.registerComponent('multiplier', {
    multiple: false,
  
    //propriété du composant
    schema: {
        //taille de base d'une tuile
        tileSize: {type: 'number', default: 0.3},
        //cols le nbre de tuiles sur l'axe z
        cols: {type: 'int', default: 10},
        //rows le nbre de tuiles sur l'axe x
        rows: {type: 'int', default: 10 },
        //distance entre les tuiles
        offset: {type: 'number', default: 0.02},
      
    },
    //appelé une fois lors de l'initialisation du composant
    //méthode obligatoire
    init: function () { 
        //double boucle permettant de poser les tuill
        for (let i = 0; i < this.data.rows; i++) {
            for (let j = 0; j < this.data.cols; j++) {
                //set l'attribut color si i et j sont les deux paires OU i et j sont les deux impaires
                if ((i % 2 == 0 && j % 2 == 0) || (i % 2 != 0 && j % 2 != 0)) {
                    this.el.setAttribute('color', "tomato"); 
                } else{
                    this.el.setAttribute('color', "blue");
                }
                if (i == 0 && j == 0) continue;
                const clone = this.el.cloneNode(true);
                clone.removeAttribute('position');
                clone.setAttribute('position', {
                    x: this.el.object3D.position.x + (j * this.data.tileSize) + (j * this.data.offset),
                    y: this.el.object3D.position.y + decalage(), 
                    z: this.el.object3D.position.z + (i * this.data.tileSize) + (i * this.data.offset)
                  });
                clone.removeAttribute('multiplier');
                document.querySelector('a-scene').appendChild(clone);

            }
        }     
    },

  });