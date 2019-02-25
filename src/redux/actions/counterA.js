const Actions = {
	INCREMENT: "INCREMENT",
	DECREMENT: "DECREMENT"
}
export default Actions;

export const increment = () => ({
	type: Actions.INCREMENT,
	value: 1
})

export const decrement = () => ({
	type: Actions.DECREMENT,
	value: 1
})