let writeCards = (names, expletive) => {
  let messages = [];
  names.forEach((name) => {
    console.log(`Thank you, ${name}, for the wonderful ${expletive} gift!`);
    messages.push(`Thank you, ${name}, for the wonderful ${expletive} gift!`);
  });
  return messages;
};

let countDown = (p) => {
  for (let i = 0; i <= p; i++) {
    console.log(p - i);
  }
};

countDown(4);
