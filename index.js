const {Builder, By, Key, until} = require('selenium-webdriver');
require('dotenv').config();

const checkin = () => {
  const driver = await new Builder().forBrowser('firefox').build();
  await driver.get('https://progress.appacademy.io/me');
  await driver.findElement(By.className('button')).click();
  await driver.findElement(By.id('login_field')).sendKeys(process.env.user)
  await driver.findElement(By.id('password')).sendKeys(process.env.pass, Key.RETURN)

}

checkin();
