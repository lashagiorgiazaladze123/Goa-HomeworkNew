function rentalCarCost(d) {
    return d * 40 - (d >= 7 ? 50 : (d >= 3 ? 20 : 0));
  }



  function removeExclamationMarks(s) {
    return s.replace(/!/gi, '');
  }

  function getAverage(marks){
    return Math.floor(marks.reduce((sum, x) => sum + x) / marks.length);
  }

  const number = (busStops) => busStops.reduce((rem, [on, off]) => rem + on - off, 0);