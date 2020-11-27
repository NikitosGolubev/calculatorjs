import $CONST from './constants';
import DigitType from './interaction-types/DigitType';
import MathActionType from './interaction-types/MathActionType';
import PunctuationType from './interaction-types/PunctuationType';

const Interaction = {
  $displayer: null,

  setDisplayer(Displayer) {
    this.$displayer = Displayer;
  },

  create(content) {
    const InteractionType = this.getInteractionTypeByContent(content);
    const entity = InteractionType.makeEntity(content);
    entity.validate(this.$displayer);
    this.$displayer.addItem(entity);
  },

  getInteractionTypeByContent(content) {
    switch (true) {
      case DigitType.is(content):
        return DigitType;
      case MathActionType.is(content):
        return MathActionType;
      case PunctuationType.is(content):
        return PunctuationType;
      default:
        throw new Error($CONST.System.UndefinedInteractionType);
    }
  },
};

export default Interaction;
