import Component from 'vue-class-component';
import Vue from 'vue';
// eslint-disable-next-line no-unused-vars
import { Prop, Provide, Watch } from 'vue-property-decorator';

export default
@Component({
  /*template: `
    <div v-if="type+'-selected'!==status">
        {{this.$scopedSlots.default ? this.$scopedSlots.default() : this.$slots.default}}
    </div>
  `*/
})
class BasePanel extends Vue{
  @Prop({ type: String })
  status;

  @Provide()
  type='';

  render () {
    const { type, status } = this;

    if (`${type}-selected` !== status) {
      return null;
    }

    return (
        <div>
          {this.$scopedSlots.default ? this.$scopedSlots.default() : this.$slots.default}
        </div>
    );
  }

}
