const poll = new Map();
poll.set("Turkey", new Set("trav1"));
poll.set("Morocco", new Set("tt"));
poll.set("Spain", new Set("ttt"));

function addOption(option) {
  if (option === "") {
    return "Option cannot be empty.";
  } else if (poll.has(option)) {
    return `Option "${option}" already exists.`;
  } else {
    poll.set(option, new Set());
    return `Option "${option}" added to the poll.`;
  }
}

function vote(option, voterId) {
  if (!poll.has(option)) {
    return `Option "${option}" does not exist.`;
  } else {
    if (poll.get(option).has(voterId)) {
      return `Voter ${voterId} has already voted for "${option}".`;
    } else {
      poll.get(option).add(voterId);
      return `Voter ${voterId} voted for "${option}".`;
    }
  }
}

function displayResults() {
  let result = "Poll Results:";
  for (let [option, voters] of poll) {
    result += `\n${option}: ${voters.size} votes`;
  }
  return result;
}
