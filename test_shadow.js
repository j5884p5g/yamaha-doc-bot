try {
    const chalk = require('chalk');
    console.log("Chalk loaded from: " + require.resolve('chalk'));
} catch (e) {
    console.log("Chalk not found");
}
