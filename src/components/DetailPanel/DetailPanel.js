import {STATUS_CANVAS_SELECTED} from '@common/constants';
import {uniqueId} from '@utils';
import Component from 'vue-class-component';
import Vue from 'vue';
import {Inject, Provide} from "vue-property-decorator";
// eslint-disable-next-line no-unused-vars


export default @Component({
  name: 'DetailPanel'
})
class DetailPanel extends Vue {
  @Provide()
  status = '';
  @Provide()
  uniqueId = ''

  created() {
    this.bindEvent();
  }

  @Inject()
  root;

  bindEvent() {
    this.root.handleAfterAddPage(({page}) => {
      this.status = STATUS_CANVAS_SELECTED;

      page.on('statuschange', ({status}) => {
        this.status = status;
        this.uniqueId = uniqueId();
      });
    });
  }

  render() {
    const {status, uniqueId} = this;
    if (!status) {
      return null;
    }

    return (
        <div key={uniqueId}>
          {this.$scopedSlots.default ? this.$scopedSlots.default({status, uniqueId}) : this.$slots.default}
        </div>
    );
  }
}
