<script setup>
import PortalTeleporter from './PortalTeleporter.vue';

import '../aframe/life-like-automaton.js';
import '../aframe/physx-force-pushable.js';
import '../aframe/clickable.js';
</script>

<template>
  <a-entity
  id="montagnes"
  gltf-model="#mountains"
  position="0 198.5 0"
  scale="1 1 1"
  >
  
  <!--<a-sphere v-for="index in 3" :key="index"
    physx-body="type: dynamic"
    physx-grabbable
    physx-force-pushable
    :position="`${index -2} 1 1`"
    radius="0.25"
    color="purple"
    clickable
    ></a-sphere>-->
    <a-entity
    id="portal-noir"
  gltf-model="#portal"
  position="-16.474 1.528 -11.364"
  rotation="0 0 0"
  scale="0.5 0.5 0.5"> 
  ></a-entity>

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
    scale="0.2 0.2 0.2">
  </a-entity>
</a-entity>

<!-- Physic room navigation mesh -->

<a-entity
id="nav-mesh-mountains"
  geometry="primitive: plane; height: 65; width: 45"
  position="4.361 200.2 9.718"
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