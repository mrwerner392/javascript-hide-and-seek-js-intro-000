// return the first element that matches a selector
function getFirstSelector(selector) {
  return document.querySelector(selector);
}

// returns an element by ID "nested" and class name "target"
function nestedTarget() {
  return document.getElementById('nested').getElementsByClassName('target')[0];
}

// increases ranks in all .ranked-list by n
function increaseRankBy(n) {
  const rankedLists = document.querySelectorAll('.ranked-list li');
  for (let i = 0; i < rankedLists.length; i++) {
    let int = parseInt(rankedLists[i]);
    rankedLists[i] = int + n;
  }
}
