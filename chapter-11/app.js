// dates & Time
const now = new Date();
const before = new Date('April 1 1999 12:30:59');



console.log(now);
console.log(typeof now);

// year, month, day, time
console.log('getFullYear : ', now.getFullYear());
console.log('getMonth : ', now.getMonth());
console.log('getDate : ', now.getDate());
console.log('getDay : ', now.getDay());
console.log('getHours : ', now.getHours());
console.log('getMinutes : ', now.getMinutes());
console.log('getSeconds : ', now.getSeconds());

// timeStamps
console.log('timestamp :', now.getTime());
const diff = now.getTime() - before.getTime();
console.log('before: ', before)
console.log( 'the difference : ',diff);

const mins = Math.round(diff / 1000/60);
const hours = Math.round(mins / 60);
const days = Math.round(hours / 24);
console.log('minutes: ',mins);
console.log('hours: ',hours);
console.log('days: ', days);
console.log(`i was born ${days} ago`);

// converting timestamp into date objects
const timestamp = 1662026182060;
console.log(new Date(timestamp));

// date strings
console.log(now.toDateString());
console.log(now.toTimeString());
console.log(now.toLocaleString());


// Digital clock

// querySelector 
const clock = document.querySelector('.clock');

const tick = ()=>{
    const now = new Date();
    const h = now.getHours();
    const m = now.getMinutes();
    const s = now.getSeconds();
   
    const html = `
    <span>${h}</span> : 
    <span>${m}</span> : 
    <span>${s}</span> : 
    `;
    clock.innerHTML = html;
};
setInterval(tick, 1000);

// using date-fns library
console.log(dateFns.isToday(now));

// Formatting options
console.log(dateFns.format(now,'YYYY'));
console.log(dateFns.format(now,'MMMM'));
console.log(dateFns.format(now,'dddd'));
console.log(dateFns.format(now,'Do'));
console.log(dateFns.format(now,'dddd,Do,MMM,YYYY'));
console.log(dateFns.format(now,'dddd Do MMM YYYY'));

// comparing dates

const BEFORE = new Date('April 1 1999 12:30:59');

console.log(dateFns.distanceInWords(now, BEFORE))