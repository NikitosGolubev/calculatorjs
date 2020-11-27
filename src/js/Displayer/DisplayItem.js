import $CONST from '../constants';

const DisplayItem = {
  content: null,
  addItem() {
    throw new Error($CONST.System.AbstractMethodLacksImplementation);
  },
};

export default DisplayItem;
