
class scrollToElement {
  constructor(element) {
    this.top = element.top;
    this.height = element.height;
  }
  // Get element for aninmation
  get element() {
    return this.top + document.documentElement.scrollTop + (this.height / 4);
  }
  // Get true element position
  get trueElement() {
    return this.top + document.documentElement.scrollTop + 40;
  }
  // Get scroll
  get scroll() {
    return document.documentElement.scrollTop + window.innerHeight;
  }
}

export default scrollToElement;