<script setup>
import PortalTeleporter from './PortalTeleporter.vue';

import '../aframe/life-like-automaton.js';
import '../aframe/physx-force-pushable.js';
import '../aframe/clickable.js';

function grabTheThing(evt) {
  // if something already grabbed, switch it
  const el = evt.target;
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
}

function dropTheThing(evt) {
  const grabbedEl = document.querySelector('[data-grabbed]');
  // if nothing grabbed, return
  if (!grabbedEl) return;
  
  //drop it
  grabbedEl.removeAttribute('bind-position');
  grabbedEl.removeAttribute('bind-rotation');
  copyPosition(evt.target, grabbedEl);
  copyRotation(evt.target, grabbedEl);
  delete grabbedEl.dataset.grabbed;
  
  const dropZoneId = evt.target.id;
  // if something was in the drop zone, grab it
  const elInDropZone = document.querySelector(`[data-dropped="${dropZoneId}"]`);
  if (elInDropZone) {
    grabTheThing({ target: elInDropZone });
  };
  
  grabbedEl.dataset.dropped = dropZoneId;
}

</script>

<template>
  <a-entity
  id="montagnes"
  gltf-model="#mountains"
  position="0 198.5 0"
  scale="1 1 1"
  >
  <a-entity
  id="portal-noir"
  gltf-model="#portal"
  position="-16.474 1.528 -11.364"
  rotation="0 0 0"
  scale="0.5 0.5 0.5"> 
  ></a-entity>
  
  <a-text 
  id="text-recup-oeuf"
  value="Trouver et ramener l'oeuf au dragon" 
  width="2" 
  color="#FFF" 
  position="-14.113 3.75 -9" 
  rotation="0 -180 0" 
  scale="1 1 1">
</a-text>

<PortalTeleporter
id="portal-mountain"
label="Back to the village 2"
scale="1 1 1"
material="opacity: 0.0; transparent: true"
position="-14.876 3.135 -11.004"
rotation="0 0 0"
:rot="0"
:x="4"
:z="33.5"

/>

<a-entity
id="oeuf"
gltf-model="#oeuf"
position="18.688 1.926 2.496"
rotation="0 30 0"
clickable
@click="evt => grabTheThing(evt)"
scale="0.2 0.2 0.2">
</a-entity>
</a-entity>

<!-- Physic room navigation mesh -->

<a-entity
id="nav-mesh-mountains"
geometry="primitive: plane; height: 65; width: 45"
position="4.361 200.45 9.718"
rotation="-90 0 0"
data-role="nav-mesh"
material="color: yellow"
visible="false"
></a-entity>

<!-- Physic room floor & walls -->
<!--<a-entity position="0 199.6 0" visible="false">
  <a-entity
  geometry="primitive: plane; height: 9.1; width: 9.1"
  rotation="-90 0 0"
  material="color: purple"
  physx-body="type: static"
  ></a-entity>
  <a-entity
  geometry="primitive: plane; height: 6.4; width: 9.1"
  position="0 0 -4.45"
  material="color: purple"
  physx-body="type: static"
  ></a-entity>
  <a-entity
  geometry="primitive: plane; height: 6.4; width: 9.1"
  position="0 0 4.45"
  rotation="0 180 00"
  material="color: purple"
  physx-body="type: static"
  ></a-entity>
  <a-entity
  geometry="primitive: plane; height: 6.4; width: 9.1"
  position="4.45 0 0"
  rotation="0 -90 0"
  material="color: purple"
  physx-body="type: static"
  ></a-entity>
  <a-entity
  geometry="primitive: plane; height: 6.4; width: 9.1"
  position="-4.45 0 0"
  rotation="0 90 0"
  material="color: purple"
  physx-body="type: static"
  ></a-entity>
</a-entity>-->
</template>