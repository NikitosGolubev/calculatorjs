import InteractionType from './InteractionType';

import Addition from '../math-operations/Addition';
import Subtraction from '../math-operations/Subtraction';
import Multiplication from '../math-operations/Multiplication';
import Division from '../math-operations/Division';
import Degree from '../math-operations/Degree';
import SquareRoot from '../math-operations/SquareRoot';

const POSSIBLE_VALUES = {
  add: Addition,
  subtract: Subtraction,
  multiply: Multiplication,
  divide: Division,
  degree: Degree,
  root: SquareRoot,
};

const Action = {
  ...InteractionType,
  is(value) {
    return !!POSSIBLE_VALUES[value];
  },
};

export default Action;
