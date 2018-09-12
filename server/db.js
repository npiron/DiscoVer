export default function(callback) {
  // connect to a database if needed
  var Discogs = require('disconnect').Client;
  // Authenticate by consumer key and secret
  var dis = new Discogs({
    consumerKey: "CdvxSJprQXEohdMzyrDr",
    consumerSecret: "AqnTQEAIMkWmnKRrxzmNTwncEPdGvnVL"
  }).database();

  callback(dis);
}
