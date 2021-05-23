Are you a couple strikes away from getting expell from app academy because you got so caught up ;) on studying and coding?

Let's not let that happen.


---------------------------------------------------------------------
To run:

run npm install for selenium-webdriver, and dotenv (to store your github logins)

The script uses selenium webdrivers and dotenv, so you would need to download the firefox webdriver and add it to your path.

Follow the instruction on selenium api doc: https://www.selenium.dev/selenium/docs/api/javascript/module/selenium-webdriver/firefox.html

You can use chrome driver, just change the 'forBrowser' under new builder instance in index.js

Create an .env file and paste your info in this format:
user='your github email'
pass='your github password'
---------------------------------------------------------------------

The script is kinda janky, it just use some time and conditional in an interval.

But it will work (I just need to get the checkin button element)

Future feature: instructions on running the script on startup, reduce the intervals, and auto report fill out with.
