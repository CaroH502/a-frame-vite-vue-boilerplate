<script setup>
  import '../aframe/life-like-automaton.js';
  import PortalTeleporter from './PortalTeleporter.vue';
</script>

<template>
  <a-entity
    gltf-model="#store"
    position="0 100.3 0"
  >
  <a-entity
    gltf-model="#vendeur"
    position="-3.3 0.20 -0.3"
    rotation="0 90 0"
  />

  <a-entity
    gltf-model="#potion"
    position="-3 1.1 -0.8"
    rotation="0 90 0"
    scale="0.3 0.3 0.3"
  />

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
  <a-entity
    data-role="nav-mesh"
    geometry="primitive: plane; height: 3; width: 3"
    position="0 100.01 0"
    rotation="-90 0 0"
    material="color: green"
    visible="false"
  ></a-entity>

</template>