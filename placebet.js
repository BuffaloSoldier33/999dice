let conf = require('./conf.js');
const axios = require('axios');
const qs = require('qs');
let login = require('./login.js');
let lowhigh =  require('./lowhigh.js')
let  size = require('./payin.js')
/*;
 *
PlaceBet
Place a bet
Request:
a: PlaceBet
s: User's session cookie
PayIn: The bet amount, in satoshis
Low: The low number in the user's guess range. The guess range must be between 0-999,999.
High: The high number in the user's guess range. The guess range must be between 0-999,999.
ClientSeed: The seed to use for this bet (32 bit signed integer)
Currency: btc/doge/ltc/eth
ProtocolVersion: 2 [All bot owners should update their code to set this value to opt in to the new response format]
Response:
BetId: The bet's ID.
PayOut: The payout from the bet (subtract PayIn to calculate profit)
Secret: The secret number from the bet.
StartingBalance: Your balance just before placing the bet, in satoshis.
ServerSeed: The server seed used to generate the bet.
Next: The next server seed hash (If all 0's, check the Warning field)
*/
let session = ''
let ClientSeed =''
async function start (){
  let res = await login();
  session = res.SessionCookie;
  ClientSeed = res.ClientSeed;
  console.log(res);
}
console.log(session);
/*
let body = {
  a: 'PlaceBet',
  s: session,
  ClientSeed: ClientSeed,
  PayIn: conf.PayIn,
  Currency: conf.coin,
  ProtocolVersion: 2,
  Low: bet.low,
  High: bet.high,
}
*/
async function placebet(){
  let bet = lowhigh();
  let body = {
    a: 'PlaceBet',
    s: session,
    ClientSeed: ClientSeed,
    PayIn: conf.PayIn,
    Currency: conf.coin,
    ProtocolVersion: 2,
    Low: bet.low,
    High: bet.high,
  }
  while (true) {
    try {
      let result  = await axios({
        method: 'post',
        url: conf.url,
        data: qs.stringify(body),
      });
      if (result.data.PayOut > 0 ){
        body.PayIn = size(result.data.StartingBalance);
        console.log('You win' + "\n PayIn next or Betsize:" + body.PayIn);
      }else {
        body.PayIn = (body.PayIn * (100+ conf.Betsize)) /100
        body.PayIn = body.PayIn.toFixed(0);
        console.log('You Lost'+ "\n PayIN next or Betsize : "+ body.PayIn);
      }

      if (result.data.StartingBalance < body.PayIn) {
        console.log('YOU LOST ALL COIN ... YOU NOT LUCKY  !!!!!');
        break;
      }
      console.log(result.data);
    } finally{
      body.PayIn = body.PayIn;
      console.log("Finally size: " + body.PayIn);
    }
  }
}
let nvthang =async function nvthang(){
  await start();
  await placebet();
}
module.exports = nvthang;
