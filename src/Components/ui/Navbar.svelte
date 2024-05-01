<script>
	import Container from './Container.svelte';
	import Hamburger from './Hamburger.svelte';
	import Icon from './Icon.svelte';
	import Input from './Input.svelte';
	import Logo from './Logo.svelte';
</script>

<nav>
	<Container>
		<div class="navbar-wrapper">
			<div class="logo-wrapper">
				<Hamburger />
				<Logo />
			</div>
			<div class="search-bar">
				<Input full />
				<img src="search.png" alt="search" class="search-icon" />
			</div>
			<div class="cart-wrapper">
				<div class="col">
					<div class="cart">
						<Icon src={'shoppingbag.png'} alt />
						<span class="total-number">10</span>
					</div>
					<span class="total-amount">৳ 0</span>
				</div>
			</div>
		</div>
	</Container>
</nav>

<style>
	nav {
		background-color: var(--secondary-accent);
	}

	.navbar-wrapper {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.logo-wrapper {
		flex: 1;
		display: flex;
		align-items: center;
		gap: var(--gap);
	}

	.search-bar {
		flex: 3;
		background-color: #fff;
		display: none;
		border-radius: var(--radius);
		border: 2px solid var(--blue);
		overflow: hidden;
	}

	.search-icon {
		width: 35px;
		object-fit: contain;
		padding: var(--gap);
		cursor: pointer;
	}

	.cart-wrapper {
		flex: 1;
		display: flex;
		align-items: center;
		justify-content: flex-end;
	}

	.cart-wrapper .col {
		width: fit-content;
		display: flex;
		align-items: center;
		gap: var(--gap);
		cursor: pointer;
	}

	.cart {
		position: relative;
	}

	.cart-image {
		width: 30px;
		object-fit: contain;
	}

	.total-number {
		font-size: calc(var(--font-regular) / 1.2);
		font-weight: 700;
		color: #fff;
		display: flex;
		align-items: center;
		justify-content: center;
		height: 20px;
		width: 20px;
		position: absolute;
		bottom: 0;
		right: -5px;
		background-color: var(--blue-accent);
		border-radius: 50%;
	}

	.total-amount {
		font-weight: 800;
		color: var(--blue);
		display: none;
	}

	@media (min-width: 1200px) {
		.search-bar {
			display: flex;
		}

		.total-amount {
			display: block;
		}
	}
</style>
