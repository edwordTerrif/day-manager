const clock = document.querySelector(".js-clock"),
  time = clock.querySelector(".js-time"),
  period = clock.querySelector(".js-period");

let typesHandle;

/*
timeLine = [];
for(let i = 1; i < 25; i++) {
  timeLine.push(i);
}
timeLine.forEach(function(item) {
  console.log(timeConversion(item, "12").time)
})
*/

function timeConversion(hours, zone = "24") {
  const meridiem = hours < 12 || hours == 24 ? "AM" : "PM";
  const time = zone === "12" && hours > 12 ? hours-12 : hours;
  return {time: time, meridiem: meridiem};
}

function setupDate() {
  const date = new Date();
  const seconds = date.getSeconds(),
    minutes = date.getMinutes(),
    hours = date.getHours() === 0 ? 24 : date.getHours();
  init();

  const meridiem = timeConversion(hours).meridiem;

  if (typesHandle === "12hours") {
    const timeTwelve = timeConversion(hours, "12").time;
    time.innerText = `${timeTwelve < 10 ? `0${timeTwelve}` : timeTwelve}:${
      minutes < 10 ? `0${minutes}` : minutes
      }:${seconds < 10 ? `0${seconds}` : seconds}`;
    period.innerText = meridiem;
  } else {
    const timeTwentyfour = timeConversion(hours).time;
    time.innerText = `${timeTwentyfour < 10 ? `0${timeTwentyfour}` : timeTwentyfour}:${
      minutes < 10 ? `0${minutes}` : minutes
      }:${seconds < 10 ? `0${seconds}` : seconds}`;
    period.innerText = meridiem;
  }

  /*
  succ code
  localStorage.setItem("hour", hours);

  if (typesHandle === "12hours") {
    hoursChristmas();
    function hoursChristmas() {
      let hoursTL = "";
      const localValue = localStorage.hour;
      const transform =
        localValue > "12"
          ? (hoursTL = localValue - 12)
          : localValue === "0"
            ? (hoursTL = 12)
            : (hoursTL = localValue);

      time.innerText = `${hoursTL < 10 ? `0${hoursTL}` : hoursTL}:${
        minutes < 10 ? `0${minutes}` : minutes
        }:${seconds < 10 ? `0${seconds}` : seconds}`;

      if (hours >= 0 && hours < 12) {
        period.innerText = `AM`;
      } else if (hours >= 12 && hours <= 23) {
        period.innerText = `PM`;
      }
    }
  } else if (typesHandle === "24hours") {
    timeInterface();
    function timeInterface() {
      //console.log("timeinterface function active");
      time.innerText = `${
        hours === 0 ? `${24}` : hours < 10 ? `0${hours}` : hours
        }:${minutes < 10 ? `0${minutes}` : minutes}:${
        seconds < 10 ? `0${seconds}` : seconds
        }`;

      if (hours >= 0 && hours < 12) {
        period.innerText = `AM`;
      } else if (hours >= 12 && hours <= 23) {
        period.innerText = `PM`;
      }
      //console.log(timeInterface, periodInterface); // Execution test complet
    }
  }
  */

  function init() {
    new Intl.DateTimeFormat("ko-KR").format(hours);
  }
}

/*
setActive.addEventListener("click", hours12);
function hours12() {
  const boolean = setCheck.checked;
  localStorage.setItem("hours12", boolean);
  //location.reload(true);
}

function hoursType() {
  if (localStorage.hours12 === "true") {
    setCheck.checked = true;
  } else if (localStorage.hours12 === "false") {
    setCheck.checked = false;
  }
}

hoursType();
*/

function updateClock() {
  setupDate();
  setInterval(setupDate, 1000);
}
updateClock();
// function closer() {

//   function son1(c) {
//     console.log(2);
//     time.innerText = `${c}`;
//   }

//   function son2() {
//     console.log(3);
//     son1(3);
//   }

//   function update() {
//     setInterval(son2, 1000);
//   }
//   update();
// }
// closer();
/*
function stopInterval(variable) {
  console.log("stop");
  clearInterval(variable);
}

/*
function printTImeInterface(func) {
  return setInterval(func, 1000);
}

const a = printTImeInterface;
a();
clearInterval(a);


function react() {
  console.log("react");
  setActive.addEventListener("click", ifFunc);

  function intervalTImeInterface(func) {
    return setInterval(timeInterface, 1000);
  }
  const a = intervalTImeInterface;
  a();

  function ifFunc() {
    if (setCheck.checked === false) {
      console.log("false");
    } else {
      console.log("true");

    }
  }
}
react();
*/

//code testing
/*
function son() {
  closer(timeInterface);
}

function closer(typeFunc) {
  const interval = setInterval(typeFunc, 1000);
}
son()

function closer(typeFunc) {
  return setInterval
}
const a = new closer;
*/

/*
function closer() {
  const a = 5;
  function son() {
    console.log(a);
  }
  return son
}

const b = new closer();
b
b()
*/

/*
const active = document.getElementById("autotest");
active.autoplay = true;
active.load();
*/

/*
function test() {
  const d = new Date(),
    s = d.getSeconds();
  const t = s.toLocaleString();
  console.log(t);
}
function inter() {
  test()
  setInterval(test, 1000)
}
inter();
*/
