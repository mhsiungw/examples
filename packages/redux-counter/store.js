import { createStore } from './redux'

const incrementAction = () => ({
	type: 'INCREMENT',
})
const decrementAction = () => ({
	type: 'DECREMENT',
})
const reducer = (state, action) => {
	switch (action.type) {
		case 'INCREMENT':
			return { count: ++state.count }
		case 'DECREMENT':
			return { count: --state.count }
		default:
			return state
	}
}

const initialState = { count: 0 }

export { incrementAction, decrementAction }

export default createStore(reducer, initialState)
