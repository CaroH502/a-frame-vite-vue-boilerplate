<script setup>
import { ref } from 'vue';
//import { randomHsl } from '../utils/color.js';
//import BoxColorChanging from './BoxColorChanging.vue';
import PortalTeleporter from './PortalTeleporter.vue';
//import ExitDoor from "./ExitDoor.vue";

//import '../aframe/life-like-automaton.js';

defineProps({
  scale: Number,
});

//const colorBoxLeft = ref(randomHsl());
//const colorBoxRight = ref(randomHsl());
</script>

<template>
  
  <a-entity
  gltf-model="#village"
  position="75 -0.5 11"
  rotation="0 0 0"
  scale="0.99 0.99 0.99">
  <a-entity
  gltf-model="#portal"
  position="-74 0 25"
  rotation="0 0 0"
  scale="0.6 0.6 0.6">
  ></a-entity>
  
  <PortalTeleporter
  label="Get the dragon's egg
  Click to enter"
  scale="1.2 1.3 1.2"
  life-like-automaton="resolution: 256;"
  position="-72.15 1.5 24"
  material="opacity: 0.0; transparent: true"
  rotation="0 -180 0"
  :rot="180"
  :y="200.5"
  :x="1"
  :z="-2.5"
  /> 
  
  <PortalTeleporter
  id="portal-store"
  label="In the herboriste
  Click to enter"
  material="opacity: 0.0; transparent: true"
  position="-57.8 1.7 -9.78"
  rotation="0 -30 3"
  :rot="90"
  :y="100.5"
  :x="-1.3"
  />
  
  <a-entity
  gltf-model="#dragon"
  position="-74.15 3 20"
  rotation="0 160 0"
  scale="0.015 0.015 0.015">
</a-entity>
</a-entity>

<!-- <a-entity
id="nav-mesh-village"
geometry="primitive: plane; height: 80; width: 80"
position="0 0.2 0"
rotation="-90 -50 0"
data-role="nav-mesh"
material="color: red"
visible="true"
></a-entity> -->

<!-- <a-entity
  gltf-model="#room"
  rotation="0 90 0"
  position="0 0 -5"
  scale="1 1.1 1"
  >
  
  <a-entity
  geometry="primitive: plane; height: 2; width: 2;"
  position="2 2 3.9"
  rotation="-180 0 0"
  life-like-automaton="resolution: 64; maxGen: 30;  birthRule: 3,4,5,6,7; survivalRule: 5,6;"
  ></a-entity>
  
  <a-entity
  geometry="primitive: plane; height: 2; width: 2;"
  position="2 2 -3.9"
  life-like-automaton="maxGen: 10; birthRule: 6,7,8; survivalRule: 4,5,6,7,8;"
  ></a-entity>
  
  <BoxColorChanging
  id="box-left"
  :scale="scale"
  :color="colorBoxLeft"
  position="7 0.5 -3"
  @click="colorBoxRight = randomHsl()"
  sound="src: #sound-1; on: click;"
  />
  
  <BoxColorChanging
  id="box-right"
  :scale="scale"
  :color="colorBoxRight"
  position="7 0.5 3"
  @click="colorBoxLeft = randomHsl()"
  sound="src: #sound-1; on: click;"
  />
  
  <PortalTeleporter
  label="Enter the Life Cube Room"
  life-like-automaton="resolution: 256;"
  position="-7.99 1.5 0"
  rotation="0 90 0"
  :rot="180"
  :y="100"
  />
  
  <PortalTeleporter
  label="Enter the Physic Room"
  material="src: #room-physic-texture"
  position="-6 1.5 -3.99"
  rotation="0 0 0"
  :rot="180"
  :y="200"
  />
</a-entity>

<ExitDoor />


<a-entity
geometry="primitive: plane; height: 13.5; width: 6"
position="0 0.01 -4.75"
rotation="-90 0 0"
data-role="nav-mesh"
material="color: blue"
visible="false"
></a-entity>
<a-entity
geometry="primitive: plane; height: .5; width: 5"
position="0 0.01 -11.75"
rotation="-90 0 0"
data-role="nav-mesh"
material="color: red"
visible="false"
></a-entity> -->

</template>