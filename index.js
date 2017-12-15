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
  let deepest;
  const queue = [document.querySelector('div#grand-node')];
  
  function addToQueue(node) {
    queue.push(node);
  }
  
  while (queue.length > 0) {
    if (queue[0].children.length > 0) {
      const children = Array.from(queue[0].children);
      children.forEach( addToQueue() );
    }
    if (queue.length === 1) {
      deepest = queue[0];
    }
    queue.shift();
  }
  
  return deepest;
}
