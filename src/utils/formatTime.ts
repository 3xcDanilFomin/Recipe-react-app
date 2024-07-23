export const toHoursAndMinutes = (totalMinutes: number | undefined): string => {
  if (!totalMinutes) return ``;
  const minutes = totalMinutes % 60;
  const hours = Math.floor(totalMinutes / 60);

  const getCorrectMinutes = (minutes: number) => {
    if (minutes === 1) return "минута";
    if (minutes >= 2 && minutes <= 4) return "минуты";
    return "минут";
  };

  const getCorrectHours = (hours: number) => {
    if (hours === 1) return "час";
    if (hours >= 2 && hours <= 4) return "часа";
    return "часов";
  };

  if (!hours) {
    return `${minutes} ${getCorrectMinutes(minutes)}`;
  } else if (!minutes) {
    return `${hours} ${getCorrectHours(hours)}`;
  } else {
    return `${hours} ${getCorrectHours(hours)} ${minutes} ${getCorrectMinutes(
      minutes
    )}`;
  }
};
