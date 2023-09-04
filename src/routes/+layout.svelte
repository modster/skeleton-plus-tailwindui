<script lang="ts">
  import "../app.postcss";
  import { header } from "./header.svelte";
  import { AppShell } from "@skeletonlabs/skeleton";
  import { LightSwitch } from "@skeletonlabs/skeleton";
  import { storePopup } from "@skeletonlabs/skeleton";

  import { T, Canvas, useFrame } from "@threlte/core";
  import { interactivity, OrbitControls } from "@threlte/extras";
  import { spring } from "svelte/motion";

  // import { SheetObject, Theatre } from "@threlte/theatre";

  // Highlight JS
  import hljs from "highlight.js";
  import "highlight.js/styles/github-dark.css";
  import { storeHighlightJs } from "@skeletonlabs/skeleton";
  storeHighlightJs.set(hljs);

  // Floating UI for Popups
  import {
    computePosition,
    autoUpdate,
    flip,
    shift,
    offset,
    arrow,
  } from "@floating-ui/dom";
  storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });

  /** Title
  //  */
  // import Scene from "../scenes/Text.svelte"; //<------------ to do
  // let text_value: string;
  // text.subscribe((value: string) => {
  //   text_value = value;
  // });
</script>

<!-- 
<div class="relative h-full w-full bg-orange-500/20">
  <Canvas>
    <Scene text={$text} fontSize={2} />
  </Canvas>
</div> -->

<!-- App Shell -->
<AppShell>
  <svelte:fragment slot="header">
    <!-- App Bar -->
  </svelte:fragment>
  <Canvas>
    <T.DirectionalLight position={[0, 10, 10]} />
    <T.GridHelper />

    <T.PerspectiveCamera
      makeDefault
      position={[5, 5, 5]}
      on:create={({ ref }) => {
        ref.lookAt(0, 1, 0);
      }}
    >
      <!-- <T.PerspectiveCamera makeDefault fov={50}> -->
      <OrbitControls enableDamping />
    </T.PerspectiveCamera>
    <slot />
  </Canvas>
</AppShell>
