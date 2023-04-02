const inputEl = document.querySelector('input');
const buttonEl = document.querySelector('.start');
const stopButtonEl = document.querySelector('.stop')
const timerEl = document.querySelector('p');

const createTimerAnimator = (totalSeconds, timerEl) => {
    let countdownInterval = setInterval(() => {
        totalSeconds--;
        if (totalSeconds < 0) {
            clearInterval(countdownInterval);
            timerEl.textContent = "00:00:00";
        } else {
            const hours = Math.floor(totalSeconds / 3600);
            totalSeconds %= 3600;
            const minutes = Math.floor(totalSeconds / 60);
            const seconds = totalSeconds % 60;
            timerEl.textContent = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        }
    }, 1000);

    stopButtonEl.addEventListener('click', () => {
        clearInterval(countdownInterval)
        timerEl.textContent = '00:00:00'
    })
};

buttonEl.addEventListener('click', () => {
  const inval = inputEl.value;
  
  if (isNaN(inval) || inval === "") {
    alert("Please enter a valid number.");
    return;
  }

  let totalSeconds = parseInt(inval, 10);
  
  const hours = Math.floor(totalSeconds / 3600);
  totalSeconds %= 3600;
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;

  timerEl.textContent = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`

  createTimerAnimator(totalSeconds, timerEl)

  inputEl.value = '';
});