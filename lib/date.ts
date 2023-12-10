export const getTimeDifference = (recentDate: Date): string => {
  const currentDate = new Date();
  const previousDate = new Date(recentDate);
  const timeDifference = currentDate.getTime() - previousDate.getTime();

  const seconds = Math.floor(timeDifference / 1000);
  if (seconds < 60) {
    return `${seconds} Seconds ago`;
  }

  const minutes = Math.floor(seconds / 60);
  if (minutes < 60) {
    return `${minutes} Minutes ago`;
  }

  const hours = Math.floor(minutes / 60)
  if (hours < 24) {
    return `${hours} Hours ago`
  }
  return previousDate.toLocaleString();
}