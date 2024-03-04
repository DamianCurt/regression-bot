const Mocha = require('mocha');
const fs = require('fs');
const path = require('path');

const mocha = new Mocha();

// Add test files to the Mocha instance
const testDirectory = path.join(__dirname, 'tests');
fs.readdirSync(testDirectory)
    .filter(file => file.endsWith('.js'))
    .forEach(file => {
        mocha.addFile(path.join(testDirectory, file));
    });

// Run the tests
mocha.run(function(failures) {
    process.exitCode = failures ? 1 : 0; // Exit with non-zero status if there were failures
});
