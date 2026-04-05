function solve(input) {
  const towns = input.map(parseTown);

  towns.forEach(printTown);

  function parseTown(row = "") {
    const [town, lat, long] = row.split(" | ");

    const result = {
      town,
      latitude: Number(lat),
      longtitude: Number(long),
    };

    return result;
  }

  function printTown(town) {
    const printableTown = {
      town: town.town,
      latitude: town.latitude.toFixed(2),
      longitude: town.longtitude.toFixed(2),
    };

    console.log(printableTown);
  }
}

solve(["Sofia | 42.696552 | 23.32601", "Beijing | 39.913818 | 116.363625"]);
