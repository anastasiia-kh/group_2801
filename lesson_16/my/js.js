class Car {
  constructor(root) {
    this.root = root;
    this.coordinates = {
      x: 40,
      y: 0
    }

  }
  render() {
    this.element = document.createElement('div');
    const size = '100px'
    this.element.style.width = size;
    this.element.style.height = size;
    this.element.style.transform = `translateX(${this.coordinates.x}px)`
    this.element.style.border = '1px solid red';

    this.root.append(this.element);

  }
  initInterval() {
    const self = this;


    // function callback() {
    //   console.log('second')
    //   self.coordinates.x += 10;
    //   self.element.style.transform = `translateX(${self.coordinates.x}px)`
    // }
    // setInterval(callback.bind(this), 300);
    setInterval(() => {
      console.log('second')
      this.coordinates.x += 10;
      this.element.style.transform = `translateX(${self.coordinates.x}px)`
    }, 300)
  }
}

export {
  Car
};