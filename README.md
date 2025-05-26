# Pinterest Infographic Screenshot App

This project is a simple web application that displays a Pinterest marketing infographic and allows users to take a screenshot of the infographic as a downloadable PNG file. The backend uses Node.js and Puppeteer to capture the screenshot, while the frontend is built with HTML, CSS, and vanilla JavaScript.

## Features
- Beautiful infographic styled to match Pinterest marketing best practices
- "Take Screenshot" button to download the infographic as a PNG
- Loading spinner for smooth user experience
- Optimized backend for fast screenshot generation

## Folder Structure
```
project/
│
├── public/
│   ├── index.html        # Main HTML file for the infographic
│   ├── style.css         # CSS styles for the infographic and spinner
│   └── script.js         # JavaScript for screenshot functionality
│
├── server.js             # Node.js backend with Express and Puppeteer
├── package.json          # Project dependencies and scripts
└── README.md             # Project documentation
```

## Prerequisites
- [Node.js](https://nodejs.org/) (v14 or higher recommended)
- npm (comes with Node.js)

## Installation
1. **Clone or download this repository**
2. **Navigate to the project directory:**
   ```bash
   cd path/to/project
   ```
3. **Install dependencies:**
   ```bash
   npm install
   ```

## Running the Application
1. **Start the server:**
   ```bash
   node server.js
   ```
2. **Open your browser and go to:**
   ```
   http://localhost:3001
   ```
3. **Use the App:**
   - View the infographic
   - Click the **Take Screenshot** button
   - Wait for the spinner to finish and your PNG will download automatically

## Notes
- The backend uses Puppeteer to capture a screenshot of the infographic. The browser instance is reused for performance.
- If you change the port in `server.js`, update the URL accordingly.
- For production, consider using a process manager like PM2 and setting environment variables for configuration.

## License
This project is for educational and demonstration purposes. 