<script setup>
import { ref, onMounted } from 'vue';
import TheCameraRig from './TheCameraRig.vue';
import PortalTeleporter from './PortalTeleporter.vue';
import TheMedievalVillage from './TheMedievalVillage.vue';
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
  shadow="type: pcfSoft"
  background="color: #D1E0E8;"
  afog="type: linear; color: #9EA8AD; near:0.01; far:60 density: 0.8;"
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
  wasmUrl: lib/physx.release.wasm;"
  >
  
  <a-assets @loaded="allAssetsLoaded = true">
    <!-- Mes assets -->
    <a-asset-item  id="village" src="assets/medieval_castle_with_village.glb"></a-asset-item >
      <!--
      Title: Medieval castle with village
      Model source: https://sketchfab.com/3d-models/medieval-castle-with-village-5109b5e46e064790badecedf8f6d2ef6
      Model author: https://sketchfab.com/liorvisbal (Liormax)
      Model license: CC BY 4.0 ( https://creativecommons.org/licenses/by/4.0/ )
    -->
      <a-asset-item  id="portal" src="assets/portal.glb"></a-asset-item >
      <!--
      Title: Portal Door
      Model source: https://sketchfab.com/3d-models/mountain-scenario-low-poly-0b870e35b8334420ab73a2b8f6f141ab
      Model author: https://sketchfab.com/artbake_graphics (Artbake Graphics)
      Model license: CC BY 4.0 ( https://creativecommons.org/licenses/by/4.0/ )
    -->
      <a-asset-item  id="dragon" src="assets/dragon.glb"></a-asset-item >
      <!--
      Title: LP Dragon
      Model source: https://sketchfab.com/3d-models/portal-door-46983acd0eac4fd4a9bb206b1df029ba
      Model author: https://sketchfab.com/liorvisbal (Liormax)
      Model license: CC BY 4.0 ( https://creativecommons.org/licenses/by/4.0/ )
    -->
    <a-asset-item  id="store" src="assets/store.glb"></a-asset-item >
      <!--
      Title: Wizard's/Witch's house | Magic or Potion shop
      Model source: https://sketchfab.com/3d-models/wizardswitchs-house-magic-or-potion-shop-9858d80ca7704938b0a39dfebdf3d4b7
      Model author: https://sketchfab.com/captain0cake (captain0cake)
      Model license: CC BY 4.0 ( https://creativecommons.org/licenses/by/4.0/ )
    -->
    <a-asset-item  id="vendeur" src="assets/vendeur.glb"></a-asset-item >
      <!--
      Title: Guest male 1 - Medieval Fantasy Challenge
      Model source: https://sketchfab.com/3d-models/guest-male-1-medieval-fantasy-challenge-0e7c17cae64c4165aa181f5b20ef8816
      Model author: https://sketchfab.com/SamuelLK (SamuelLK )
      Model license: CC BY 4.0 ( https://creativecommons.org/licenses/by/4.0/ )
    -->
    <a-asset-item  id="potion" src="assets/potion.glb"></a-asset-item >
          <!--
      Title: Potion Low-Poly
      Model source: https://sketchfab.com/3d-models/potion-low-poly-316d869dae794726a46afe13131bdd9a
      Model author: https://sketchfab.com/cardosobel824 (Isabel Cardoso)
      Model license: CC BY 4.0 ( https://creativecommons.org/licenses/by/4.0/ )
    -->
    <a-asset-item  id="mountains" src="assets/mountains.glb"></a-asset-item >
    <!--
      Title: Mountain Scenario Low Poly
      Model source: https://sketchfab.com/3d-models/mountain-scenario-low-poly-0b870e35b8334420ab73a2b8f6f141ab
      Model author: https://sketchfab.com/tuturu (tuturu)
      Model license: CC BY 4.0 ( https://creativecommons.org/licenses/by/4.0/ )
    -->
    <a-asset-item  id="oeuf" src="assets/oeuf.glb"></a-asset-item >
      <!--
      Title: Dragon Egg LowPoly
      Model source: https://sketchfab.com/3d-models/dragon-egg-lowpoly-dbf1dce0df2945abab58732490252612
      Model author: https://sketchfab.com/SamuelLK (SamuelLK )
      Model license: CC BY 4.0 ( https://creativecommons.org/licenses/by/4.0/ )
    -->
    <a-asset-item  id="porte" src="assets/porte.glb"></a-asset-item >
      <!--
      Extracting an element from this asset using blender:
      
      Title: Medieval castle with village
      Model source: https://sketchfab.com/3d-models/medieval-castle-with-village-5109b5e46e064790badecedf8f6d2ef6
      Model author: https://sketchfab.com/liorvisbal (Liormax)
      Model license: CC BY 4.0 ( https://creativecommons.org/licenses/by/4.0/ )
    -->
    <a-asset-item  id="wall" src="assets/wall.glb"></a-asset-item >
    <!--
      Extracting an element from this asset using blender:
      
      Title: Medieval castle with village
      Model source: https://sketchfab.com/3d-models/medieval-castle-with-village-5109b5e46e064790badecedf8f6d2ef6
      Model author: https://sketchfab.com/liorvisbal (Liormax)
      Model license: CC BY 4.0 ( https://creativecommons.org/licenses/by/4.0/ )
    -->
      <a-asset-item  id="cloud" src="assets/cloud.glb"></a-asset-item >
      <!--
      Title: Low Poly Cloud
      Model source: https://sketchfab.com/3d-models/low-poly-cloud-81910476b24d4fc5a73c908d6c2a38a2
      Model author: https://sketchfab.com/hyungjungkim (hyungjung kim )
      Model license: CC BY 4.0 ( https://creativecommons.org/licenses/by/4.0/ )
    -->
    <a-asset-item  id="intro" src="assets/music1.ogg" preload="auto" response-type="arraybuffer" ></a-asset-item >
    <!-- https://opengameart.org/content/for-the-king -->
    <a-asset-item  id="egg-music" src="assets/music2.mp3" preload="auto" response-type="arraybuffer" ></a-asset-item >
    <!-- https://opengameart.org/content/medieval-kings-feast -->
    <a-asset-item  id="end-music" src="assets/applause.wav" preload="auto" response-type="arraybuffer" ></a-asset-item >
      <!-- https://opengameart.org/content/applause -->
  </a-assets>
  
  <template v-if="allAssetsLoaded">
    <TheMedievalVillage :scale="scale" />
    <Herboriste /> 
    <Mountains />
  </template>
  <TheCameraRig />
  
</a-scene>
</template>