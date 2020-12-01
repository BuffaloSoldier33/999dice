let conf = require('./conf.js');
const axios = require('axios');
const qs = require('qs');

let createAccount = async function CreateAccount2(){

  let data =  await axios({
    method: 'post',
    url: conf.url,
    data: "a=CreateAccount&Key=" + `${conf.apikey}` + "",
      //a: 'CreateAccount',
      //Key: conf.apikey,
      //Username: conf.username,
     // Password: conf.password,
  });
  console.log(data);
}
let Account = async function CreateAccount(){
  let data =  await axios({
    method: 'post',
    url: conf.url,
    data: qs.stringify({
      a: 'CreateAccount',
      Key: conf.apikey,
    }),
  });
  return data ;
}
//CreateAccount();
/*
 * const params = new URLSearchParams();
 * 
 *
 * /
params.append('param1', 'value1');
params.append('param2', 'value2');
axios.post('/foo', params);
const params = new URLSearchParams();
params.append('param1', 'value1');
params.append('param2', 'value2');
axios.post('/foo', params);
*/
module.exports = Account;
