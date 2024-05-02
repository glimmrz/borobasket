<script>
	let index = 1;
	let width;

	setInterval(() => {
		if (index >= 4) {
			index = 0;
		} else {
			index++;
		}
	}, 3000);
</script>

<div class="slider-wrapper">
	<div class="slider" bind:offsetWidth={width} style="transform: translateX(-{width * index}px);">
		<img
			src="https://images.pexels.com/photos/214574/pexels-photo-214574.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
			alt=""
			class="slider-image"
		/>
		<img
			src="https://images.pexels.com/photos/562623/pexels-photo-562623.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
			alt=""
			class="slider-image"
		/>
		<img
			src="https://images.pexels.com/photos/39853/woman-girl-freedom-happy-39853.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
			alt=""
			class="slider-image"
		/>
		<img
			src="https://images.pexels.com/photos/296282/pexels-photo-296282.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
			alt=""
			class="slider-image"
		/>
		<img
			src="https://images.pexels.com/photos/1563356/pexels-photo-1563356.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
			alt=""
			class="slider-image"
		/>
	</div>
</div>

<style>
	.slider-wrapper {
		margin-top: var(--gap);
		margin-bottom: var(--gap);
		width: 100%;
		max-height: 600px;
		overflow: hidden;
	}

	.slider {
		display: flex;
		height: 100%;
		width: 100%;
	}

	.slider-image {
		height: 100%;
		width: 100%;
		object-fit: contain;
		min-width: 100%;
	}
</style>
