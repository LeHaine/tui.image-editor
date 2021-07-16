/**
 * @author NHN. FE Development Team <dl_javascript@nhn.com>
 * @fileoverview JSON loader
 */
import Component from '@/interface/component';
import { Promise } from '@/util';
import { componentNames, rejectMessages } from '@/consts';

/**
 * JsonLoader components
 * @extends {Component}
 * @class JsonLoader
 * @param {Graphics} graphics - Graphics instance
 * @ignore
 */
class JsonLoader extends Component {
  constructor(graphics) {
    super(componentNames.JSON_LOADER, graphics);
  }

  load(json) {
    let promise;

    if (!json) {
      // Back to the initial state, not error.
      const canvas = this.getCanvas();

      canvas.renderAll();

      promise = new Promise((resolve) => {
        resolve();
      });
    } else {
      promise = this._loadJson(json).then((objs) => {
        return objs;
      });
    }

    return promise;
  }

  _loadJson(json) {
    if (!json) {
      return Promise.reject(rejectMessages.loadJson);
    }

    return new Promise((resolve, reject) => {
      const canvas = this.getCanvas();

      canvas.loadFromJSON(json, () => {
        const objs = canvas.getObjects();
        if (objs) {
          resolve(objs);
        } else {
          reject(rejectMessages.loadingJsonFailed);
        }
      });
    });
  }
}

export default JsonLoader;
