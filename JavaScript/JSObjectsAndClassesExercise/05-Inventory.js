function solve(input) {
  let heroes = [];

  for (const row of input) {
    const hero = createHero(row);
    heroes.push(hero);
  }

  sortHeroes(heroes);

  for (const hero of heroes) {
    printHero(hero);
  }

  function createHero(row) {
    const [name, level, items] = row.split(" / ");

    const hero = {
      name,
      level: Number(level),
      items: items.split(", "),
    };

    return hero;
  }

  function sortHeroes(heroes) {
    heroes.sort((a, b) => a.level - b.level);
  }

  function printHero(hero) {
    console.log(`Hero: ${hero.name}`);
    console.log(`level => ${hero.level}`);
    console.log(`items => ${hero.items.join(", ")}`);
  }
}

solve([
  "Isacc / 25 / Apple, GravityGun",
  "Derek / 12 / BarrelVest, DestructionSword",
  "Hes / 1 / Desolator, Sentinel, Antara",
]);
