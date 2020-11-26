import {isClassAffected} from './utils';

const INTERACTION_CLASS_NAME = 'js-btn';
const INTERACTION_CONTENT_ATTR = 'data-content';

const Ui = {
  $interaction: null,

  init(Interaction) {
    this.$interaction = Interaction;
    this.$registerStarterEvents();
  },

  $registerStarterEvents() {
    document.addEventListener('click', ({target}) => {
      interactionCommitted(target, this.$interaction);
    });
  },
};

/**
 * @param {HTMLElement} target
 * @param {Object} Interaction
 */
function interactionCommitted(target, Interaction) {
  if (isClassAffected(target, INTERACTION_CLASS_NAME)) {
    if (!target.hasAttribute(INTERACTION_CONTENT_ATTR)) {
      target = target.closest(`.${INTERACTION_CLASS_NAME}`);
    }

    const content = target.getAttribute(INTERACTION_CONTENT_ATTR);

    Interaction.create(content);
  }
}

export default Ui;
