let conf = require('./conf.js');
const axios = require('axios');
/*
Begins a session for a user with an existing account protected by a username and password.
Request:
a: Login
Key: Your API Key
Username: The user's username.
Password: The user's password.
*/
let loginnvthang = async function login2 (){

  let data  = await axios({
    method: 'post',
    url: conf.url,
    data: "a=Login&Key=" + `${conf.apikey}` +
    "&Username="+ `${conf.username}` +
    "&Password=" + `${conf.password}` ,
  });
  let obj = {
    SessionCookie: data.data.SessionCookie,
    ClientSeed: data.data.ClientSeed,
  }
 return obj;
}

//loginnvthang();
module.exports = loginnvthang;
