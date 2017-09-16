let names = ["Jo","Mark H","Nic","Mate","Ben","Pete N","Pete T","Oli","Alex","Jack"];

//split them, then randomise, then pair them up = no duplicates
let splitNames = (i, names) => {
  let a = names.slice(0, i);
  let b = names.slice(i, names.length);
  return [a, b];
};

let shuffle = names => {
  return names.slice(0).sort(() => {
    return 0.5 - Math.random();
  });
};

let paired = names => {
  return names[0].map((players, i) => {
    return names.map((players) => {
      return players[i];
    });
  });
}

// this assumes an even number of players
if (names.length % 2 !== 0) {
   console.log("You must have an even number of players. You currently have " + names.length + " names.");
} else {
    let result = paired(splitNames(names.length / 2, shuffle(names)))
    console.log(result);
}
