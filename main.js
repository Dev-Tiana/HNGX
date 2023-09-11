function updateDateAndTime() {
    const currentDateElement = document.querySelector('.current-day');
    const currentTimeElement = document.querySelector('.current-time');
  
    const now = new Date();
  
    const optionsDate = { weekday: 'long' };
    const optionsTime = { hour: 'numeric', minute: 'numeric', second: 'numeric', timeZone: 'UTC' };
  
    const currentDay = new Intl.DateTimeFormat('en-US', optionsDate).format(now);
  
    const hours = String(now.getUTCHours()).padStart(2, '0');
    const minutes = String(now.getUTCMinutes()).padStart(2, '0');
    const seconds = String(now.getUTCSeconds()).padStart(2, '0');
    const milliseconds = String(now.getUTCMilliseconds()).padStart(3, '0');
  
    const formattedTime = `${hours}${minutes}${seconds}${milliseconds}`;
  
    currentDateElement.textContent = `Day: ${currentDay}`;
    currentTimeElement.textContent = `Time: ${formattedTime}`;
    }
  
    updateDateAndTime(); 
    setInterval(updateDateAndTime, 1000);