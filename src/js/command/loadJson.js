/**
 * @author NHN. FE Development Team <dl_javascript@nhn.com>
 * @fileoverview Load a background (main) image
 */
import commandFactory from '@/factory/command';
import { componentNames, commandNames } from '@/consts';

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

    return loader.load(json).then((objs) => {
      // todo handle setting objs
      console.log(objs);

      objs.map((obj) => {
        if (obj.type === 'i-text') {
          texComp.initialize(obj);
        }

        return obj;
      });
    });
  },
};

commandFactory.register(command);

export default command;
