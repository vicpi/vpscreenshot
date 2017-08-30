# vpscreenshot


## Installation

Add vpscreenshot to your project.

#### Using npm
`
npm install --save vpscreenshot
`

#### Using yarn
`
yarn add vpscreenshot
`

## Usage

Package exports a convenient function named `openBrowserAndMakeScreenshot`, which does all the stuff.
It opens a headless browser and makes a screenshot of a web page.

`
(async () => {
    await openBrowserAndMakeScreenshot('http://example.com', '/path/to/new/file.jpg');
})();
`

If you need to make screenshots of several pages, you can optimize this code by opening a headless browser,
making a bunch of screenshots, and then closing browser. For this purpose, vpscreenshot exports 3 
more functions: `openBrowser`, `closeBrowser`, `makeScreenshot`.
`
(async () => {
    await openBrowser();
    await makeScreenshot('http://example.com', '/path/to/new/file.jpg');
    await closeBrowser();
})();
`