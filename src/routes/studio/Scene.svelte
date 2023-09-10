<script>
  import { T, useFrame, useThrelteUserContext } from "@threlte/core";
  import { interactivity, OrbitControls } from "@threlte/extras";
  import { rotater } from "$lib/rotation";
  import { scale } from "$lib/spring";

  useFrame((state, delta) => {
    $rotater += delta;
  });

  interactivity();
</script>

<T.Mesh
  rotation.y={$rotater}
  position.y={1}
  scale={$scale}
  on:pointerenter={() => scale.set(1.1)}
  on:pointerleave={() => scale.set(1)}
>
  <T.BoxGeometry args={[1, 2, 1]} />
  <T.MeshStandardMaterial color="red" />
</T.Mesh>
