<script lang="ts">
  import "../app.postcss";

  import {
    AppShell,
    AppBar,
    LightSwitch,
    storePopup,
  } from "@skeletonlabs/skeleton";

  import { spring } from "svelte/motion";

  import { Grid, interactivity, OrbitControls } from "@threlte/extras";
  import { T, Canvas, useFrame } from "@threlte/core";

  import hljs from "highlight.js";
  import "highlight.js/styles/github-dark.css";
  import { storeHighlightJs } from "@skeletonlabs/skeleton";
  storeHighlightJs.set(hljs);

  // import { Pane } from "tweakpane";
  // const pane = new Pane();

  import {
    computePosition,
    autoUpdate,
    flip,
    shift,
    offset,
    arrow,
  } from "@floating-ui/dom";
  storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });
</script>

<!-- App Shell -->
<AppShell>
  <svelte:fragment slot="header">
    <AppBar>
      <svelte:fragment slot="lead">
        <strong class="text-xl uppercase">
          <a href="/" target="self" rel="noreferrer">greeffer.com</a>
        </strong>
      </svelte:fragment>
      <svelte:fragment slot="trail">
        <!-- <a
          class="btn btn-sm variant-ghost-surface"
          href="./studio"
          target="self"
          rel="noreferrer"
        >
          Studio
        </a> -->
        <a
          class="btn btn-sm variant-ghost-surface"
          href="https://twitter.com/goodgreeff"
          target="_blank"
          rel="noreferrer"
        >
          Twitter
        </a>
        <a
          class="btn btn-sm variant-ghost-surface"
          href="https://github.com/modster/astro-mdx-shiki"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
        <LightSwitch />
      </svelte:fragment>
    </AppBar>
  </svelte:fragment>

  <!-- <svelte:fragment slot="sidebarLeft">Sidebar Left</svelte:fragment> -->

  <Canvas>
    <T.DirectionalLight position={[0, 10, 10]} />

    <!-- <T.GridHelper> -->
    <Grid
      infiniteGrid
      sectionColor="#000"
      sectionSize={10}
      cellSize={10}
      fadeDistance={400}
    />

    <!-- </T.GridHelper> -->

    <!-- <T.PerspectiveCamera makeDefault fov={50}> -->
    <T.PerspectiveCamera
      makeDefault
      position={[5, 5, 5]}
      on:create={({ ref }) => {
        ref.lookAt(0, 1, 0);
      }}
    >
      <OrbitControls enableDamping autoRotate />
    </T.PerspectiveCamera>
    <slot />
  </Canvas>
</AppShell>
