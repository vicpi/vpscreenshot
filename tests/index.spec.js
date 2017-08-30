const {
    openBrowserAndMakeScreenshot,
    openBrowser,
    closeBrowser,
    makeScreenshot
} = require('../index');
const fs = require('fs');
const rimraf = require('rimraf');
const {expect} = require('chai');

describe('Should make a screenshot and save it to the file', function () {
    it('Should make a screenshot and save it to the file using openBrowserAndMakeScreenshot function', async function () {
        const directory = 'files';
        const newFilename = 'example.com.jpg';
        if (!fs.existsSync(directory)) {
            fs.mkdirSync(directory);
        }
        await (async () => {
            await openBrowserAndMakeScreenshot('http://example.com', `./${directory}/${newFilename}`);
        })();
        const files = fs.readdirSync(directory);
        expect(files.includes(newFilename)).to.be.true;
        rimraf.sync(directory);
    });

    it('Should make a screenshot and save it to the file using openBrowser, makeScreenshot, closeBrowser function', async function () {
        const directory = 'files';
        const newFilename = 'example.com.jpg';
        if (!fs.existsSync(directory)) {
            fs.mkdirSync(directory);
        }
        await openBrowser();
        await (async () => {
            await openBrowserAndMakeScreenshot('http://example.com', `./${directory}/${newFilename}`);
        })();
        await closeBrowser();
        const files = fs.readdirSync(directory);
        expect(files.includes(newFilename)).to.be.true;
        rimraf.sync(directory);
    });
})
