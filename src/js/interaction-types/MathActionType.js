import InteractionType from './InteractionType';

import Addition from '../interaction-variations/math-operations/Addition';
import Subtraction from '../interaction-variations/math-operations/Subtraction';
import Multiplication from '../interaction-variations/math-operations/Multiplication';
import Division from '../interaction-variations/math-operations/Division';
import Degree from '../interaction-variations/math-operations/Degree';
import SquareRoot from '../interaction-variations/math-operations/SquareRoot';

const POSSIBLE_VALUES = {
  add: Addition,
  subtract: Subtraction,
  multiply: Multiplication,
  divide: Division,
  degree: Degree,
  root: SquareRoot,
};

const MathActionType = {
  ...InteractionType,
  is(value) {
    return !!POSSIBLE_VALUES[value];
  },

  makeEntity(content) {
    return {...POSSIBLE_VALUES[content], value: content};
  },
};

export default MathActionType;
