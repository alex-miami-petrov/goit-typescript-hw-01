enum DayOfWeek {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}

const isWeekend = (day: DayOfWeek): boolean => {
  return DayOfWeek.Saturday || DayOfWeek.Sunday;
};

const isWeekDay = (day: DayOfWeek): boolean => {
  return !isWeekend(day);
};
