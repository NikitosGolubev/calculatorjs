import InteractionType from './InteractionType';

const POSSIBLE_VALUES = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const Digit = {
  ...InteractionType,
  is(value) {
    return POSSIBLE_VALUES.includes(Number(value));
  },
};

export default Digit;
