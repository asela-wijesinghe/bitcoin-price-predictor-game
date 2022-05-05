
function getBTCPrice() {
	return fetch('https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=USD')
		.then(data => data.json())
}

export { getBTCPrice };
