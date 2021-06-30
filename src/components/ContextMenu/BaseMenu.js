import Component from 'vue-class-component';
import Vue from 'vue';
// eslint-disable-next-line no-unused-vars
import { Prop, Provide, Watch } from 'vue-property-decorator';

export default @Component({
  name:'BaseMenu'
})
class BaseMenu extends Vue{
  @Provide()
  type='';

  render () {
    const { type } = this;

    return (
      <div class='menu' data-status={`${type}-selected`}>
        {this.$scopedSlots.default ? this.$scopedSlots.default() : this.$slots.default}
      </div>
    );
  }
}
