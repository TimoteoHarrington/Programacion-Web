const puppeteer = require('puppeteer');

async function run() {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://www.decampoacampo.com/__dcac/outside/canuelas/precios');
    await page.screenshot({
        path: 'screenshot.png',
        fullPage: true,
    });
    await browser.close();
}

run();
// const puppeteer = require('puppeteer');
// async function scrapeTableData() {
//     const browser = await puppeteer.launch();
//     const page = await browser.newPage();
//     await page.goto('https://www.decampoacampo.com/__dcac/outside/canuelas/precios');

//     const tableRows = await page.$$('.tr_precios');

//     const data = [];

//     for (const row of tableRows) {
//         const columns = await row.$$('td');

//         // Verificamos si existe el primer elemento en la columna antes de intentar acceder a él
//         const category = columns[0] ? await columns[0].$eval('h3', h3 => h3 ? h3.textContent.trim() : '') : '';
//         const price1 = columns[1] ? await columns[1].$eval('.h4', h4 => h4 ? h4.textContent.trim() : '') : '';
//         const amount1 = columns[2] ? await columns[2].$eval('.h4', h4 => h4 ? h4.textContent.trim() : '') : '';
//         const price2 = columns[3] ? await columns[3].$eval('.h4', h4 => h4 ? h4.textContent.trim() : '') : '';
//         const amount2 = columns[4] ? await columns[4].$eval('.h4', h4 => h4 ? h4.textContent.trim() : '') : '';

//         data.push({
//             category,
//             price1,
//             amount1,
//             price2,
//             amount2
//         });
//     }

//     console.log(data);

//     await browser.close();
// }

// scrapeTableData();
