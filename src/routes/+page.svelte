<script>

    import { LightSwitch } from "@skeletonlabs/skeleton"

</script>
<!-- YOU CAN DELETE EVERYTHING IN THIS PAGE -->

<div class="container h-full mx-auto flex justify-center items-center">
	<h1 class="text-5xl font-bold mb-5">Hello World</h1>
	<div class="container h-full mx-auto flex justify-center items-center">
		<h2 class="h2">Greeffer.com</h2>
		<!-- Animated Logo -->
		<svg class="w-64 h-64 md:w-80 md:h-80 absolute z-[-1] rounded-full blur-[50px] transition-all animate-pulse">
			<circle class="bg-primary-400/50" cx="50%" cy="50%" r="50%"></circle>
		</svg>
	</div>
</div>
	<style lang="postcss">
		/* .animate-glow {
			animation: glow 5s cubic-bezier(0, 0, 0, 0.5) infinite;
		} */

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
