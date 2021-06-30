import BaseEditor from '@components/Editor/BaseEditor';
import { CONTEXT_MENU_CONTAINER } from '@common/constants';

export default {
  name: 'ContextMenu',

  mounted () {
    const { editor } = this.root;
    this.getContainerId();

    this.$nextTick(() => {
      this.contextMenu = new BaseEditor.Contextmenu({
        container: this.containerId
      });

      editor.add(this.contextMenu);
    });
  },

  beforeDestroy () {
    this.contextMenu && this.contextMenu.destroy();
    this.contextMenu = null;
  },

  methods: {
    getContainerId () {
      const { editor } = this.root;
      this.containerId = `${CONTEXT_MENU_CONTAINER}_${editor.id}`;
    }
  },

  inject: ['root'],

  data () {
    return {
      contextMenu: null,
      containerId: ''
    };
  },

  render () {
    return (
      <div id={this.containerId}>
        {this.$scopedSlots.default ? this.$scopedSlots.default() : this.$slots.default}
      </div>
    );
  }
};
