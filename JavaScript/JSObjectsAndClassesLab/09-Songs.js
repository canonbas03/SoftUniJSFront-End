function manageSongs(arr) {
  class Song {
    constructor(typeList, name, time) {
      this.typeList = typeList;
      this.name = name;
      this.time = time;
    }
  }

  let songsCount = arr.shift();
  let searchedTypeList = arr.pop();
  let songs = [];

  for (let i = 1; i <= songsCount; i++) {
    let [typeList, name, time] = arr.shift().split("_");

    let song = new Song(typeList, name, time);
    songs.push(song);
  }

  if (searchedTypeList === "all") {
    for (const songObj of songs) {
      console.log(songObj.name);
    }
  } else {
    let filteredSongs = songs.filter(
      (songObj) => songObj.typeList === searchedTypeList,
    );

    for (const songObj of filteredSongs) {
      console.log(songObj.name);
    }
  }
}

manageSongs([
  4,
  "favourite_DownTown_3:14",
  "listenLater_Andalouse_3:24",
  "favourite_In To The Night_3:58",
  "favourite_Live It Up_3:48",
  "listenLater",
]);
