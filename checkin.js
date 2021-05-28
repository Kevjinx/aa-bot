const {Builder, By, Key, until} = require('selenium-webdriver');
require('dotenv').config();
const cssSelectorCheckinBtn = '.student-check-in-form button'


const checkin = async () => {
  const driver = await new Builder().forBrowser('firefox').build();
    await driver.get('https://progress.appacademy.io/me');
    await driver.findElement(By.className('button')).click();
    await driver.findElement(By.id('login_field')).sendKeys(process.env.user)
    await driver.findElement(By.id('password')).sendKeys(process.env.pass, Key.RETURN)

    try {
      await driver.findElement(By.cssSelector(cssSelectorCheckinBtn)).click()
    } catch(err){

    }

}


const waitForHour = hour => new Promise(resolve=> setTimeout(resolve, hour*3600000))

let time = new Date();
let hour = time.getHours();
let minute = time.getMinutes();

const intervalCheckin = () => {
  setInterval(async () => {
    if (hour === 7 && minute > 55) {
      checkin();
      await waitForHour(5)
    } else if (hour === 12 && minute > 25) {
      checkin()
      await waitForHour(2)
    } else if (hour ===2 && minute > 55) {
      checkin()
      await waitForHour(17)
    }
  }, 100000);
}

intervalCheckin();
