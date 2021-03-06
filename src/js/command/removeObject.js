/**
 * @author NHN. FE Development Team <dl_javascript@nhn.com>
 * @fileoverview Remove an object
 */
import commandFactory from '@/factory/command';
import { Promise } from '@/util';
import { commandNames, rejectMessages } from '@/consts';

const command = {
  name: commandNames.REMOVE_OBJECT,

  /**
   * Remove an object
   * @param {Graphics} graphics - Graphics instance
   * @param {number} objId -  object id
   * @returns {Promise}
   */
  execute(graphics, objId) {
    return new Promise((resolve, reject) => {
      this.undoData.objects = graphics.removeObjectById(objId);
      if (this.undoData.objects.length) {
        resolve();
      } else {
        reject(rejectMessages.noObject);
      }
    });
  },

  /**
   * @param {Graphics} graphics - Graphics instance
   * @returns {Promise}
   */
  undo(graphics) {
    graphics.add(this.undoData.objects);

    return Promise.resolve();
  },
};

commandFactory.register(command);

export default command;
