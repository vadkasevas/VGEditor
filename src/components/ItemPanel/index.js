import Item from './Item';
import Component from "vue-class-component";
import Vue from "vue";
// eslint-disable-next-line no-unused-vars
import {Inject, Prop, Provide} from 'vue-property-decorator';

export {Item};

export default
@Component({
    name: 'ItemPanel'
})
class ItemPanel extends Vue {
    @Inject()
    root

    created() {
        this.bindEvent();
    }

    beforeDestroy() {
        document.removeEventListener('mouseup', this.handleMouseUp);
    }

    bindEvent() {
        this.root.handleAfterAddPage(({page}) => {
            this.page = page;

            document.addEventListener('mouseup', this.handleMouseUp);
        });
    }

    handleMouseUp() {
        this.page.cancelAdd();
    }

    render() {
        return (
            <div>
                {this.$scopedSlots.default ? this.$scopedSlots.default() : this.$slots.default}
            </div>
        );
    }
}
