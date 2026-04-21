function solve(input) {
  const memberCount = input.shift();

  let members = {};
  for (let i = 0; i < memberCount; i++) {
    const memberData = input.shift().split(" ");

    const name = memberData[0];
    const role = memberData[1];
    const skills = memberData[2].split(",");

    members[name] = { role, skills };
  }

  let commandData = "";
  while ((commandData = input.shift()) != "End") {
    let [action, name, role, skill] = commandData.split(" / ");

    switch (action) {
      case "Perform":
        const currentMember = members[name];
        if (
          currentMember.role == role &&
          currentMember.skills.includes(skill)
        ) {
          console.log(
            `${name} has successfully performed the skill: ${skill}!`,
          );
        } else {
          console.log(`${name} cannot perform the skill: ${skill}.`);
        }
        break;
      case "Reassign":
        members[name].role = role;
        console.log(`${name} has been reassigned to: ${role}`);
        break;
      case "Learn Skill":
        const skillToLearn = role;
        if (members[name].skills.includes(skillToLearn)) {
          console.log(`${name} already knows the skill: ${skillToLearn}.`);
        } else {
          members[name].skills.push(skillToLearn);
          console.log(`${name} has learned a new skill: ${skillToLearn}.`);
        }
        break;
    }
  }

  for (const name in members) {
    const sortedSkills = members[name].skills.sort((a, b) =>
      a.localeCompare(b),
    );
    console.log(
      `Guild Member: ${name}, Role: ${members[name].role}, Skills: ${sortedSkills.join(", ")}`,
    );
  }
}

solve([
  "3",
  "Arthur warrior swordsmanship,shield",
  "Merlin mage fireball,teleport",
  "Gwen healer healing,alchemy",
  "Perform / Arthur / warrior / swordsmanship",
  "Perform / Merlin / warrior / fireball",
  "Learn Skill / Gwen / purification",
  "Perform / Gwen / healer / purification",
  "Reassign / Merlin / healer",
  "Perform / Merlin / healer / teleport",
  "End",
]);
