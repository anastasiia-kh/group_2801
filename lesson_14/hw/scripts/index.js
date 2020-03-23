const btnMain = document.querySelector('.main-btn');

function getRandomColor() {
  //стырила в интернете
  var letters = '0123456789ABCDEF';
  var color = '#';

  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

function createCircle() {
  const message = Number(prompt('Enter count'));

  if (isNaN(message)) {
    alert('Please enter some integer');
  } else {
    for (var i = 1; i <= message; i++) {
      var btn = document.createElement("button");
      btn.classList.add('circle-btn');
      btn.style.backgroundColor = getRandomColor();
      document.body.append(btn);
    }
  };
};

function generate() {
  createCircle();
}

btnMain.addEventListener('click', generate);