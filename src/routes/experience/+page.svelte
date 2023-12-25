<script>
	import { onMount } from 'svelte'
	import { quadInOut } from 'svelte/easing'
	import { tweened } from 'svelte/motion'
	
	let timeline = [
		{ year: 2023, label: "Simpl" },
		{ year: 2020, label: "Juspay" },
		{ year: 2020, label: "Amazon" },
	]
	const width = 900
	
	let duration = 1000
	let index = tweened(0, {duration, easing: quadInOut})
	let dotSize = tweened(3, {duration: 200, easing: quadInOut})
	
	onMount(() => {
		const interval = setInterval(next, 1500)
		
		return () => {
			clearInterval(interval)
		}
	})
	
	function next() {
		$dotSize = 3
		if ($index < timeline.length - 1) {
			$index++
		} else {
			$index = 0
		}
		
		setTimeout(() => $dotSize = 8, 500)
	}
</script>

<svg viewBox="{-60+$index*200} 0 {width/timeline.length} 120">
	<line x1=20 y1=95 x2={30+($index*200)} y2=95 stroke=black/>
	
	{#each timeline as event, i}
		<g>
			<image href={`${event.label.toLowerCase()}.png`}  x={20 + i * 40 * timeline.length} y="0" width="50" height="50" />
			<circle cx={45 + i*40*timeline.length} cy=95 r={$dotSize}/>
			<text class="year" x={45+i*40*timeline.length} y=70 text-anchor="middle" font-size="1rem">{event.year}</text>
		</g>
	{/each}
</svg>

<style>
	:global(body) {
		display: flex;
	}
	svg {
		overflow: visible;
	}
	text {
		fill: #555;
	}
	.year {
		font-size: 1rem;
		font-weight: 400;
	}
	line {
		stroke-width: 5px;
		stroke: #ccc;
		stroke-dasharray: 2 2;
	}
	circle {
		fill: orange;
	}
</style>
