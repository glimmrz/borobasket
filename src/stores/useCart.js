import { writable } from 'svelte/store';
import { browser } from '$app/environment';

const initialState = {
	items: [],
	total: 0
};

function getLocal() {
	if (!browser) return;

	let items = JSON.parse(localStorage.getItem('cart'));

	return items !== null ? items : initialState;
}

const data = browser ? getLocal() : initialState;

function createCart() {
	const { subscribe, set, update } = writable(data);

	return {
		subscribe,
		addItem: (product) =>
			update((state) => {
				if (!browser) return;
				const index = state.items.findIndex((item) => item.id === product.id);

				if (index !== -1) {
					state.items[index].quantity += 1;
				} else {
					state.items.push({ ...product, quantity: 1 });
				}

				state.total += product.price;
				localStorage.setItem('cart', JSON.stringify(state));
				return state;
			}),
		removeItem: (productId) =>
			update((state) => {
				const index = state.items.findIndex((item) => item.id === productId);

				if (index !== -1) {
					state.total -= state.items[index].price * state.items[index].quantity;
					state.items.splice(index, 1);
				}

				return state;
			}),
		increment: (product) =>
			update((state) => {
				const index = state.items.findIndex((item) => item.id === product.id);

				if (index !== -1) {
					state.items[index].quantity += 1;
				}

				state.total += product.price;
				return state;
			}),
		decrement: (product) =>
			update((state) => {
				const index = state.items.findIndex((item) => item.id === product.id);

				if (index !== -1) {
					state.items[index].quantity -= 1;
				}

				if (state.items[index].quantity === 0) {
					state.items.splice(index, 1);
				}

				state.total -= product.price;
				return state;
			}),
		clear: () =>
			set({
				items: [],
				total: 0
			})
	};
}

export const useCart = createCart();
