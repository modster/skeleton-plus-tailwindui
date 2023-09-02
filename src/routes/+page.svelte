<script>
	import { T,Canvas } from '@threlte/core'
    import { LightSwitch } from "@skeletonlabs/skeleton"
	import Scene from './Scene.svelte'
</script>

	<div class="container h-full mx-auto flex justify-center items-center">
		<!-- Threlte -->
		<Canvas>

			<Scene />

		</Canvas>
	</div>
		
	<style lang="postcss">
		.animate-glow {
			animation: glow 5s cubic-bezier(0, 0, 0, 0.5) infinite;
		}

		@keyframes glow {
			0% {
				background-color: rgba(107, 114, 128, 0.5);
			}
			33% {
				background-color: rgba(151, 175, 255, 0.5);
			}
			66% {
				background-color: rgba(255, 229, 100, 0.5);
			}
			100% {
				background-color: rgba(107, 114, 128, 0.5);
			}
		}

		.animate-pulse {
			animation: pulse 5s cubic-bezier(0, 0, 0, 0.5) infinite;
		}

		@keyframes pulse {
			50% {
				transform: scale(1.5);
			}
		}
	</style>
