const fs = require("fs");

const src = "../README.md";
const dest = "../NEWREADME.md";

let content = fs.readFileSync(src, "utf-8");
content = content.replace(/- \[x\]/g, "- [ ]");
fs.writeFileSync(dest, content);
