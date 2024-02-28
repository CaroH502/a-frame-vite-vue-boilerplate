<script setup>
import '../aframe/life-like-automaton.js';
import { copyPosition, copyRotation } from '../utils/aframe.js';
import '../aframe/bind-position.js';
import '../aframe/bind-rotation.js';
import PortalTeleporter from './PortalTeleporter.vue';

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
  id="herboriste-store"
  gltf-model="#store"
  position="0 100.3 0"
  >
  <a-box position="0.1 0.7 0.122" color="#7D8270" depth="0.1" height="3" width="4" rotation="0 90 0"></a-box>
  <a-box position="-1.307 0.87 -1.4" color="#A5AC95" depth="0.1" height="2.64" width="2.66" rotation="0 0 0"></a-box>
  <a-entity
  gltf-model="#vendeur"
  position="-3.3 0.20 -0.3"
  rotation="0 90 0"
  />
  
  <a-entity
  id="potion"
  gltf-model="#potion"
  clickable
  @click="evt => grabTheThing(evt)"
  position="-1.966 1.184 1.128"
  rotation="0 90 0"
  scale="20 20 20"
  ></a-entity>

    <a-text value="potion de soin" width="1" color="#FFF" position="-1.819 1.649 0.977" rotation="0 -180 0" scale="1 1 1"></a-text>

  
  <PortalTeleporter
  label="Back to main room"
  material="src: #room-gol-out-texture"
  position="0 1 0"
  rotation="0 -90 0"
  :rot="180"
  :x="17.5"
  :z="2.7"
  />
</a-entity>

<!-- Life Cube room navigation mesh -->
<!-- <a-entity
  data-role="nav-mesh"
  geometry="primitive: plane; height: 3; width: 3"
  position="0 100.01 0"
  rotation="-90 0 0"
  material="color: green"
  visible="false"
  ></a-entity> -->
  
</template>