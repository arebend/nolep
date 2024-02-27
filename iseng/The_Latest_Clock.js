function latestClock(a, b, c, d) {
  let latestTime = -1;

  // Helper function to check if a time is valid
  const isValidTime = (hour, minute) =>
    hour >= 0 && hour < 24 && minute >= 0 && minute < 60;

  // Helper function to swap two elements in an array
  const swap = (arr, i, j) => {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  };

  // Helper function to generate all permutations of the digits
  const generatePermutations = (arr, start) => {
    if (start === arr.length - 1) {
      const [h1, h2, m1, m2] = arr;
      const hour = h1 * 10 + h2;
      const minute = m1 * 10 + m2;

      if (
        isValidTime(hour, minute) &&
        (hour > latestTime ||
          (hour === latestTime && minute > latestTime % 100))
      ) {
        latestTime = hour * 100 + minute;
      }
    } else {
      for (let i = start; i < arr.length; i++) {
        swap(arr, start, i);
        generatePermutations(arr, start + 1);
        swap(arr, start, i);
      }
    }
  };
  // Initial call to generate permutations
  generatePermutations([a, b, c, d], 0);

  // Format the result as HH:MM
  const resultHour = Math.floor(latestTime / 100);
  const resultMinute = latestTime % 100;

  return `${resultHour.toString().padStart(2, "0")}:${resultMinute
    .toString()
    .padStart(2, "0")}`;
}

console.log(latestClock(1, 9, 8, 3)); //"19:38"
console.log(latestClock(9, 1, 2, 5)); //"21:59"
console.log(latestClock(1, 2, 8, 9)); //"19:28"
console.log(latestClock(0, 0, 0, 0)); //"00:00"
console.log(latestClock(0, 0, 0, 0)); //"20:40"
