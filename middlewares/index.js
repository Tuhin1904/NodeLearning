const fs =  require("fs")

function logReq(fileName) {
  return (req, res, next) => {
    fs.appendFile(fileName, `${Date.now()}: ${req.ip}, ${req.method}`, (err, data) => {
      next();
    });
  };
}
module.exports = { logReq };
