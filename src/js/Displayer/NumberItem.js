import DisplayItem from './DisplayItem';

const NumberItem = {
  ...DisplayItem,
  content: '',

  addItem(item) {
    switch (true) {
      case item.isDigit:
        this.addDigit(item);
        break;
      case item.isPunctuation:
        this.addPunctuation(item);
        break;
      default:
        break;
    }
  },

  addDigit() {},

  addPunctuation() {},
};

export default NumberItem;
