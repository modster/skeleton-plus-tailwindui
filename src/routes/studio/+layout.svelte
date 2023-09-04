<script>
  import { AppShell } from "@skeletonlabs/skeleton";
  import { Canvas, T } from "@threlte/core";
  import { OrbitControls } from "@threlte/extras";
</script>

<AppShell>
  <!-- <svelte:fragment slot="pageHeader">
    <h1 class="text-3xl font-bold">Studio</h1>
  </svelte:fragment> -->
  <svelte:fragment slot="sidebarLeft">Sidebar Left</svelte:fragment>

  <Canvas>
    <T.DirectionalLight position={[0, 10, 10]} />
    <T.GridHelper />
    <!-- <T.PerspectiveCamera makeDefault fov={50}> -->
    <T.PerspectiveCamera
      makeDefault
      position={[5, 5, 5]}
      on:create={({ ref }) => {
        ref.lookAt(0, 1, 0);
      }}
    >
      <OrbitControls enableDamping />
    </T.PerspectiveCamera>
    <slot />
  </Canvas>
</AppShell>
