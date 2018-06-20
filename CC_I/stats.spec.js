const getAverage = require('./stats');

describe('getAverage', () => {
  let oneWeek = [
    {date: new Date('2018-01-01'), visits: 13},
    {date: new Date('2018-01-02'), visits: 10},
    {date: new Date('2018-01-03'), visits: 47},
    {date: new Date('2018-01-04'), visits: 101},
    {date: new Date('2018-01-05'), visits: 22},
    {date: new Date('2018-01-06'), visits: 0},
    {date: new Date('2018-01-07'), visits: 18}
  ];

  let oneMonth = [
    {date: new Date('2018-01-02'), visits: 82},
    {date: new Date('2018-01-03'), visits: 74},
    {date: new Date('2018-01-04'), visits: 35},
    {date: new Date('2018-01-05'), visits: 54},
    {date: new Date('2018-01-06'), visits: 64},
    {date: new Date('2018-01-07'), visits: 44},
    {date: new Date('2018-01-08'), visits: 33},
    {date: new Date('2018-01-09'), visits: 84},
    {date: new Date('2018-01-10'), visits: 71},
    {date: new Date('2018-01-11'), visits: 39},
    {date: new Date('2018-01-12'), visits: 52},
    {date: new Date('2018-01-13'), visits: 61},
    {date: new Date('2018-01-14'), visits: 43},
    {date: new Date('2018-01-15'), visits: 33},
    {date: new Date('2018-01-16'), visits: 83},
    {date: new Date('2018-01-17'), visits: 77},
    {date: new Date('2018-01-18'), visits: 33},
    {date: new Date('2018-01-19'), visits: 50},
    {date: new Date('2018-01-20'), visits: 66},
    {date: new Date('2018-01-21'), visits: 45},
    {date: new Date('2018-01-22'), visits: 10},
    {date: new Date('2018-01-23'), visits: 81},
    {date: new Date('2018-01-24'), visits: 20},
    {date: new Date('2018-01-25'), visits: 75},
    {date: new Date('2018-01-26'), visits: 1},
    {date: new Date('2018-01-27'), visits: 94},
    {date: new Date('2018-01-28'), visits: 64},
    {date: new Date('2018-01-29'), visits: 0},
    {date: new Date('2018-01-30'), visits: 55},
    {date: new Date('2018-01-31'), visits: 68}
  ];

  let noDataEntries = [];
  let totalSeries = oneWeek.concat(oneMonth).concat(noDataEntries);

  test('average of one week', () => {
    expect(getAverage(oneWeek)).toEqual({
      averageVisits: 30.1428571428571429
    });
  });

  test('average of one month', () => {
    expect(getAverage(oneMonth)).toEqual({
      averageVisits: 53.0333333333333333
    });
  });

  test('average of total series', () => {
    expect(getAverage(totalSeries)).toEqual({
      averageVisits: 58.1290322580645161
    });
  });

  test('average of a time period with no data entries', () => {
    expect(getAverage(noDataEntries)).toEqual({
      averageVisits: 0,
    });
  });

  test('week days average of one week', () => {
    expect(getAverage(oneWeek, true)).toEqual({
      Monday: {
        averageVisits: 13,
      },
      Tuesday: {
        averageVisits: 10,
      },
      Wednesday: {
        averageVisits: 47,
      },
      Thursday: {
        averageVisits: 101
      },
      Friday: {
        averageVisits: 22
      },
      Saturday: {
        averageVisits: 0
      },
      Sunday: {
        averageVisits: 18
      },
    });
  });

  test('week days average of one month', () => {
    expect(getAverage(oneMonth, true)).toEqual({
      Monday: {
        averageVisits: 19,
      },
      Tuesday: {
        averageVisits: 77,
      },
      Wednesday: {
        averageVisits: 62,
      },
      Thursday: {
        averageVisits: 45.5,
      },
      Friday: {
        averageVisits: 39.25,
      },
      Saturday: {
        averageVisits: 71.25,
      },
      Sunday: {
        averageVisits: 49,
      },
    });
  });

  test('week days average of total series', () => {
    expect(getAverage(totalSeries, true)).toEqual({
      Monday: {
        averageVisits: 17.8,
      },
      Tuesday: {
        averageVisits: 79,
      },
      Wednesday: {
        averageVisits: 71.4,
      },
      Thursday: {
        averageVisits: 70.75,
      },
      Friday: {
        averageVisits: 44.75,
      },
      Saturday: {
        averageVisits: 71.25,
      },
      Sunday: {
        averageVisits: 53.5,
      },
    });
  });

  test('week days average of a time period with no data entries', () => {
    expect(getAverage(noDataEntries, true)).toEqual({
      Monday: {
        averageVisits: 0,
      },
      Tuesday: {
        averageVisits: 0,
      },
      Wednesday: {
        averageVisits: 0,
      },
      Thursday: {
        averageVisits: 0,
      },
      Friday: {
        averageVisits: 0,
      },
      Saturday: {
        averageVisits: 0,
      },
      Sunday: {
        averageVisits: 0,
      },
    });
  });
});
