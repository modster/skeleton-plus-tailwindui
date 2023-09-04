<script>
  import { AppBar } from "@skeletonlabs/skeleton";
  import { LightSwitch } from "@skeletonlabs/skeleton";
</script>

<AppBar slot="header">
  <svelte:fragment slot="lead">
    <strong class="text-xl uppercase">
      <a href="/" target="self" rel="noreferrer">Skeleton</a>
    </strong>
  </svelte:fragment>
  <svelte:fragment slot="trail">
    <a
      class="btn btn-sm variant-ghost-surface"
      href="./svx/"
      target="self"
      rel="noreferrer"
    >
      Svx
    </a>
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
    <LightSwitch />
  </svelte:fragment>
</AppBar>
