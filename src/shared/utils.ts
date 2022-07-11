export const getFormattedTime = (date: number): string => {
  let dateObject = new Date(date);

  let hours = String('0' + dateObject.getHours()).slice(-2);
  let minutes = String('0' + dateObject.getMinutes()).slice(-2);

  return `${hours}:${minutes}`;
};

export const toTemperatureFormat = (temperature: number, sign = false): string => {
  if (sign) {
    return temperature >= 0 ? `+${Math.round(temperature)}°` : `-${Math.round(temperature)}°`;
  }
  return `${Math.round(temperature)}°`;
};

export const capitalizeFirstLetter = (string: string): string => {
  switch (string.length) {
    case 0:
      return '';

    case 1:
      return string.toUpperCase();

    default:
      return string[0].toUpperCase() + string.slice(1);
  }
};
