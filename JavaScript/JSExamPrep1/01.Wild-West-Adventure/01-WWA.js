function solve(input) {
  const charactersCount = input.shift();

  let characters = {};
  for (let i = 0; i < charactersCount; i++) {
    const data = input.shift().split(" ");
    const name = data[0];
    const health = Number(data[1]);
    const bullets = Number(data[2]);

    characters[name] = { health, bullets };
  }

  let commandData = "";
  while ((commandData = input.shift()) != "Ride Off Into Sunset") {
    let [action, name, ...args] = commandData.split(" - ");

    switch (action) {
      case "FireShot":
        const target = args[0];
        fireShot(name, target);
        break;
      case "TakeHit":
        const damage = Number(args[0]);
        const attacker = args[1];

        takeHit(name, damage, attacker);
        break;
      case "Reload":
        reload(name);
        break;
      case "PatchUp":
        let patchAmount = Number(args[0]);
        patchUp(name, patchAmount);
        break;
    }

    function fireShot(name, target) {
      let bullets = characters[name].bullets;

      if (bullets > 0) {
        let currentBullets = (characters[name].bullets -= 1);
        console.log(
          `${name} has successfully hit ${target} and now has ${currentBullets} bullets!`,
        );
      } else {
        console.log(
          `${name} doesn't have enough bullets to shoot at ${target}!`,
        );
      }
    }

    function takeHit(name, damage, attacker) {
      let character = characters[name];
      characters[name].health = Math.max(0, character.health - damage);

      if (character.health > 0) {
        console.log(
          `${name} took a hit for ${damage} HP from ${attacker} and now has ${character.health} HP!`,
        );
      } else {
        console.log(`${name} was gunned down by ${attacker}!`);
        delete characters[name];
      }
    }

    function reload(name) {
      let bullets = characters[name].bullets;
      if (bullets < 6) {
        console.log(`${name} reloaded ${6 - bullets} bullets!`);
        characters[name].bullets = 6;
      } else {
        console.log(`${name}'s pistol is fully loaded!`);
      }
    }

    function patchUp(character, amount) {
      const health = characters[character].health;
      if (health < 100) {
        characters[character].health = Math.min(100, health + amount);
        console.log(`${name} patched up and recovered ${amount} HP!`);
      } else {
        console.log(`${name} is in full health!`);
      }
    }
  }

  for (const name in characters) {
    console.log(name);
    console.log(` HP: ${characters[name].health}`);
    console.log(` Bullets: ${characters[name].bullets}`);
  }
}

solve([
  "2",
  "Gus 1000 1",
  "Walt 100 4",
  "FireShot - Gus - Bandit",
  "TakeHit - Gus - 100 - Bandit",
  "Reload - Walt",
  "Ride Off Into Sunset",
]);

solve([
  "2",
  "Gus 100 0",
  "Walt 100 6",
  "TakeHit - Gus - 80 - Bandit",
  "PatchUp - Gus - 20",
  "Ride Off Into Sunset",
]);
