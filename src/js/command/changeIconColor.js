/**
 * @author NHN. FE Development Team <dl_javascript@nhn.com>
 * @fileoverview Change icon color
 */
import commandFactory from '@/factory/command';
import { Promise } from '@/util';
import { componentNames, rejectMessages, commandNames } from '@/consts';

const { ICON } = componentNames;

const command = {
  name: commandNames.CHANGE_ICON_COLOR,

  /**
   * Change icon color
   * @param {Graphics} graphics - Graphics instance
   * @param {number} objId -  object id
   * @param {string} color - Color for icon
   * @returns {Promise}
   */
  execute(graphics, objId, color) {
    return new Promise((resolve, reject) => {
      const iconComp = graphics.getComponent(ICON);
      const targetObj = graphics.getObject(objId);

      if (!targetObj) {
        reject(rejectMessages.noObject);
      }

      this.undoData.object = targetObj;
      this.undoData.color = iconComp.getColor(targetObj);
      iconComp.setColor(color, targetObj);
      resolve();
    });
  },

  /**
   * @param {Graphics} graphics - Graphics instance
   * @returns {Promise}
   */
  undo(graphics) {
    const iconComp = graphics.getComponent(ICON);
    const { object: icon, color } = this.undoData;

    iconComp.setColor(color, icon);

    return Promise.resolve();
  },
};

commandFactory.register(command);

export default command;
