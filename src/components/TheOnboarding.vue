<script setup>
import { ref } from 'vue';

defineProps({
  loaded: Boolean,
});

const showOnboarding = ref(true);

function enterScene() {
  showOnboarding.value = false;
  if (AFRAME.utils.device.checkHeadsetConnected() && !AFRAME.utils.device.isMobile()) {
    document.querySelector('a-scene').enterVR();
  }
  document.querySelector('a-scene').emit('enter-scene');

}
</script>

<template>
  <div id="onboarding" v-if="showOnboarding">
    <div>
      <h1>A medieval village with a mysterious dragon</h1>
      <p v-if="!loaded">loading...</p>
      <button v-if="loaded" @click="enterScene()">Enter scene</button>
      <div class="licences">
        <section>
          <h4>Context of the game</h4>
          <p>In the quiet of the village, an unprecedented event disrupts the peaceful routine of the inhabitants: 
            A mysterious portal suddenly appears, not far from the farmers' food stores. 
            A dragon settles nearby, its piercing gaze fixed on anyone who gets too close. 
            Its imposing presence and protective demeanour make it clear that it's not here for the food,
            but for a much more personal reason: to protect the gate.</p>
            
            <p>
              Nestling in the heart of the forest that surrounds the village lives a young girl known for her astonishing ability to communicate with nature. You identify with this character.
              Your exceptional relationship with animals gives you the ability to grasp their feelings and intentions. As a weekly visitor to the village market 
              every week, you soon come face to face with the strange phenomenon of the portal and the imposing presence of the dragon. Far from seeing this creature 
              creature as a threat, you see it as a sublime, anguished being, devoted to protecting the portal.
            </p>
            <br>
            <br>
          </section>
          <section>
            
            <h4>Movement modes support</h4>
            <ul>
              <li>
                Desktop – Keyboard for move (WASD or Arrows keys) + Mouse for look
                control (Drag and drop)
              </li>
              <li>
                Mobile – 1x Finger touch to go forward + 2x Fingers touch to go
                backward + Gaze cursor for click
              </li>
              <li>
                VR Headset – AR/VR walk + Teleport (Grip for grab and laser for
                click) + Gaze cursor for click
              </li>
            </ul>
            <dl>
              <dt>
                <i>Included</i>
              </dt>
              <dt>
                <a href="https://github.com/c-frame/aframe-extras" target="_blank">aframe-extras controls and animation-mixer</a>
              </dt><dd>
                <a href="https://github.com/c-frame/aframe-extras/blob/master/LICENSE" target="_blank">MIT License</a>
              </dd>
              
              <dt>
                <a href="https://github.com/c-frame/physx" target="_blank">aframe physx</a>
              </dt><dd>
                <a href="https://github.com/c-frame/aframe-extras/blob/master/LICENSE" target="_blank">MIT License</a>
              </dd>
              
              <dt>
                <a href="https://github.com/jure/aframe-blink-controls/" target="_blank">aframe-blink-controls</a>
              </dt><dd>
                <a href="https://github.com/jure/aframe-blink-controls/blob/main/LICENSE" target="_blank">MIT License</a>
              </dd>
              
              <dt>
                <a href=" https://github.com/AdaRoseCannon/aframe-xr-boilerplate" target="_blank">simple-navmesh-constraint</a>
              </dt><dd>
                By Ada Rose Cannon under MIT License
              </dd>
              
              <dt>
                <a href="https://sketchfab.com/3d-models/vr-gallery-1ac32ed62fdf424498acc146fad31f7e" target="_blank">VR Gallery</a>
              </dt><dd>
                by <a href="https://sketchfab.com/mvrc.art" target="_blank">Maxim Mavrichev</a>
                under <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank">CC BY 4.0</a>
              </dd>
              
              <dt>
                <a href="https://sketchfab.com/3d-models/3d-gallery-for-vr-projects-68f77ed8558c4bd59e0a13e2cc9d1fd1" target="_blank">Physic room model</a>
              </dt><dd>
                by <a href="https://sketchfab.com/tekuto1s" target="_blank">tekuto1s</a>
                under <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank">CC BY 4.0</a>
              </dd>
            </dl>
          </section>
        </div>
      </div>
    </div>
  </template>
  
  <style scoped>
  h1 { font-size: 1.5rem }
  a {
    color: #eee;
    text-decoration: none;
  }
  .licences {
    margin: 2rem 0;
    font-size: 1rem;
    text-align: left;
  }
  .licences dt {
    padding-top: 0.75rem;
    font-size: 0.9rem;
    font-weight: bold;
  }
  .licences dd {
    margin-left: 0;
    font-size: 0.8rem;
  }
  
  #onboarding {
    position: absolute;
    top: 0;
    left: 0;
    background-color: #333;
    color: #ccc;
    width: 100vw;
    height: 100vh;
    padding: 1rem;
    font-family: monospace;
    z-index: 10000;
    overflow: auto;
  }
  #onboarding > * {
    margin: 0 auto;
    max-width: 50rem;
    width: calc(100vw - 10rem);
    text-align: center;
    border-radius: 0.3rem;
    padding: 1rem;
    font-size: 1.3rem;
  }
  #onboarding button {
    font-size: 1.3rem;
    padding: 0.5rem 1rem;
    border-radius: 0.3rem;
    background-color: white;
    color: black;
    border: none;
    cursor: pointer;
  }
</style>#onboarding li {
  #onboarding li {
    font-size: 1rem;
    text-align: left;
  }
