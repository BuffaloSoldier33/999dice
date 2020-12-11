let config = {
  username: '',       //username 999dice
  password: '',      //password
  apikey: '',         //Api key
  coin: 'doge',             //btc, doge, ltc, eth
  //base: '10000000000',         //This is 100dogecoin .. Start invest
  url : 'https://www.999dice.com/api/web.aspx',
  PayIn: '100000',             //Start value  1.00100000
  Percent: 11,        //You can win 11% , % win the game
  Betsize: 10,        //Increase Betsize 10% or increase PayIn 10%
};

// This is BETTING STRATEGIES MARTINGALE
// If lose increase betsize 10% , you win betsize to base,
//

module.exports = config ;
