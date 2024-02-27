<script setup>
import { ref, onMounted } from 'vue';
import TheCameraRig from './TheCameraRig.vue';
import PortalTeleporter from './PortalTeleporter.vue';
import TheMainRoom from './TheMainRoom.vue';
import TheLifeCubeRoom from './TheLifeCubeRoom.vue';
import ThePhysicRoom from './ThePhysicRoom.vue';
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
  Abackground="color: #80C2FF;"
  background="color: #DDDDDD;"
  Afog="type: linear; color: #80C2FF; near:1; far:10"
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
  </a-assets>
  
  <template v-if="allAssetsLoaded">
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
    label="Get the dragon's"
    scale="1.2 1.3 1.2"
    life-like-automaton="resolution: 256;"
    position="-72.15 1.5 25"
    rotation="0 -180 0"
    :rot="180"
    :y="200"
    /> 

    <PortalTeleporter
    id="portal-store"
      label="In the herborsite"
      material="src: #room-physic-texture"
      life-like-automaton="resolution: 256;"
      position="-57.8 1.5 -9.78"
      rotation="0 -30 3"
      :rot="90"
      :y="100"
    />
    
    <a-entity
    gltf-model="#dragon"
    position="-74.15 3 20"
    rotation="0 160 0"
    scale="0.015 0.015 0.015">
  </a-entity>
</a-entity>




<!--<TheMainRoom :scale="scale" />-->
  <TheLifeCubeRoom /> 
  <ThePhysicRoom />
  <!-- <a-plane color="red" width="100" height="100" rotation="-90 0 0"></a-plane> -->
  
  <!-- #Exercice 1 -->
  <!-- <a-entity light="type: ambient; color: #BBB"></a-entity>
    <a-ocean amplitude="0.1" amplitude-variance="0.05" color="#92E2E2" width="10" height="10" depth="25" density="15" speed="0.1"></a-ocean> 
    <a-ocean amplitude="0.09" amplitude-variance="0.1" color="#8DE1E1" width="10" height="10" depth="25" density="10" speed="0.9"></a-ocean> -->
    
    <!-- #Exercice 2 
      <a-plane opacity="0.5" color="#82909D" width="100" height="100" rotation="-90 0 0"></a-plane>
      <a-box width="0.3" height="0.3" depth="0" color="red" position="0 0.5 -5" rotation="-90 0 0"></a-box>
      <a-entity>
        <a-box
        multiplier
        width="0.3"
        
        height="0.3"
        depth="0.3"
        color="yellow"
        position ="0 0 -5"
        rotation="0 0 0"
        ></a-box>
      </a-entity>-->
      
      <!-- #Théorie pour dupplicate une entité -->
      <!-- ici on peut appelé notre asstets avec a-entity. Il est possible d'ajouter l'attribut duplicate-me au a-entity avec l'id de l'asset correspondant 
        au lieu de mettre un id à entity mieux vaut le mettre un "data-id" surtout si on a l'élément plusieurs fois, en l'occurence ici on veut le duppliquer
      -->
      
      <!-- look-at="target: [camera]"-->
      
    </template>
    <TheCameraRig />
    
  </a-scene>
</template>