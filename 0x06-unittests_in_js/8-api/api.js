const express = require('express');

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));


app.get("/", (req, res) => {
	res.end('Welcome to the payment system');
})

app.get("/cart/:id", (req, res) => {
	const id = req.params.id
	if (!(/^\d/.test(id))) {
		res.statusCode = 404;
		return res.json({message: `Not found`});
	}
	res.statusCode = 200;
	res.end(`Payment methods for cart ${Number(id)}`);
})


app.get("/available_payments", (req, res) => {
	res.statusCode = 200;
	res.json( {
		payment_methods: {
		credit_cards: true,
		paypal: false
	  }});
})

app.post("/login", (req, res) => {
	const username = req.body["userName"];
	if (!username) {
		res.statusCode = 404;
		return res.end('username is required');
	}

	res.statusCode = 200;
	res.end(`Welcome ${username}`);
})

app.listen( 7865, "localhost", () => {
	console.log("API available on localhost port 7865");
});

module.exports = app;
