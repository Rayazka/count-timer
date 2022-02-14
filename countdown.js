const couDown = new Date('2 April 2022');
const coronaDate = new Date('2 Maret 2020');

const minute = 1000 * 60;
const hour = minute * 60;
const day = hour * 24;
const year = day * 365;

function countDown(date) {
  const hariH = document.querySelector('.countDown .hari');
  const jamH = document.querySelector('.countDown .jam');
  const menitH = document.querySelector('.countDown .menit');
  const detikH = document.querySelector('.countDown .detik');
  const roundDayH = document.querySelector(".countDown .roundDay");
  const finishDateH = document.querySelector(".countDown .finishDate");

  setInterval(() => {
    let coDown = new Date(date).getTime();
    let nowDate = new Date().getTime();
    let totalDetik = coDown - nowDate;

    let hari = Math.floor(totalDetik / day);
    let jam = Math.floor(totalDetik % day / hour);
    let menit = Math.floor((totalDetik % hour) / minute);
    let detik = Math.floor((totalDetik % minute) / 1000);
    let roundDay = Math.ceil(totalDetik / day);

    let dayName = getDayName(0, roundDay);
    let dateNumber = date.getDate();
    let monthName = getMonthName(0, roundDay)
    let fullYear = date.getFullYear();

    hariH.innerHTML = formatTime(hari);
    jamH.innerHTML = formatTime(jam);
    menitH.innerHTML = formatTime(menit);
    detikH.innerHTML = formatTime(detik);
    roundDayH.innerHTML = roundDay;
    finishDateH.innerHTML = `${dayName}, ${dateNumber} ${monthName} ${fullYear}`

    if (totalDetik <= 0) {
      const element = document.querySelector('.times');
      element.innerHTML = 'Finish';
      element.classList.add('finish');
    }
  }, 1000);
}

function countUp(date) {
  const tahunH = document.querySelector('.countUp .tahun');
  const hariH = document.querySelector('.countUp .hari');
  const jamH = document.querySelector('.countUp .jam');
  const menitH = document.querySelector('.countUp .menit');
  const detikH = document.querySelector('.countUp .detik');
  const dateSinceH = document.querySelector('.countUp .dateSince')

  setInterval(() => {

    let coUp = new Date(date).getTime();
    let nowDate = new Date().getTime();
    let totalDetik = (nowDate - coUp);

    let tahun = Math.floor(totalDetik / year);
    let hari = Math.floor(totalDetik / day % 365);
    let jam = Math.floor(totalDetik / hour % 24);
    let menit = Math.floor(totalDetik / minute % 60);
    let detik = Math.floor(totalDetik / 1000 % 60);

    let dayDate = date.getDate();
    let dayName = getDayName(dayDate);
    let monthName = getMonthName(date.getMonth());
    let fullYear = date.getFullYear();

    tahunH.innerHTML = tahun;
    hariH.innerHTML = formatTime(hari);
    jamH.innerHTML = formatTime(jam);
    menitH.innerHTML = formatTime(menit);
    detikH.innerHTML = formatTime(detik);
    dateSinceH.innerHTML = `${dayName}, ${dayDate} ${monthName} ${fullYear}`

  }, 1000);
}
function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}

function getDayName(date, numberDay){
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  
  if(numberDay == undefined){
    let dayName = days[date];
    return dayName;
    
  }else{
    let d = new Date();
    const dayNumber = new Date(d.setDate(d.getDate() + numberDay));
    let dayName = days[dayNumber.getDay()];
    return dayName;
  }
}

function getMonthName(date, numberMonth) {
  const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
  
  if(numberMonth == undefined){
    let monthName = months[date];
    return monthName;

  }else{
    const d = new Date();
    const dayNumber = new Date(d.setDate(d.getDate() + numberMonth));
    let monthName = months[dayNumber.getMonth()];
    return monthName;
  }
}


countDown(couDown);
countUp(coronaDate);