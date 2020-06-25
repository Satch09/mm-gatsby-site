const fs = require("fs");
const dir = fs.readdirSync("./");

dir.map(d => console.log(d));
