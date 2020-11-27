import DisplayItem from './DisplayItem';
import DigitType from '../interaction-types/DigitType';
import PunctuationType from '../interaction-types/PunctuationType';

const NumberItem = {
  ...DisplayItem,
  content: '',

  addItem(item) {
    switch (true) {
      case DigitType.is(item):
        this.addDigit(item);
        break;
      case PunctuationType.is(item):
        this.addPunctuation(item);
        break;
      default:
        break;
    }
  },

  addDigit(digit) {
    this.content += digit.getValue();
  },

  addPunctuation(punctuation) {
    if (punctuation.isDot) this.content += '.';
  },
};

export default NumberItem;
