const express = require('express');
const cors = require('cors');
const puppeteer = require('puppeteer');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));

let browser; // Reuse browser instance

async function getBrowser() {
  if (!browser) {
    browser = await puppeteer.launch({
      headless: true,
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    });
  }
  return browser;
}

// Endpoint to capture screenshot
app.get('/api/screenshot', async (req, res) => {
  try {
    const url = req.query.url || `http://localhost:${PORT}`;
    const browser = await getBrowser();
    const page = await browser.newPage();
    await page.setViewport({ width: 700, height: 1800 }); // Adjust as needed
    await page.goto(url, { waitUntil: 'networkidle0' });
    const screenshot = await page.screenshot({ type: 'png', fullPage: true });
    await page.close();

    res.set('Content-Type', 'image/png');
    res.set('Content-Disposition', 'attachment; filename="infographic.png"');
    res.send(screenshot);
  } catch (err) {
    res.status(500).send('Error capturing screenshot');
  }
});

// Graceful shutdown
process.on('SIGINT', async () => {
  if (browser) await browser.close();
  process.exit();
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
}); 