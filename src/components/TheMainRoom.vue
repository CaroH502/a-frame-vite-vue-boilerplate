<script setup>
import { ref } from 'vue';
//import { randomHsl } from '../utils/color.js';
//import BoxColorChanging from './BoxColorChanging.vue';
import PortalTeleporter from './PortalTeleporter.vue';
import { copyPosition, copyRotation } from '../utils/aframe.js';
import '../aframe/bind-position.js';
import '../aframe/bind-rotation.js';

//import ExitDoor from "./ExitDoor.vue";
//import '../aframe/life-like-automaton.js';

const isCorrectItemDropped = ref(false);
const isEggDropped = ref(false);

function grabTheThing(evt) {
  // if something already grabbed, switch it
  const el = evt.target;
  const dropZoneId = evt.target.id;
  console.log('dropZoneId - grab', dropZoneId);
  const grabbedEl = document.querySelector('[data-grabbed]');
  
  if (grabbedEl) {
    grabbedEl.removeAttribute('bind-position');
    grabbedEl.removeAttribute('bind-rotation');
    copyPosition(el, grabbedEl);
    copyRotation(el, grabbedEl);
    delete grabbedEl.dataset.grabbed;
    delete grabbedEl.dataset.dropped;
    if (el.dataset.dropped) {
      grabbedEl.dataset.dropped = el.dataset.dropped;
    }   
  }
  
  if (el.sceneEl.is('vr-mode')) {
    el.setAttribute('bind-position', 'target: #hand-right');
    el.setAttribute('bind-rotation', 'target: #hand-right convertToLocal: true');
  } else {
    el.setAttribute('bind-position', 'target: #dummy-hand-right');
    el.setAttribute('bind-rotation', 'target: #dummy-hand-right; convertToLocal: true');
  }
  el.dataset.grabbed = true;
  delete el.dataset.dropped;
  checkItemInDropZone('drop-zone-left', 'potion', isCorrectItemDropped);
  checkItemInDropZone('drop-zone-left-green', 'oeuf', isEggDropped);}
  
  function dropTheThing(evt) {
    const grabbedEl = document.querySelector('[data-grabbed]');
    if (!grabbedEl) return;
    
    const dropZoneId = evt.target.id; // L'ID de la zone où l'objet est déposé
    
    // Vérifier si un objet est déjà présent dans la zone de dépose et le nettoyer
    const elInDropZone = document.querySelector(`[data-dropped="${dropZoneId}"]`);
    if (elInDropZone) {
      elInDropZone.removeAttribute('data-dropped');
    }
    
    // Mettre à jour la position et la rotation de l'objet saisi et le marquer comme déposé
    grabbedEl.removeAttribute('bind-position');
    grabbedEl.removeAttribute('bind-rotation');
    copyPosition(evt.target, grabbedEl);
    copyRotation(evt.target, grabbedEl);
    grabbedEl.dataset.dropped = dropZoneId;
    delete grabbedEl.dataset.grabbed;
    
    // Mise à jour de la visibilité du texte basée uniquement sur la position de la potion
    checkItemInDropZone('drop-zone-left', 'potion', isCorrectItemDropped);
    checkItemInDropZone('drop-zone-left-green', 'oeuf', isEggDropped);}
    
    function checkItemInDropZone(dropZoneId, itemId, visibilityRef) {
      // Vérifier si l'objet spécifié est déposé dans la zone de dépôt spécifiée
      const itemInDropZone = document.querySelector(`[data-dropped="${dropZoneId}"][id="${itemId}"]`);
      visibilityRef.value = !!itemInDropZone; // Met à jour la variable réactive basée sur la présence de l'objet
    }
    
    
    
    
    
    
    defineProps({
      scale: Number,
    });
    
    //const colorBoxLeft = ref(randomHsl());
    //const colorBoxRight = ref(randomHsl());
  </script>
  
  <template>  
    <a-light type="ambient" color="#FAE6B8"></a-light>
    <a-light type="directional" color="#FFF" intensity="1" position="-1 1 1" target="#target" castShadow="true"></a-light>
    
    <a-entity
    gltf-model="#village"
    position="75 -0.5 11"
    rotation="0 0 0"
    scale="0.99 0.99 0.99"
    shadow="cast: true; receive: true"
    >
    <a-text 
    id="texte-quête-1"
    value="Constatant que le dragon est blessé à la patte, 
    vous vous rendez chez l'herboriste du village."
    width="2" 
    color="#FFF" 
    position="-75.255 2.5 -9.521" 
    rotation="0 -180 0" 
    scale="1 1 1"
    background-color="#000"
    opacity="0.7">
  </a-text>
  
  <a-text 
  v-if="isCorrectItemDropped"
  id="texte-potion"
  value="Merci de m'avoir soigné ! Je te fais confiance à présent, je protège ce portail, 
  car mon œuf a été catapulté dans une autre dimension par l'intermédiaire du portail derrière moi.
  Ceci est l'œuvre d'un magicien complice de chevaliers avides qui convoitaient mon trésor., 
  Ils ont utilisé mon oeuf comme diversion pour piller mes richesses."
  width="2" 
  color="#FFF" 
  position="-75.128 2.5 20.561" 
  rotation="0 -180 0" 
  scale="1 1 1"
  background-color="#000"
  opacity="0.7">
