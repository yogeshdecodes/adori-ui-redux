export const msToTime = (duration) => {
  var seconds = Math.floor((duration / 1000) % 60),
    minutes = Math.floor((duration / (1000 * 60)) % 60),
    hours = Math.floor((duration / (1000 * 60 * 60)) % 24);

  hours = hours < 10 ? '0' + hours : hours;
  minutes = minutes < 10 ? '0' + minutes : minutes;
  seconds = seconds < 10 ? '0' + seconds : seconds;

  if (hours !== '00') return hours + 'h ' + minutes + 'm ' + seconds + 's';
  if (minutes !== '00') return minutes + 'm ' + seconds + 's';
  if (seconds !== '00') return seconds + 's';
};

export const formatDate = (rawDate) => {
  let ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(rawDate);
  let mo = new Intl.DateTimeFormat('en', { month: 'short' }).format(rawDate);
  let da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(rawDate);
  return `${da} ${mo} ${ye}`;
};
