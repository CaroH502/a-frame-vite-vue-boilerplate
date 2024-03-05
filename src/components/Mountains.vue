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
  value="Find the egg and take it back to the dragon. Put it between his paws" 
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

<a-entity
id="nav-mesh-mountains"
geometry="primitive: plane; height: 65; width: 45"
position="4.361 200.45 9.718"
rotation="-90 0 0"
data-role="nav-mesh"
material="color: yellow"
visible="false"
></a-entity>

</template>