</a-text>

<a-text 
v-if="isEggDropped"
id="texte-fin"
value="Merci d'avoir récupéré mon oeuf.
En signe de gratitude, je serai le gardien éternel de votre village"
width="2" 
color="#FFF" 
position="-72.322 2.5 17.033" 
rotation="0 -180 0" 
scale="1 1 1"
background-color="#000"
opacity="0.7">
</a-text>


<a-entity
id="wall"
gltf-model="#wall"
position="-47.462 0.133 -0.156"
rotation="0 -5 0"
scale="1 1 1"
/>

<a-entity
id="big-cloud"
gltf-model="#cloud"
position="91.440 165.84 114.9"
rotation="0 90 0"
scale="3 1 3"
/>

<a-entity
id="small-cloud"
gltf-model="#cloud"
position="-38.055 71.151 38.018"
rotation="0 70 0"
scale="1 1 1"
/>

<a-entity
id="cloud-castle"
gltf-model="#cloud"
position="-30.78353 24.46236 52.10729" 
rotation="0 29.999999999999996 0" 
scale="0.5 0.4 0.8"
/>

<a-entity
id="cloud-4"
gltf-model="#cloud"
position="-76.82733 17.36987 28.40477" 
rotation="0 66 0" 
scale="0.445 0.34 0.8"
/>

<a-entity
id="cloud-5"
gltf-model="#cloud"
position="-116.47261 11.05674 97.84924" 
rotation="0 -55 0" 
scale="0.725 0.55 0.49"
/>

<a-box
id="box-1-grabbable"
color="red"
scale="0.3 0.3 0.3"
position="-73.331 1.082 -7.918"
clickable
@click="evt => grabTheThing(evt)"
></a-box> 

<a-entity
id="drop-zone-left"
geometry="primitive: sphere; phiLength: 180; radius: 0.5; thetaLength: 90;"
material="color: blue; side: double"
position="-75.211 1.177 20.11"
rotation="90 0 0"
clickable
@click="evt => dropTheThing(evt)"
></a-entity>

<a-entity
id="drop-zone-left-green"
geometry="primitive: sphere; phiLength: 180; radius: 0.5; thetaLength: 90;"
material="color: green; side: double"
position="-73.057 1.203 16.904"
rotation="90 0 0"
clickable
@click="evt => dropTheThing(evt)"
></a-entity>

<a-entity
gltf-model="#portal"
position="-74 0 25"
rotation="0 0 0"
scale="0.6 0.6 0.6">
</a-entity>

<PortalTeleporter
v-if="isCorrectItemDropped"
label="Get the dragon's egg
Click to enter"
scale="1.2 1.3 1.2"
life-like-automaton="resolution: 256;"
position="-72.15 1.5 24"
material="opacity: 0.0; transparent: true"
rotation="0 -180 0"
:rot="180"
:y="200.5"
:x="-15"
:z="-10.67"
/> 

<PortalTeleporter
id="portal-store"
label="In the herboriste
Click to enter"
material="opacity: 0.0; transparent: true"
position="-57.8 1.7 -9.78"
rotation="0 -30 3"
:rot="90"
:y="100.31"
:x="-1.3"
/>

<a-entity
gltf-model="#dragon"
position="-74.15 3 20"
rotation="0 160 0"
scale="0.015 0.015 0.015">
</a-entity>
</a-entity>

<a-entity
id= "nav-mesh-village"
geometry="primitive: plane; height: 100; width: 100"
position="0 0.01 -4.75"
rotation="-90 0 0"
data-role="nav-mesh"
material="color: blue"
visible="false"
></a-entity>

</template>