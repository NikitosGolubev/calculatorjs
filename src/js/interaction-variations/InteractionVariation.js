import $CONST from '../constants';

const InteractionVariation = {
  validate(displayer) {
    throw new Error($CONST.System.AbstractMethodLacksImplementation);
  },
};

export default InteractionVariation;
