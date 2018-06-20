const findDuplicates = (timePeriod) => {
  const cache = {};
  const results = [];
  for (let i = 0, len = timePeriod.length; i < len; i++) {
    if (cache[timePeriod[i].date] === true) {
      results.push(timePeriod[i]);
    } else {
      cache[timePeriod[i].date] = true;
    }
  }
  return results;
};

const getTimePeriodAverage = (timePeriod) => {
  if (timePeriod.length === 0) {
    return 0
  }
  else {
    const timePeriodVisits = timePeriod.reduce((a, b) => ({visits: a.visits + b.visits}));
    return timePeriodVisits.visits / (timePeriod.length - findDuplicates(timePeriod).length) ;
  }
};

const getWeekDaysAverageOfTimePeriod = (timePeriod, dayOfWeek) => {
  if (timePeriod.length === 0) {
    return 0
  }
  else {
    const days = timePeriod.filter(elem => elem.date.getDay() === dayOfWeek);
    const dayOfWeekSum = days.reduce((a, b) => ({visits: a.visits + b.visits}));
    return dayOfWeekSum.visits / days.length;
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
