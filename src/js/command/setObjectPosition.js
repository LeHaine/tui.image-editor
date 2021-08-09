/**
 * @author NHN. FE Development Team <dl_javascript@nhn.com>
 * @fileoverview Set object properties
 */
import commandFactory from '@/factory/command';
import { Promise } from '@/util';
import { commandNames, rejectMessages } from '@/consts';

const command = {
  name: commandNames.SET_OBJECT_POSITION,

  /**
   * Set object properties
   * @param {Graphics} graphics - Graphics instance
   * @param {number} objId -  object id
   * @param {Object} posInfo - position object
   *  @param {number} posInfo.x - x position
   *  @param {number} posInfo.y - y position
   *  @param {string} posInfo.originX - can be 'left', 'center', 'right'
   *  @param {string} posInfo.originY - can be 'top', 'center', 'bottom'
   * @returns {Promise}
   */
  execute(graphics, objId, posInfo) {
    const targetObj = graphics.getObject(objId);

    if (!targetObj) {
      return Promise.reject(rejectMessages.noObject);
    }

    this.undoData.objectId = objId;
    this.undoData.props = graphics.getObjectProperties(objId, ['left', 'top']);

    graphics.setObjectPosition(objId, posInfo);
    graphics.renderAll();

    return Promise.resolve();
  },

  /**
   * @param {Graphics} graphics - Graphics instance
   * @returns {Promise}
   */
  undo(graphics) {
    const { objectId, props } = this.undoData;

    graphics.setObjectProperties(objectId, props);
    graphics.renderAll();

    return Promise.resolve();
  },
};

commandFactory.register(command);

export default command;
