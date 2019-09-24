const puppeteer = require('puppeteer');

let page;
let browser;

beforeAll(async () => {
  browser = await puppeteer.launch({ headless: true, slowMo: 250 });
  page = await browser.newPage();
  await page.goto('http://localhost:3000');
});

afterAll(async done => {
  await page.close();
  await browser.close();
  done();
});

describe('e2e', () => {
  describe('正常系', () => {
    it('選手が存在する場合', async () => {
      await page.type('input', '25');
      await page.click('button');
      const text = await page.evaluate(
        () => document.querySelector('.result').textContent,
      );
      expect(text).toBe('背番号 25 番の選手は 宮西尚生 です');
    });
    it('選手が存在しない場合', async () => {
      await page.type('input', '00');
      await page.click('button');
      const text = await page.evaluate(
        () => document.querySelector('.result').textContent,
      );
      expect(text).toBe('背番号 00 番の選手は いません');
    });
  });
});
