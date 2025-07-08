const messages = [
  "Q: Did you hear about the actor who fell through the floorboards? A: He was just going through a stage",
  "Q: What do you call fake spaghetti? A: An impasta",
  "Q: How many tickles does it take to make an octopus laugh? A: Ten-tickles",
  "Q: Why do we tell actors to break a leg? A: Because every play has a cast",
  "Q: What do you call cheese that isn't yours? A: Nacho cheese",
  "Q: Why is a baseball stadium always cold? A: Because it’s full of fans!",
  "Q: How do you get a tissue to dance? A: You put a boogie in it",
  "Q: Did you hear about the famous pickle? A: He was a big dill!",
  "Q: What do you call a can opener that doesn't work? A: A can't opener",
  "Q: What do you call a sad cup of coffee? A: Depresso",
  "Q: Why did the picture go to jail? A: Because it was framed",
  "Q: Why didn’t the teddy bear eat dessert? A: He was stuffed",
  "Q: What do you call a bee that can’t make up its mind? A: A maybe",
  "Q: What do you call a cow with no legs? A: Ground beef",
  "Q: Why did the coffee file a police report? A: It got mugged",
  "Q: What do you call a cow with two legs? A: Lean beef",
  "Q: Why did the tomato turn red? A: Because it saw the salad dressing!",
  "Q: Why did the coffee file a police report? A: It got mugged",
  "Q: Why can’t you trust atoms? A: They make up everything",
];

function randNum() {
  return Math.floor(Math.random() * messages.length);
}

function getCurrentTimestamp() {
  return new Date().toLocaleString();
}

function getRandomColor() {
  const colors = ['red', 'blue', 'green', 'yellow', 'purple', 'orange', 'pink', 'cyan', 'violet','brown', 'black', 'white', 'gray', 'silver', 'gold', 'beige', 'turquoise', 'lavender', 'magenta', 'indigo', 'maroon', 'navy blue', 'olive', 'teal'];
  return colors[Math.floor(Math.random() * colors.length)];
}

function getVerb() {
  const verbs = ['wearing', 'running', 'swimming', 'looking', 'using', ''];
  return verbs[Math.floor(Math.random() * verbs.length)];
}

function getNoun() {
  const nouns = ['increase', 'decrease', 'enhance', 'influence'];
  return nouns[Math.floor(Math.random() * nouns.length)];
}

function getPreposition(verb) {
  switch (verb) {
    case 'wearing': return 'anything ';
    case 'running': return 'in ';
    case 'swimming': return 'with ';
    case 'looking': return 'at ';
    case 'using': return '';
  }
}

function displayJoke() {
  const jokeIndex = randNum();
  const joke = messages[jokeIndex];
  const randVerb = getVerb();
  const verb  = randVerb;
  const randNoun = getNoun();
  const favoriteColor = getRandomColor();
  const color = favoriteColor;
  const preposition = getPreposition(verb);

  console.log(`
  Joke: ${joke}
  
  This color can today ${randNoun} your luck: ${favoriteColor}
  
  if the joke is not funny to you, then you should probably avoid ${randVerb} ${preposition}${color}
  `);
}

displayJoke();