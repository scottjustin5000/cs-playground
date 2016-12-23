module.exports ={

	profit: function(input) {

		// make sure we have at least 2 prices
		if (input.length < 2) {
			throw new Error('Getting a profit requires at least 2 prices');
		}
		var minPrice = input[0];
		var maxProfit = input[1] - input[0]; //starting with something other than 0 so we can, if need be, return loss

		// start at index 1 to handle negative profit
		// cannot buy and sell at the same time
		for (var i = 1; i < input.length; i++) {
			var currentPrice = input[i];

			var potentialProfit = currentPrice - minPrice;

			maxProfit = Math.max(maxProfit, potentialProfit);

			minPrice = Math.min(minPrice, currentPrice);
		}

		return maxProfit;
	},
	loss: function(input) {
		// make sure we have at least 2 prices
		if (input.length < 2) {
			throw new Error('Getting a loss requires at least 2 prices');
		}

		var highestPrice = input[0];
		var maxLoss = input[1] - input[0];

		for(var i = 1; i < input.length; i++) {
			var currentPrice = input[i];
			var loss = highestPrice - currentPrice;
			maxLoss = Math.max(loss, maxLoss);
		}

		return maxLoss;
	}
}