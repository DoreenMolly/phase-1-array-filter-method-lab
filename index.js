// Code your solution here
function findMatching(from, filtered) {
    return from.filter(
      (theMatch) => theMatch.toLowerCase() === filtered.toLowerCase()
    );
  }
  
  function fuzzyMatch(from, name) {
    return from.filter(
      (possibleMatch) =>
        possibleMatch.toLowerCase().indexOf(name.toLowerCase()) === 0
    );
  }
  
  function matchName(from, filteredName) {
    return from.filter((record) => record.name === filteredName);
}