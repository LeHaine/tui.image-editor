/**
 * @author NHN. FE Development Team <dl_javascript@nhn.com>
 * @fileoverview change selection
 */
import commandFactory from '@/factory/command';
import { Promise } from '@/util';
import { commandNames } from '@/consts';
import { getCachedUndoDataForDimension } from '@/helper/selectionModifyHelper';

const command = {
  name: commandNames.CHANGE_SELECTION,

  execute(graphics, props) {
    if (this.isRedo) {
      props.forEach((prop) => {
        graphics.setObjectProperties(prop.objId, prop);
      });
    } else {
      this.undoData = getCachedUndoDataForDimension();
    }

    return Promise.resolve();
  },

  undo(graphics) {
    graphics.discardSelection();
    const objs = [];

    this.undoData.forEach((datum) => {
      graphics.setObjectProperties(datum.objId, datum);
      objs.push(graphics.getObject(datum.objId));
    });

    const activeSelection = new fabric.ActiveSelection(objs, {
      canvas: graphics._canvas,
    });
    graphics.setActiveObject(activeSelection);
    graphics._canvas.renderAll();

    return Promise.resolve();
  },
};

commandFactory.register(command);

export default command;
