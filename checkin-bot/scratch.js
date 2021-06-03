let time = new Date();
let hour = time.getHours();
let minute = time.getMinutes();
let day = time.getDay();

let timeConditions = () => {
  if (hour === 7 && minute > 55) return true;
  if (hour === 12 && minute > 25) return true;
  if (hour ===2 && minute > 55 ) return true;
  return false;
}

setInterval(() => {
  if (timeConditions()) checkin();
}, 60000);
