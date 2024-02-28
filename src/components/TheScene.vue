<script setup>
import { ref, onMounted } from 'vue';
import TheCameraRig from './TheCameraRig.vue';
import PortalTeleporter from './PortalTeleporter.vue';
import TheMainRoom from './TheMainRoom.vue';
import Herboriste from './Herboriste.vue';
import Mountains from './Mountains.vue';
//ne pas oublier d'import  le duplicate-me.js
// import './aframe/duplicate-me.js'
import '../aframe/multiplier.js'
import { decalage } from '../utils/decalage.js';

defineProps({
  scale: Number,
  overlaySelector: String,
});

const applyDecalageToElements = () => {
  document.querySelectorAll('[decalage]').forEach(el => {
    const aframeEl = el.object3D; // Assurez-vous que ceci est la bonne référence à l'élément A-Frame
    decalage(aframeEl); // Applique le décalage
  });
};

onMounted(() => {
  // Vous pourriez vouloir attendre un certain événement ou condition
  // Pour cet exemple, on applique directement après montage
  applyDecalageToElements();
});

const allAssetsLoaded = ref(false);

</script>

<template>
  <a-scene stats
  background="color: #D1E0E8;"
  fog="type: linear; color: #9EA8AD; near:1; far:50 density: 0.8;"
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
    <!-- Mes assets -->
    <a-assest-item id="village" src="assets/medieval_castle_with_village.glb"></a-assest-item>
    <a-assest-item id="portal" src="assets/portal.glb"></a-assest-item>
    <a-assest-item id="dragon" src="assets/dragon.glb"></a-assest-item>
    <a-assest-item id="store" src="assets/store.glb"></a-assest-item>
    <a-assest-item id="vendeur" src="assets/vendeur.glb"></a-assest-item>
    <a-assest-item id="potion" src="assets/potion.glb"></a-assest-item>
    <a-assest-item id="mountains" src="assets/mountains.glb"></a-assest-item>
    <a-assest-item id="oeuf" src="assets/oeuf.glb"></a-assest-item>
  </a-assets>
  
  <template v-if="allAssetsLoaded">
    
    <TheMainRoom :scale="scale" />
    <Herboriste /> 
    <Mountains />
  </template>
  <TheCameraRig />
  
</a-scene>
</template>