const roundTo = require('round-to');
let conf = require('./conf.js');
const min = 0;
const max = 999999 ;

 let a = conf.Percent;
let lowhigh = function percent(){
  let bet ={
    low: 0,
    high: '',
  }
  bet.high = (max / 100)* a;
  bet.high = roundTo.down(bet.high,0)
  return bet;
}

module.exports = lowhigh  ;
