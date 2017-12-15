function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('#nested .target');
}

function increaseRankBy(n) {
  const liElts = document.querySelectorAll('.ranked-list li');
  
  liElts.forEach( liElt =>
    liElt.innerHTML = (parseInt(liElt.innerHTML) + n).toString()
  );
}

function deepestChild() {
  const parent = document.querySelector('div#grand-node');
  search(parent);
  
  function search(node) {
    const children = node.children;
    
    if (children.some( child => child.children.length > 0 )) {
      children.forEach( child => seach(child) );
    } else {
      return children[0];
    }
  }
}
