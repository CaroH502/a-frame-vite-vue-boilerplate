<script setup>
  import '../aframe/life-like-automaton.js';
  import PortalTeleporter from './PortalTeleporter.vue';
</script>

<template>
  <a-entity
    gltf-model="#store"
    position="0 100.3 0"
  >
    <PortalTeleporter
      label="Back to main room"
      material="src: #room-gol-out-texture"
      position="0 1 0"
      rotation="0 -90 0"
      :rot="0"
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