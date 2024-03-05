<script setup>
import { ref } from 'vue';
import '../aframe/text-design.js';
import PortalTeleporter from './PortalTeleporter.vue';
import { copyPosition, copyRotation } from '../utils/aframe.js';
import '../aframe/bind-position.js';
import '../aframe/bind-rotation.js';

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
  checkItemInDropZone('drop-zone-left-green', 'oeuf', isEggDropped);
}

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
  checkItemInDropZone('drop-zone-left-green', 'oeuf', isEggDropped);
}

function checkItemInDropZone(dropZoneId, itemId, visibilityRef) {
  // Vérifier si l'objet spécifié est déposé dans la zone de dépôt spécifiée
  const itemInDropZone = document.querySelector(`[data-dropped="${dropZoneId}"][id="${itemId}"]`);
  visibilityRef.value = !!itemInDropZone; // Met à jour la variable réactive basée sur la présence de l'objet
}

defineProps({
  scale: Number,
});

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
  text-design="value: Noticing that the dragon's leg is injured, you go to the village herbalist.; nbreLines: 2"
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
text-design="value: Thank you for looking after me! I trust you now, I'm protecting this portal, 
for my egg has been catapulted into another dimension through the portal behind me.
This is the work of a magician in league with greedy knights who coveted my treasure. 
They used my egg as a diversion to plunder my riches.
Can you retrieve my egg for me? I can't go through the portal because of my size.; 
nbreLines: 5"
width="2" 
color="#FFF" 
position="-75.128 2.5 20.561" 
rotation="0 -180 0" 
scale="1 1 1"
background-color="#000"
opacity="0.7"
>
</a-text>

<a-text 
v-if="isEggDropped"
id="texte-fin"
text-design="value: Thank you for recovering my egg.
As a sign of my gratitude, I will be the eternal guardian of your village. ; nbreLines: 2"
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

<a-entity
id="potion"
gltf-model="#potion"
clickable
@click="evt => grabTheThing(evt)"
position="-73.331 1.082 -7.89"
rotation="0 90 0"
scale="20 20 20"
></a-entity>

<a-box
id="box-1-grabbable"
color="red"
scale="0.3 0.3 0.3"
position="-73.331 1.082 -7.918"
clickable
@click="evt => grabTheThing(evt)"
></a-box> 

<a-sphere 
id="blood"
color="red" 
radius="5"
scale="0.020 0.020 0.020"
position="-75.233 1.296 20.423">
</a-sphere>

<a-entity
id="drop-zone-left"
geometry="primitive: sphere; phiLength: 180; radius: 0.5; thetaLength: 90;"
amaterial="opacity: 0.0; transparent: true"
material="color: blue; side: double"
position="-75.211 1.391 19.969"
rotation="120 0 0"
clickable
@click="evt => dropTheThing(evt)"
></a-entity>

<a-entity
id="drop-zone-left-green"
geometry="primitive: sphere; phiLength: 180; radius: 0.5; thetaLength: 90;"
material="color: green; side: double"
position="-73.057 1.203 16.904"
rotation="180 -180 0"
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