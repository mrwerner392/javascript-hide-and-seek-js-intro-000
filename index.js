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
  const rankedList = document.querySelectorAll('ul.ranked-list');
  for (let i = 0; i < rankedList.length; i++) {
    for (let j = 0; j < rankedList[i].length; j++) {
      let int = parseInt(rankedList[i][j]);
      rankedList[i][j] = int + n;
    }
    
  }
}
