const getSleepHours = (day) => {
  let hours = 8;
  switch (day) {
    case "monday":
      return hours;
      break;
    case "tuesday":
      return hours;
      break;
    case "wednesday":
      return hours;
      break;
    case "thursday":
      return hours;
      break;
    case "friday":
      return hours;
      break;
    case "saturday":
      return hours;
      break;
    case "sunday":
      return hours;
      break;
    default:
      return "Error, type a day";
  }
};

const getActualSleepHours = () =>
  getSleepHours("monday") +
  getSleepHours("tuesday") +
  getSleepHours("wednesday") +
  getSleepHours("thursday") +
  getSleepHours("friday") +
  getSleepHours("saturday") +
  getSleepHours("sunday");

const getIdealSleepHours = () => {
  let idealHours = 8;
  return idealHours * 7;
};

const calculateSleepHours = () => {
  const actualSleepDebt = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours();
  let totalDebt = 0;
  if (actualSleepDebt === idealSleepHours) {
    totalDebt = actualSleepDebt - idealSleepHours;
    return "Your seelp is perfect";
  } else if (actualSleepDebt < idealSleepHours) {
    totalDebt = actualSleepDebt - idealSleepHours;
    return `you should get some res total sleep is ${totalDebt}`;
  } else if (actualSleepDebt > idealSleepHours) {
    totalDebt = actualSleepDebt - idealSleepHours;
    return `you got more sleep than needed total hours ${totalDebt}`;
  }
};

console.log(calculateSleepHours());
