export const INCREMENT = "INCREMENT"
export function increment() {
	return {
		type: INCREMENT,
		value: 1
	}
}

export const DECREMENT = "DECREMENT"
export function decrement() {
	return {
		type: DECREMENT,
		value: 1
	}
}