import InteractionType from './InteractionType';
import Digit from '../interaction-variations/Digit';

const POSSIBLE_VALUES = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const DigitType = {
  ...InteractionType,
  is(value) {
    if (typeof value === 'object') value = value.getValue();
    return POSSIBLE_VALUES.includes(Number(value));
  },

  makeEntity(content) {
    return {...Digit, value: content};
  },
};

export default DigitType;
