const puppeteer = require('puppeteer');

let browser = null;

async function openBrowserAndMakeScreenshot(url, filePath) {
        const browser = await puppeteer.launch()
        const page = await browser.newPage()
            await page.goto(url)
            await page.screenshot({
                path: filePath, fullPage: true
            })
        browser.close()
}

async function openBrowser() {
    browser = await puppeteer.launch()
}

async function closeBrowser() {
    browser.close()
}

async function makeScreenshot(url, filePath) {
    const page = await browser.newPage()
    await page.goto(url)
    await page.screenshot({
        path: filePath, fullPage: true
    })
}

module.exports = {
    openBrowserAndMakeScreenshot,
    openBrowser,
    closeBrowser,
    makeScreenshot
}