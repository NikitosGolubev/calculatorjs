import Ui from './Ui';
import Displayer from './Displayer/Displayer';
import Interaction from './Interaction';

/** Runs application */
function bootstrap() {
  Displayer.subscribe(Ui);
  Interaction.setDisplayer(Displayer);
  Ui.init(Interaction);
}

export default bootstrap;
