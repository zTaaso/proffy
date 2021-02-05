export default (time: string) => {
  // time = "12:00"
  const [hours, minutes] = time.split(':').map(Number);

  const convertedMinutes = hours * 60 + minutes;
  return convertedMinutes;
};
