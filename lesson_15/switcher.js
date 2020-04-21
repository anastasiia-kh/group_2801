function Switcher(rootElement, lamp) {
  this.rootElement = rootElement;
  this.lamp = lamp;

}
Switcher.prototype.render = function () {
  this.btn = document.createElement('button');
  this.btn.style.backgroundColor = 'aqua';
  this.btn.textContent = 'on/off';
  this.btn.addEventListener('click', () => {
    this.toogle();
  })
  this.rootElement.append(this.btn)
}
Switcher.prototype.toogle = function () {
  this.lamp.toogle()
}

export {
  Switcher
}