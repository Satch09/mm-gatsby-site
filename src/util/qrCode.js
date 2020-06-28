// Qr Code generator used for the business cards that I'm designing at the
// same time as this website
var QRCode = require("qrcode-svg");

var qrcode = new QRCode({
  content: "http://www.mandmelec.co.za",
  padding: 1,
  width: 256,
  height: 256,
  color: "#000000",
  background: "#ffffff",
  ecl: "M",
});
qrcode.save("qr.svg", function (error) {
  if (error) throw error;
  console.log("Done!");
});
