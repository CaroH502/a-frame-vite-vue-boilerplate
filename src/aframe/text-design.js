AFRAME.registerComponent("text-design", {
    schema: {
      value: {type: 'string', default: ''},
      width: {type: 'number', default: 2}, // Largeur du texte
      lineHeight: {type: 'number', default: 0.2}, // Hauteur de ligne estimée, ajustez selon le design
      padding: {type: 'number', default: 0.1}, // Padding vertical total pour le haut et le bas
      nbreLines: {type: 'number', default: 1} // Nombre de lignes du texte
    },
    init: function () {
      let data = this.data; // Accès aux données du schema
      let text = document.createElement("a-text");
      let el = this.el;
  
      // Définir les attributs de texte
      text.setAttribute("value", data.value);
      text.setAttribute("width", data.width);
      text.setAttribute("position", "0.9 0 0");
      text.setAttribute("align", "center");
  
      // Calculer la hauteur basée sur le nombre de lignes, la hauteur de ligne et le padding
      let height = data.nbreLines * data.lineHeight + 2 * data.padding;
  
      text.setAttribute("geometry", `primitive: plane; width: ${data.width}; height: ${height}`);
  
      text.setAttribute("material", "color: black; opacity: 0.35; side: double; transparent: true;");
  
      el.appendChild(text);
    }
  });
  