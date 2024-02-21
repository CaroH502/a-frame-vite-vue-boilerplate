<script setup>
  import { ref } from 'vue';

  import TheCameraRig from './TheCameraRig.vue';
  import TheMainRoom from './TheMainRoom.vue';
  import TheLifeCubeRoom from './TheLifeCubeRoom.vue';
  import ThePhysicRoom from './ThePhysicRoom.vue';
  //ne pas oublier d'import  le duplicate-me.js
  // import './aframe/duplicate-me.js'

  defineProps({
    scale: Number,
    overlaySelector: String,
  });

  const allAssetsLoaded = ref(false);
</script>

<template>
  <a-scene stats
    background="color: #80C2FF;"
    fog="type: linear; color: #80C2FF; near:1; far:10"
    :webxr="`
      requiredFeatures: local-floor;
      referenceSpaceType: local-floor;
      optionalFeatures: dom-overlay;
      overlayElement: ${overlaySelector};
    `"
    xr-mode-ui="XRMode: xr"
    physx="
      autoLoad: true;
      delay: 1000;
      useDefaultScene: false;
      wasmUrl: lib/physx.release.wasm;
    "
  >

    <a-assets @loaded="allAssetsLoaded = true">
      <!--
        Title: VR Gallery
        Model source: https://sketchfab.com/3d-models/vr-gallery-1ac32ed62fdf424498acc146fad31f7e
        Model author: https://sketchfab.com/mvrc.art (Maxim Mavrichev)
        Model license: CC BY 4.0 ( https://creativecommons.org/licenses/by/4.0/ )
      -->
      <a-asset-item id="room" src="assets/vr_gallery.glb"></a-asset-item>
      <!--
        Title: 3D Gallery for VR projects
        Model source: https://sketchfab.com/3d-models/3d-gallery-for-vr-projects-68f77ed8558c4bd59e0a13e2cc9d1fd1
        Model author: https://sketchfab.com/tekuto1s (tekuto1s)
        Model license: CC BY 4.0 ( https://creativecommons.org/licenses/by/4.0/ )
      -->
      <a-asset-item id="physic-room" src="assets/3d_gallery_for_vr_projects.glb"></a-asset-item>
      <a-asset-item id="sound-1" response-type="arraybuffer" src="assets/sound1.mp3" preload="auto"></a-asset-item>
      <img id="room-physic-out-texture" :src="`assets/main-room-from-physic-room.png`">
      <img id="room-gol-out-texture" :src="`assets/main-room-from-gol-room.png`">
      <img id="room-physic-texture" :src="`assets/physicRoom.png`">
    </a-assets>

    <template v-if="allAssetsLoaded">
      <!--<TheMainRoom :scale="scale" />
      <TheLifeCubeRoom />
      <ThePhysicRoom />-->
      <!-- <a-plane color="red" width="100" height="100" rotation="-90 0 0"></a-plane> -->
      <a-entity light="type: ambient; color: #BBB"></a-entity>
      <a-ocean amplitude="0.1" amplitude-variance="0.05" color="#92E2E2" width="10" height="10" depth="25" density="15" speed="0.1"></a-ocean> 
      <a-ocean amplitude="0.09" amplitude-variance="0.1" color="#8DE1E1" width="10" height="10" depth="25" density="10" speed="0.9"></a-ocean>
      
      <!-- ici on peut appelé notre asstets avec a-entity. Il est possible d'ajouter l'attribut duplicate-me au a-entity avec l'id de l'asset correspondant 
      au lieu de mettre un id à entity mieux vaut le mettre un "data-id" surtout si on a l'élément plusieurs fois, en l'occurence ici on veut le duppliquer
      -->
      
    </template>

    <TheCameraRig />

  </a-scene>
</template>