/* https://leetcode.com/problems/best-time-to-buy-and-sell-stock/ */
// Difficulty: Easy

// Return the maximum profit if you buy and sell stock on ideal days
function maxProfit(prices: number[]): number {
    
    // initially went IHash route, but this is way simpler
    let bestProfit: number = 0;
    let minBuyPrice: number = prices[0];

    // loop through array of prices for the stock (i = hypothetical day)
    for(let i = 0; i < prices.length; i++){

        // since we want largest diff between minPrice and *later* high price,
        // we want to compare to the min price to date
        if(prices[i] <= minBuyPrice){
            minBuyPrice = prices[i];
        } else {
            // else... check the profit.
            bestProfit = (bestProfit > (prices[i] - minBuyPrice) ? bestProfit : (prices[i] - minBuyPrice))
        }
    }


    return bestProfit;
};