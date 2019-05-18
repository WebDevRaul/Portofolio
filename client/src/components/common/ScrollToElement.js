
class scrollToElement {
  constructor(element) {
    this.top = element.top;
    this.height = element.height;
  }
  // Get element
  get element() {
    return this.top + document.documentElement.scrollTop + (this.height / 2);
  }

  // Get scroll
  get scroll() {
    return document.documentElement.scrollTop + window.innerHeight;
  }
}

export default scrollToElement;