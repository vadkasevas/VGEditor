import Component from 'vue-class-component';
import Vue from 'vue';
// eslint-disable-next-line no-unused-vars
import {Inject, Prop, Provide} from 'vue-property-decorator';

export default @Component({
  name: 'Item'
})
class Item extends Vue {
  @Provide()
  page = null

  @Inject()
  root

  @Prop({type: String, default: 'node'})
  type
  @Prop({type: String})
  size
  @Prop({type: String})
  src
  @Prop({
    type: Object, default() {
      return {};
    }
  })
  model

  created() {
    this.bindEvent();
  }

  bindEvent() {
    this.root.handleAfterAddPage(({page}) => {
      this.page = page;
    });
  }

  handleMouseDown() {
    const {type, size, shape, model} = this;

    if (this.page) {
      this.page.beginAdd(type, {
        type,
        size,
        shape,
        ...model
      });
    }
  }


  render() {
    const {src, shape} = this;
    return (
        <div style={{cursor: 'pointer'}} onMousedown={this.handleMouseDown}>
          {src
              ? <img src={src} alt={shape} draggable={false}/>
              : this.$scopedSlots.default
                  ? this.$scopedSlots.default()
                  : this.$slots.default}
        </div>
    );
  }
}
