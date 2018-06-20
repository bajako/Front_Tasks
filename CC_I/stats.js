const eraseDuplicate = (timePeriod) => {
  let seen = {};
  let noDuplicates = [];
  let j = 0;
  for (let i = 0; i < timePeriod.length; i++) {
    let item = timePeriod[i];
    if (seen[item.date] !== 1) {
      seen[item.date] = 1;
      noDuplicates[j++] = item;
    }
  }
  return noDuplicates;
};

const getTimePeriodAverage = (timePeriod) => {
  if (timePeriod.length === 0) {
    return 0
  }
  else {
    const timePeriodVisits = timePeriod.reduce((a, b) => ({visits: a.visits + b.visits}));
    return timePeriodVisits.visits / eraseDuplicate(timePeriod).length;
  }
};

const getWeekDaysAverageOfTimePeriod = (timePeriod, dayOfWeek) => {
  if (timePeriod.length === 0) {
    return 0
  }
  else {
    const timePeriodWithNoDuplicates = eraseDuplicate(timePeriod);
    const days = timePeriod.filter(elem => elem.date.getDay() === dayOfWeek);
    const daysWithNoDuplicates = timePeriodWithNoDuplicates.filter(elem => elem.date.getDay() === dayOfWeek);
    const dayOfWeekSum = days.reduce((a, b) => ({visits: a.visits + b.visits}));
    return dayOfWeekSum.visits / daysWithNoDuplicates.length;
  }
};

const getAverage = (timePeriod, showWeekDaysAverage) => {
  if (showWeekDaysAverage) {
    return {
      'Monday': {'averageVisits': getWeekDaysAverageOfTimePeriod(timePeriod, 1)},
      'Tuesday': {'averageVisits': getWeekDaysAverageOfTimePeriod(timePeriod, 2)},
      'Wednesday': {'averageVisits': getWeekDaysAverageOfTimePeriod(timePeriod, 3)},
      'Thursday': {'averageVisits': getWeekDaysAverageOfTimePeriod(timePeriod, 4)},
      'Friday': {'averageVisits': getWeekDaysAverageOfTimePeriod(timePeriod, 5)},
      'Saturday': {'averageVisits': getWeekDaysAverageOfTimePeriod(timePeriod, 6)},
      'Sunday': {'averageVisits': getWeekDaysAverageOfTimePeriod(timePeriod, 0)}
    };
  }
  else {
    return {
      'averageVisits': getTimePeriodAverage(timePeriod)
    }
  }
};

module.exports = getAverage;
