import { writable } from 'svelte/store';

let initialState = {
	isOpen: false
};

function createCartSidebar() {
	const { subscribe, set } = writable(initialState);

	return {
		subscribe,
		onOpen: () => {
			set({
				isOpen: true
			});
		},
		onClose: () => {
			set({
				isOpen: false
			});
		}
	};
}

export const useCartSidebar = createCartSidebar();
