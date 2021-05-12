// 5kyu - Human Readable Time

// Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

// HH = hours, padded to 2 digits, range: 00 - 99
// MM = minutes, padded to 2 digits, range: 00 - 59
// SS = seconds, padded to 2 digits, range: 00 - 59
// The maximum time never exceeds 359999 (99:59:59)

// Sample Tests:
// describe('examples', function() {
//   it('should format correctly', function() {
//     Test.assertEquals(humanReadable(0), '00:00:00', 'humanReadable(0)');
//     Test.assertEquals(humanReadable(5), '00:00:05', 'humanReadable(5)');
//     Test.assertEquals(humanReadable(60), '00:01:00', 'humanReadable(60)');
//     Test.assertEquals(humanReadable(86399), '23:59:59', 'humanReadable(86399)');
//     Test.assertEquals(humanReadable(359999), '99:59:59', 'humanReadable(359999)');
//   });
// });

function humanReadable(seconds) {
  let hours = Math.floor(seconds / 3600);
  seconds = seconds - hours * 3600;
  let minutes = Math.floor(seconds / 60);
  seconds = seconds - minutes * 60;

  hours = hours.toString().padStart(2, "0"); //o padstart no primeiro argumento, fala que você quer 2 casas decimais,
  // e no segundo, o que ele vai preencher caso só tenha 1 ou nenhuma.
  minutes = minutes.toString().padStart(2, "0");
  seconds = seconds.toString().padStart(2, "0");

  return `${hours}:${minutes}:${seconds}`;
}

//OU

function humanReadable(seconds) {
  let hours = seconds / 3600,
    minutes = (seconds / 60) % 60, //pois queremos só o que sobrou das horas!!!
    newSeconds = seconds % 60; //pois queremos o que sobrou dos minutos!
  return (
    formatDate(hours) + ":" + formatDate(minutes) + ":" + formatDate(newSeconds)
  );
}

function formatDate(n) {
  let number = Number.parseInt(n);
  return number > 9 ? number : "0" + number;
}

//OU

function humanReadable(seconds) {
  let hours = Math.floor(seconds / 3600);
  let minutes = Math.floor(seconds / 60) % 60;
  let seconds2 = Math.floor(seconds % 60);

  hours = hours.toString().padStart(2, "0"); //o padstart no primeiro argumento, fala que você quer 2 casas decimais,
  // e no segundo, o que ele vai preencher caso só tenha 1 ou nenhuma.
  minutes = minutes.toString().padStart(2, "0");
  seconds2 = seconds2.toString().padStart(2, "0");

  return `${hours}:${minutes}:${seconds2}`;
}

//OU

const humanReadable = (s) =>
  [s / 3600, (s % 3600) / 60, s % 60]
    .map((a) => ("0" + Math.trunc(a)).slice(-2))
    .join(":");

//OU

function humanReadable(seconds) {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds - hours * 3600) / 60);
  const sec = seconds - (minutes * 60 + hours * 3600);

  return (
    (hours > 9 ? hours : "0" + hours) +
    ":" +
    (minutes > 9 ? minutes : "0" + minutes) +
    ":" +
    (sec > 9 ? sec : "0" + sec)
  );
}
