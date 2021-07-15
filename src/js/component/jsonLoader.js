/**
 * @author NHN. FE Development Team <dl_javascript@nhn.com>
 * @fileoverview Image loader
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

  /**
   * Load json
   * @param {?string} json - The fabricjs json
   * @param {int} width - width in px
   * @param {int} height - height in px
   * @returns {Promise}
   */
  load(json, width = 600, height = 400) {
    let promise;

    if (!json) {
      // Back to the initial state, not error.
      const canvas = this.getCanvas();

      canvas.backgroundImage = null;
      canvas.renderAll();

      promise = new Promise((resolve) => {
        this.setCanvasImage('', null);
        resolve();
      });
    } else {
      promise = this._setJson(json).then(() => {
        this.setCanvasImage('', null);
        this.setCanvasDimension(width, height);
      });
    }

    return promise;
  }

  _setJson(json) {
    if (!json) {
      return Promise.reject(rejectMessages.loadJson);
    }

    return new Promise((resolve) => {
      const canvas = this.getCanvas();

      canvas.loadFromJSON(json, () => {
        canvas.renderAll.bind(canvas);
        resolve();
      });
    });
  }
}

export default JsonLoader;
