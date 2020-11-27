import InteractionType from './InteractionType';
import Dot from '../interaction-variations/punctuation/Dot';

const POSSIBLE_VALUES = {
  dot: Dot,
};

const PunctuationType = {
  ...InteractionType,
  is(value) {
    return !!POSSIBLE_VALUES[value];
  },

  makeEntity(content) {
    return {...POSSIBLE_VALUES[content], value: content};
  },
};

export default PunctuationType;
