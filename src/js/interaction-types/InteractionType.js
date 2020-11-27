import $CONST from '../constants';

const InteractionType = {
  is(value) {
    throw new Error($CONST.System.AbstractMethodLacksImplementation);
  },

  makeEntity(content) {
    throw new Error($CONST.System.AbstractMethodLacksImplementation);
  },
};

export default InteractionType;
