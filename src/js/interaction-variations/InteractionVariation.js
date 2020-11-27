import $CONST from '../constants';

const InteractionVariation = {
  value: '',

  validate(displayer) {
    throw new Error($CONST.System.AbstractMethodLacksImplementation);
  },

  getValue() {
    return this.value;
  },
};

export default InteractionVariation;
