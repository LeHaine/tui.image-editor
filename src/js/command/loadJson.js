/**
 * @author NHN. FE Development Team <dl_javascript@nhn.com>
 * @fileoverview Load a background (main) image
 */
import commandFactory from '@/factory/command';
import { componentNames, commandNames } from '@/consts';

const { JSON_LOADER } = componentNames;

const command = {
  name: commandNames.LOAD_JSON,

  /**
   * Load and import a FabricJS JSON object
   * @param {Graphics} graphics - Graphics instance
   * @param {string} json - The json string
   * @param {int} width - width in px
   * @param {int} height - height in px
   * @returns {Promise}
   */
  execute(graphics, json, width = 600, height = 400) {
    const loader = graphics.getComponent(JSON_LOADER);
    const objects = graphics.removeAll(true).filter((objectItem) => objectItem.type !== 'cropzone');

    objects.forEach((objectItem) => {
      objectItem.evented = true;
    });

    return loader.load(json).then(() => ({
      oldWidth: 0,
      oldHeight: 0,
      newWidth: width,
      newHeight: height,
    }));
  },

  undo() {
    // do nothing
    return Promise.resolve();
  },
};

commandFactory.register(command);

export default command;
