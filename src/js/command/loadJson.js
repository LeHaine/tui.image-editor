/**
 * @author NHN. FE Development Team <dl_javascript@nhn.com>
 * @fileoverview Load a background (main) image
 */
import commandFactory from '@/factory/command';
import { componentNames, commandNames } from '@/consts';

const { JSON_LOADER } = componentNames;

const command = {
  name: commandNames.LOAD_JSON,

  execute(graphics, json) {
    const loader = graphics.getComponent(JSON_LOADER);

    const objects = graphics.removeAll(true).filter((objectItem) => objectItem.type !== 'cropzone');

    objects.forEach((objectItem) => {
      objectItem.evented = true;
    });

    return loader.load(json).then((objs) => {
      // todo handle setting objs
      console.log(objs);
    });
  },
};

commandFactory.register(command);

export default command;
