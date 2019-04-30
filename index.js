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
  const rankedList = document.getElementsByClassName('ranked-list');
  for (let i = 0; i < rankedList.length; i++) {
    let int = parseInt(rankedList[i]);
    rankedList[i] = int + n;
  }
}