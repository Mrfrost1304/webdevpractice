let countdownInterval;
window.onload = () => {
  const stored = localStorage.getItem('countdownData');
  if (stored) {
    const { name, date, time } = JSON.parse(stored);
    startCountdown(name, date, time);
  }
};

let getdetails = () => {
  let eventName = document.querySelector('#eventName').value.trim();
  let eventDate = document.querySelector('#date-Time').value;

  if (eventName === '' || eventDate === '') {
    alert('Please fill in all fields');
    return;
  }

  localStorage.setItem(
    'countdownData',
    JSON.stringify({
      name: eventName,
      date: eventDate,
    })
  );

  startCountdown(eventName, eventDate);
};
let startCountdown = (eventName, eventDate) => {
  document.querySelector('.setTimer').style.display = 'none';
  document.querySelector('.countdown').style.display = 'block';
  document.querySelector('#title').innerText = eventName;

  let targetDateTime = new Date(eventDate).getTime();

  clearInterval(countdownInterval);
  countdownInterval = setInterval(() => {
    let now = new Date().getTime();
    let difference = targetDateTime - now;

    if (difference <= 0) {
      clearInterval(countdownInterval);
      document.querySelector('#days').innerText = '00 Days';
      document.querySelector('#hours').innerText = '00 Hours';
      document.querySelector('#minutes').innerText = '00 Minutes';
      document.querySelector('#seconds').innerText = '00 Seconds';
      return;
    }

    let d = Math.floor(difference / (1000 * 60 * 60 * 24));
    let h = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    let s = Math.floor((difference % (1000 * 60)) / 1000);

    document.querySelector('#days').innerText = `${d} Days`;
    document.querySelector('#hours').innerText = `${h} Hours`;
    document.querySelector('#minutes').innerText = `${m} Minutes`;
    document.querySelector('#seconds').innerText = `${s} Seconds`;
  }, 1000);
};

let reset = () => {
  clearInterval(countdownInterval);
  localStorage.removeItem('countdownData');

  document.querySelector('#eventName').value = '';
  document.querySelector('#date-Time').value = '';

  document.querySelector('.setTimer').style.display = 'block';
  document.querySelector('.countdown').style.display = 'none';
};
