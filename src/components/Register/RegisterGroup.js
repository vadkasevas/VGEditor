import BaseRegister from './BaseRegister';

export default {
  mixins: [BaseRegister],
  name: 'RegisterGroup',
  created () {
    this.type = 'group';

    this.bindEvent();
  }
};
