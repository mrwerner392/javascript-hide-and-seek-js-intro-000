// return the first element that matches a selectors
function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.getElementById('nested').getElementByClassName('target');
}
