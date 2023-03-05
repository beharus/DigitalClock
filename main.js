const today = document.querySelector(".data");
const time = document.querySelector(".time");

const month = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Des",
];

function currentTime() {
  const data = new Date();
  const day = data.getDate();
  const monthNumb = data.getMonth();
  const year = data.getFullYear();
  const hours = data.getHours();
  const mins = data.getMinutes();
  const secs = data.getSeconds();
  let h = hours;
  let m = mins;
  let s = secs;
  let seccion = "AM";
  if (hours > 12) {
    h = hours - 12;
    seccion = "PM";
  } else {
    hours;
    seccion = "AM";
  }
  if (h < 10) {
    h = "0" + h;
  } else {
    h;
  }
  if (m < 10) {
    m = "0" + m;
  } else {
    m;
  }
  if (s < 10) {
    s = "0" + s;
  } else {
    s;
  }
  today.innerHTML = `${day} ${month[monthNumb]}, ${year}`;
  time.innerHTML = `${h} : ${m} : ${s} ${seccion}`;
}

setInterval(() => {
  currentTime();
}, 1000);
