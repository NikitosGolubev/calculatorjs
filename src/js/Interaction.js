import $CONST from './constants';
import Digit from './interaction-types/Digit';
import Action from './interaction-types/Action';
import Punctuation from './interaction-types/Punctuation';

const Interaction = {
  $displayer: null,

  setDisplayer(Displayer) {
    this.$displayer = Displayer;
  },

  create(content) {
    const InteractionEntity = this.getInteractionTypeByContent(content);
    console.log(InteractionEntity);
  },

  getInteractionTypeByContent(content) {
    switch (true) {
      case Digit.is(content):
        return Digit;
      case Action.is(content):
        return Action;
      case Punctuation.is(content):
        return Punctuation;
      default:
        throw new Error($CONST.System.UndefinedInteractionType);
    }
  },
};

export default Interaction;
