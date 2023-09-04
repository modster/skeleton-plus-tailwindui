<script lang="ts">
  import "../app.postcss";

  import {
    AppShell,
    AppBar,
    LightSwitch,
    storePopup,
  } from "@skeletonlabs/skeleton";

  import { spring } from "svelte/motion";

  import { interactivity, OrbitControls } from "@threlte/extras";
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
          <a href="/" target="self" rel="noreferrer">Skeleton</a>
        </strong>
      </svelte:fragment>
      <svelte:fragment slot="trail">
        <a
          class="btn btn-sm variant-ghost-surface"
          href="./studio"
          target="self"
          rel="noreferrer"
        >
          Studio
        </a>
        <a
          class="btn btn-sm variant-ghost-surface"
          href="https://twitter.com/SkeletonUI"
          target="_blank"
          rel="noreferrer"
        >
          Twitter
        </a>
        <a
          class="btn btn-sm variant-ghost-surface"
          href="https://github.com/skeletonlabs/skeleton"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
        <a
          class="btn btn-sm variant-ghost-surface"
          href="./blog"
          target="self"
          rel="noreferrer"
        >
          Blog
        </a>
        <LightSwitch />
      </svelte:fragment>
    </AppBar>
  </svelte:fragment>
  <slot />
</AppShell>
