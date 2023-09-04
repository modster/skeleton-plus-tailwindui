<script lang="ts">
  import { Canvas, T } from "@threlte/core";
  import { SheetObject, Theatre } from "@threlte/theatre";
  import { getProject } from "@theatre/core";
  import { OrbitControls } from "@threlte/extras";
  import projectState from "./default.theatre-project-state.json";

  const project = getProject("My Project", { state: projectState });
</script>
<Canvas>
  <T.DirectionalLight position={[0, 10, 10]} />
  <T.GridHelper />
  <T.PerspectiveCamera makeDefault position={[5, 5, 5]} on:create={({ ref }) => {
      ref.lookAt(0, 1, 0);
    }}
  >
    <OrbitControls enableDamping />
    <!-- <T.PerspectiveCamera makeDefault fov={50}> -->
  </T.PerspectiveCamera>
<!-- </Canvas>
<div>
  <Canvas>
    <Theatre>
      <SheetObject key="Camera" let:Transform>
        <Transform>
          <T.PerspectiveCamera makeDefault position={[5, 10, 3]} />
        </Transform>
      </SheetObject>
      <SheetObject key="Cube" let:Transform>
        <Transform>
          <T.Mesh position.y={0.5}>
            <T.BoxGeometry />
            <T.MeshBasicMaterial color="hotpink" />
          </T.Mesh>
        </Transform>
      </SheetObject>
      <T.GridHelper />
    </Theatre>
  </Canvas>
</div> -->

