import BaseEditor from '@components/Editor/BaseEditor';
import { TOOLBAR_CONTAINER } from '@common/constants';

export default {
  name: 'Toolbar',

  created () {
    this.getContainerId();
  },

  mounted () {
    const { editor, handleAfterAddPage } = this.root;

    handleAfterAddPage(() => {
      this.toolbar = new BaseEditor.Toolbar({
        container: this.containerId
      });

      editor.add(this.toolbar);
    });
  },

  beforeDestroy () {
    this.toolbar && this.toolbar.destroy();
    this.toolbar = null;
  },

  methods: {
    getContainerId () {
      const { editor } = this.root;
      this.containerId = `${TOOLBAR_CONTAINER}_${editor.id}`;
    }
  },

  inject: ['root'],

  data () {
    return {
      containerId: '',
      toolbar: null
    };
  },

  render () {
    const { containerId } = this;
    return (
      <div id={containerId}>
        {this.$scopedSlots.default ? this.$scopedSlots.default() : this.$slots.default}
      </div>
    );
  }
};
