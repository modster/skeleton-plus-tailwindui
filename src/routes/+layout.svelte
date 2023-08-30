<script>
	import '../app.postcss';
	import { AppShell, AppBar } from '@skeletonlabs/skeleton';
    // import { LightSwitch } from "@skeletonlabs/skeleton"

	// Highlight JS
	import hljs from 'highlight.js';
	import 'highlight.js/styles/github-dark.css';
	import { storeHighlightJs } from '@skeletonlabs/skeleton';
	storeHighlightJs.set(hljs);

	// Floating UI for Popups
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	import { storePopup } from '@skeletonlabs/skeleton';
	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });
	import { Avatar } from '@skeletonlabs/skeleton';

	const title = "E M GREEFF" // todo: globalize

</script>

<AppBar>
	<h1>{title}</h1></AppBar>

<!-- App Shell -->
<AppShell slotSidebarLeft="bg-surface-500/5 w-56 p-4">

	<svelte:fragment slot="sidebarLeft">
		<!-- Insert the list: -->
		<nav class="list-nav">
			<ul>
				<li><a href="/">Home</a></li>
				<li><a href="/about">About</a></li>
			<Avatar src="favicon.png" />

			</ul>
		</nav>
		<!-- --- -->
	</svelte:fragment>
	
	<!-- Page Route Content -->
	<slot />
</AppShell>
