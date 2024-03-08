<script setup>
import PortalTeleporter from './PortalTeleporter.vue';
import '../aframe/life-like-automaton.js';
import '../aframe/physx-force-pushable.js';
import '../aframe/clickable.js';
import '../aframe/simple-grab.js'
import '../aframe/text-design.js';

function handleGrab(event) {
  console.log("Objet saisi:", event.detail.el);
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

  <a-entity
  id="pont"
  gltf-model="#pont"
  position="0.572 0.018 5.450"
  rotation="0 180 0"
  scale="1 1 1"
  ></a-entity>
  
  <a-text 
  id="text-recup-oeuf"
  value="Find the egg and take it back to the dragon. Put it between his paws" 
  width="2" 
  text-design
  color="#FFF" 
  position="-14.113 3.4 -8.480" 
  rotation="0 -180 0" 
  scale="1 1 1"
  background-color="#000"
  opacity="0.7">
</a-text>

<PortalTeleporter
id="portal-mountain"
label="Back to the village"
scale="1 1 1"
material="opacity: 0.0; transparent: true"
position="-14.876 3.135 -11.004"
rotation="0 0 0"
:rot="0"
:x="4"
:z="33.5"

/>

  <!-- <a-entity
  id="oeuf"
  @grabbed="handleGrab" 
  simple-grab
  gltf-model="#oeuf"
  position="18.688 1.926 2.496"
  rotation="0 30 0"
  
  scale="0.2 0.2 0.2">
  </a-entity> -->

<a-entity
  id="oeuf"
  @grabbed="handleGrab" 
  simple-grab
  clickable
  rotation="1.5 0 0"
  position="18.688 1.926 2.496">

  <a-entity
  gltf-model="#oeuf"
  position="0.5 0 0"
  rotation="0 30 0"
  clickable
  scale="0.2 0.2 0.2">
  </a-entity>
</a-entity>

</a-entity>

<a-entity
id="nav-mesh-mountains"
geometry="primitive: plane; height: 65; width: 45"
position="4.361 200.25 9.718"
rotation="-90 0 0"
data-role="nav-mesh"
material="color: yellow"
visible="false"
></a-entity>

</template>