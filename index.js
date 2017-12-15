function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('#nested .target');
}

function increaseRankBy(n) {
  liElts = Array.from(document.querySelectorAll('.ranked-list li'));
  
  liElts.forEach( function(liElt) {
    liElt.innerHTML = (parseInt(liElt.innerHTML) + n).toString();
  });
}