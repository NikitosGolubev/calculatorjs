import InteractionType from './InteractionType';

const POSSIBLE_VALUES = ['dot'];

const Punctuation = {
  ...InteractionType,
  is(value) {
    return POSSIBLE_VALUES.includes(value);
  },
};

export default Punctuation;
