let conf = require('./conf.js')
// Invest 100dogecoin //So dogecoin for firstTime.
let size = function(lastsize){
  let percent =  (lastsize / conf.base) ;
  let newsize = (conf.PayIn * percent).toFixed(0);
  return  newsize;
}
module.exports = size;
