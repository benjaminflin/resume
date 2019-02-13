const puppetter = require('puppeteer');
const main = async () => {
	const browser = await puppetter.launch();
	const page = await browser.newPage();
	await page.goto(`file://${__dirname}/index.html`, { waitUntil: 'networkidle0' });
	await page.pdf({
		path: 'resume.pdf',
		format: 'Letter'
	});
	await browser.close();
};

main();
