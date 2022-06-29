msec = 0
sec = 0
min = 0
let a = document.getElementById('msec')
let b = document.getElementById('sec')
let c = document.getElementById('min')
let interval;

let start = () => {

  interval = setInterval(function () {
    msec++
    // a.innerHTML = msec
    a.innerHTML = msec < 10 ? `0${msec}` : msec
    if (msec == 100) {
      sec++
      b.innerHTML = sec < 10 ? `0${sec}` : sec
      msec = 0
    }
    else if (sec == 59) {
      min++
      c.innerHTML = min < 10 ? `0${min}` : min
      sec = 0
    }
  }, 10)
  let resume = document.getElementById('main').disabled = true
}

let pause = () => {
  clearInterval(interval)
  let resume = document.getElementById('main').disabled = false
}

let reset = () => {
  msec = 0
  sec = 0
  min = 0
  a.innerHTML = 0
  b.innerHTML = 0
  c.innerHTML = 0
}