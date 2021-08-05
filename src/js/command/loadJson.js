/**
 * @author NHN. FE Development Team <dl_javascript@nhn.com>
 * @fileoverview Load a background (main) image
 */
import { commandNames, componentNames, fObjectOptions } from '@/consts';
import commandFactory from '@/factory/command';
import snippet from 'tui-code-snippet';

const { JSON_LOADER, TEXT } = componentNames;

const command = {
  name: commandNames.LOAD_JSON,

  execute(graphics, json) {
    const loader = graphics.getComponent(JSON_LOADER);
    const texComp = graphics.getComponent(TEXT);

    const objects = graphics.removeAll(true).filter((objectItem) => objectItem.type !== 'cropzone');

    objects.forEach((objectItem) => {
      objectItem.evented = true;
    });

    this.undoData.objects = objects;

    return loader.load(json).then((objs) => {
      objs.map((obj) => {
        let selectionStyle = fObjectOptions.SELECTION_STYLE;
        selectionStyle = snippet.extend({}, selectionStyle, {
          originX: 'left',
          originY: 'top',
        });
        obj.set(selectionStyle);
        if (obj.type === 'i-text') {
          texComp.initialize(obj);
        }

        graphics._addFabricObject(obj);

        return obj;
      });

      return objs;
    });
  },
  /**
   * @returns {Promise}
   */
  undo() {
    return Promise.resolve();
  },
};

commandFactory.register(command);

export default command;
