import DisplayItem from './DisplayItem';
import NumberItem from './NumberItem';

const DisplayGroup = {
  ...DisplayItem,

  content: [],
  isGroup: true,
  isOpened: true,

  openGroup() {
    this.isOpened = true;
  },

  closeGroup() {
    this.isClosed = true;
  },

  addItem(item) {
    switch (true) {
      case item.isDigit:
        this.addDigit(item);
        break;
      case item.isMathOperation:
        this.addMathOperation(item);
        break;
      default:
        item.addItem(item);
        break;
    }
  },

  addDigit(digit) {
    let lastChild = last(this.content);

    if (!lastChild) {
      lastChild = {...NumberItem};
      this.content.push(lastChild);
    }

    lastChild.addItem(digit);
  },

  addMathOperation(operation) {
    const lastChild = last(this.content);

    if (!lastChild) this.content.push(operation);
    else if (!lastChild.isGroup || !lastChild.isOpened) {
      if (operation.isGroup) {
        this.content.splice(-1, 1);
        operation.addItem(lastChild);
      }
      this.content.push(operation);
    } else lastChild.addMathOperation(operation);
  },
};

/**
 * Returns array last-child
 * @param {Array} array
 * @return {*}
 */
function last(array) {
  return array[array.length - 1];
}

export default DisplayGroup;
