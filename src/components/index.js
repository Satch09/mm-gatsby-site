const fs = require("fs");
const dir = fs.readdirSync("./");

dir.map(d => {
  const a = d.split(".");
  console.log(a[0]);
});
