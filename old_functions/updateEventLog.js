function updateEventLog(contents) {
  let message = document.createElement('p');
  message.classList.add('event_message');
  message.innerHTML = contents;
  let event_log = document.getElementById('event_log');
  event_log.appendChild(message);
};
