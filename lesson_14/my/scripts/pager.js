const btns = [];
const pagerRoot = document.createElement('ul');

function deactivate() {
  for (let i = 0; i < btns.length; i++) {
    btns[i].classList.remove('pager__item_active')
  }
}

function activateItem() {
  deactivate();
  btns[i].classList.add('pager__item_active')
}

function createItem(i, onItemClick) {
  const li = document.createElement('li');
  const button = document.createElement('button');
  li.classList.add('pager__item')
  button.classList.add('pager__btn');
  button.addEventListener('click', () => {
    onItemClick(i);
    activateItem(i);
  })
  li.append(button);
  btns.push(button)
  return li;
}


function createPager(root, itemCount, onItemClick) {
  console.log(root, itemCount, onItemClick);
  pagerRoot.classList.add('pager');
  for (let i = 0; i < itemCount; i++) {
    const li = createItem(i, onItemClick)
    pagerRoot.append(li);
  }
  root.append(pagerRoot);
}


export {
  createPager
}