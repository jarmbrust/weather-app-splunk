
export const kelvinToFahrenheit = k => {
  return (k * 9/5 - 459.67).toFixed(0);
};

export const weekday = day => {
  switch (day) {
    case 0:
      return 'Sunday'; 
    case 1:
      return 'Monday';
    case 2:
      return 'Tuesday';
    case 3:
      return 'Wednesday';
    case 4:
      return 'Thursday';
    case 5:
      return 'Friday';
    case 6:
      return 'Saturday';
    default:
      return '';
  }
};

export const formatDateTime = (unixDateTime, format) => {
  const date = new Date(unixDateTime * 1000);
  const day = date.getDay();
  const hours = date.getHours();
  const minutes = date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes();
  const meridiem = (hours + 1) > 12 ? 'PM' : 'AM';
  let mhours = (hours + 1) > 12 ? hours - 12 : hours;
  mhours = mhours === 0 ? mhours = 12 : mhours;
  return format === 'dateTimeLong' 
    ? `${weekday(day)} ${mhours}:${minutes} ${meridiem}` 
    : `${mhours} ${meridiem}`;
};
