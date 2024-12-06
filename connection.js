const moongose = require('mongoose');

async function connectMoongose(url) {
  //Connection
  return moongose
    .connect(url)
   
}
module.exports = connectMoongose;
