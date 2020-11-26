import $CONST from '../constants';

const InteractionType = {
  is(value) {
    throw new Error($CONST.System.AbstractMethodLacksImplementation);
  },
};

export default InteractionType;
