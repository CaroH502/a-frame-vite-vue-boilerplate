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
  position="0 199.5 0"
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
  gltf-model="#portal"
  position="-0.003 0.002 -0.011"
  rotation="0 30 0"
  scale="0.002 0.002 0.002"> 
  ></a-entity>

    <PortalTeleporter
    id="portal-mountain"
    label="Back to the village 2"
    scale="0.004 0.004 0.004"
    material="opacity: 0.0; transparent: true"
    position="0.003 0.008 -0.013"
    rotation="0 30 0"
    :rot="0"
    :x="4"
    :z="33.5"
  
    />
    
    <a-entity
    id="oeuf"
    gltf-model="#oeuf"
    position="0.184 0.005 -0.020"
    rotation="0 30 0"
    scale="-0.001 -0.001 -0.001">
  </a-entity>
</a-entity>

<!-- Physic room navigation mesh -->

<a-entity
id="nav-mesh-mountains"
  geometry="primitive: plane; height: 80; width: 80"
  position="37.38 200.7 17.127"
  rotation="-90 -50 0"
  data-role="nav-mesh"
  material="color: yellow"
  visible="true"
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