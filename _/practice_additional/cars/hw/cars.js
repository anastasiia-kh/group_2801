const Car = function (x, y) {
  this.x = x;
  this.y = y;
};
Car.prototype.draw = function () {
  const carHtml = '<img src="http://nostarch.com/images/car.png">';
  this.carElement = $(carHtml);
  this.carElement.css({
    position: "absolute",
    left: this.x,
    top: this.y
  });
  $("body").append(this.carElement);
};

const tesla = new Car(0, 20);
const nissan = new Car(0, 100);
tesla.draw();
nissan.draw();

Car.prototype.remove = function () {
  this.carElement.css({
    position: "absolute",
    visibility: 'hidden'
  });
}

function callback() {
  tesla.remove()
  nissan.remove()
  tesla.x += 45;
  nissan.x += 40;
  tesla.draw();
  nissan.draw();
  tesla.x += 60;
  nissan.x += 100;
  console.log('moove')

}

setInterval(callback.bind(this), 900);