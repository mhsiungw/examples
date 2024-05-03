const path = require('path')
const express = require('express')
const cookieParser = require('cookie-parser')

const app = express()

app.use(cookieParser())

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, '../client/index.html'))
})

app.get('/add', initializeCountCookie, operateController(v => v + 1))

app.get('/subtract', initializeCountCookie, operateController(v => v - 1))

app.listen(3000, () => console.log('Server is listening'))

function initializeCountCookie(req, res, next) {
	if (!req.cookies.count) {
		// res.cookie('count', 1).end()
		res.cookie('count', 1, { maxAge: 1000 * 10 }).end()
		return
	}

	next()
}

function operateController(operation) {
	return (req, res) => {
		const nextCount = operation(+req.cookies.count)

		res.cookie('count', nextCount, { maxAge: 1000 * 10 })

		res.status(200).end()
	}
}