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
  
  const queue = [document.querySelector('div#grand-node')];
  
  while (queue.length > 0) {
    if (queue[0].children.length > 0) {
      queue[0].children.forEach( child => queue.push(ch) );
    }
  }
  
  
  
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
