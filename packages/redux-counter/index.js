import store, { incrementAction, decrementAction } from './store'

const countEle = document.querySelector('.count')
const incrementBtn = document.querySelector('.increment')
const decrement = document.querySelector('.decrement')

const unsubscribe = store.subscribe(() => {
	countEle.innerHTML = store.getState().count
})

countEle.innerHTML = store.getState().count

incrementBtn.addEventListener('click', () => {
	store.dispatch(incrementAction())
})

decrement.addEventListener('click', () => {
	store.dispatch(decrementAction())
})
