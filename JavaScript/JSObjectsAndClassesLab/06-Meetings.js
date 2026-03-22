function scheduleMeetings(arr) {
  let meetings = {};

  for (const meetingStr of arr) {
    let [weekDay, name] = meetingStr.split(" ");

    if (!(weekDay in meetings)) {
      meetings[weekDay] = name;
      console.log(`Scheduled for ${weekDay}`);
    } else {
      console.log(`Conflict on ${weekDay}!`);
    }
  }

  let entries = Object.entries(meetings);
  for (let [weekDay, name] of entries) {
    console.log(`${weekDay} -> ${name}`);
  }
}

scheduleMeetings([
  "Friday Bob",
  "Saturday Ted",
  "Monday Bill",
  "Monday John",
  "Wednesday George",
]);
