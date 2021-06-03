const {Builder, By, Key, until} = require('selenium-webdriver');
require('dotenv').config();
const cssSelectorCheckinBtn = '.student-check-in-form button'


const checkin = async () => {
  const driver = await new Builder().forBrowser('chrome').build();
    await driver.get('https://progress.appacademy.io/me');
    console.log('opening app academy');
    await driver.findElement(By.className('button')).click();
    console.log('logging in with github');
    await driver.findElement(By.id('login_field')).sendKeys(process.env.user)
    await driver.findElement(By.id('password')).sendKeys(process.env.pass, Key.RETURN)

    try {
      await driver.wait(until.elementLocated(By.css(cssSelectorCheckinBtn)), 4000)
      await (await driver.findElement(By.css(cssSelectorCheckinBtn))).click();
      console.log('Checked in successful');
      driver.quit();
    } catch(err) {
      console.log(err);
      console.log("checkin btn isn't here, make sure you're checked in");
    }
}

// let checkinBtn = await driver.findElement(By.css(cssSelectorCheckinBtn))
// await driver.wait(until)

// const waitForHour = hour => new Promise(resolve=> setTimeout(resolve, hour*3600000))

const interval = (setInterval(async () => {
  let time = new Date();
  let hour = time.getHours();
  let minute = time.getMinutes();
  console.log('not time yet, gonna wait another 100 seconds');
  if (hour === 7 && minute > 55) {
    console.log(`It's ${hour}:${minute}, invoking checkin()`)
    checkin();
    await waitForHour(5)
  } else if (hour === 12 && minute > 25) {
    checkin()
    await waitForHour(2)
  } else if (hour ===2 && minute > 55) {
    checkin()
    await waitForHour(17)
  }
}, 100000))


const intervalCheckin = () => {
  console.log('starting interval checking');
  (setInterval(async () => {
    let time = new Date();
    let hour = time.getHours();
    let minute = time.getMinutes();
    console.log('not time yet, gonna wait another 100 seconds');
    console.log(`time: ${time}`);
    console.log(`hour: ${hour}`);
    console.log(`minute: ${minute}`);
    if (hour === 7 && minute > 55) {
      console.log(`It's ${hour}:${minute}, invoking checkin()`)
      checkin();
      await waitForHour(5)
    } else if (hour === 12 && minute > 25) {
      checkin()
      await waitForHour(2)
    } else if (hour ===2 && minute > 55) {
      checkin()
      await waitForHour(17)
    }
  }, 5000))
}
