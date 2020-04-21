function Lamp(rootElement, color) { //rootElement - место вставки
  this.rootElement = rootElement;
  this.color = color;
  this.element = null;
  this.isEnabled - false;



}
Lamp.prototype.render = function () {
  this.element = document.createElement('div');
  this.element.style.border = '1px solid red';
  this.element.style.borderRadius = '50%';
  this.element.style.width = '80px';
  this.element.style.height = '80px';

  this.rootElement.append(this.element);
};

Lamp.prototype.toogle = function () {
  if (this.isEnabled) {
    this.toogleOff();
  } else {
    this.toogleOn();
  }
}

Lamp.prototype.toogleOn = function () {
  this.isEnabled = true;
  this.element.style.backgroundColor = this.color;
}
Lamp.prototype.toogleOff = function () {
  this.isEnabled = true;
  this.element.style.backgroundColor = '';
}




export {
  Lamp
};