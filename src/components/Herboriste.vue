<script setup>
import '../aframe/life-like-automaton.js';
import { copyPosition, copyRotation } from '../utils/aframe.js';
import '../aframe/bind-position.js';
import '../aframe/bind-rotation.js';
import PortalTeleporter from './PortalTeleporter.vue';

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
}
</script>

<template>
  
  <a-entity
  id="herboriste-store"
  gltf-model="#store"
  position="0 100.3 0"
  >

  <a-box id="wall-porte" position="0.1 0.7 0.122" color="#7D8270" depth="0.1" height="5" width="4" rotation="0 90 0"></a-box>
  <a-box id="wall-window" position="-2.926 0.87 -1.281" color="#A5AC95" depth="0.1" height="5" width="6.5" rotation="0 0 0"></a-box>
  <a-box id="wall-back" position="-6.04 0.7 0.122" color="#7D8270" depth="0.1" height="5" width="4" rotation="0 90 0"></a-box>
  <a-box id="wall" position="-2.926 0.87 1.496" color="#A5AC95" depth="0.1" height="5" width="6.5" rotation="0 0 0"></a-box>
  <a-box id="roof" position="-3.062 3.108 0.765" color="#A5AC95" depth="0.1" height="5" width="6.5" rotation="90 0 0"></a-box>

  <a-entity
  gltf-model="#vendeur"
  position="-3.3 0.20 -0.3"
  rotation="0 90 0"
  />

  <a-text 
  id="text-vendeur"
  value="How can I help you?" 
    width="1" 
    color="#FFF" 
    position="-3.188 2.043 -0.104" 
    rotation="0 90 0" 
    scale="1 1 1">
  </a-text>
    
  <a-entity
  id="potion"
  gltf-model="#potion"
  clickable
  @click="evt => grabTheThing(evt)"
  position="-1.966 1.184 1.128"
  rotation="0 90 0"
  scale="20 20 20"
  ></a-entity>

    <a-text value="Healing potion" 
    width="1" 
    color="#FFF" 
    position="-1.839 1.649 0.977" 
    rotation="0 -180 0" 
    scale="1 1 1">
  </a-text>

  <a-text value="Invisibility Elixir" 
    width="1" 
    color="#FFF" 
    position="-2.055 1.159 0.977" 
    rotation="0 -180 0" 
    scale="1 1 1">
  </a-text>

  <a-text value="Fire Resistance Brew" 
    width="1" 
    color="#FFF" 
    position="-0.956 1.649 0.977" 
    rotation="0 -180 0" 
    scale="1 1 1">
  </a-text>

  <a-text value="Potion of 
  Levitation" 
    width="1" 
    color="#FFF" 
    position="-1.536 1.649 0.977" 
    rotation="0 -180 0" 
    scale="1 1 1">
  </a-text>
  
  <a-text value="Strength Serum" 
    width="1" 
    color="#FFF" 
    position="-1.425 1.223 0.977" 
    rotation="0 -180 0" 
    scale="1 1 1">
  </a-text>

    <a-entity
    id="porte"
  gltf-model="#porte"
  position="-2.359.26 0.133"
  rotation="0 -60 0"
  scale="1.2 1.2 1.2"
  />

  <PortalTeleporter
  label="Click to go back to 
  the village"
  material="opacity: 0.0; transparent: true"
  position="0 1.15 0.1"
  rotation="0 -90 0"
  :rot="180"
  :x="17.5"
  :z="2.7"
  />
</a-entity>

<!-- Life Cube room navigation mesh -->
<a-entity
  data-role="nav-mesh"
  geometry="primitive: plane; height: 3; width: 3"
  position="-1.78 100.25 0"
  rotation="-90 0 0"
  material="color: pink"
  visible="true"
  ></a-entity>
  
</template>