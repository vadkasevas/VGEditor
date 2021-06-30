import BaseEditor from "./BaseEditor";
import {EVENT_AFTER_ADD_PAGE, EVENT_BEFORE_ADD_PAGE, FLOW_CLASS_NAME, FLOW_CONTAINER} from '@common/constants';
import Page from './Page';

import Component from 'vue-class-component';
import {Prop} from "vue-property-decorator";

export default @Component({
    name: 'Flow'
})
class Flow extends Page {
    @Prop({
        default() {
            return ({ nodes: [], edges: [] });
        }
    })
    data

    @Prop({
        type:Object
    })
    graph

    @Prop({
        type:Object
    })
    align

    @Prop({
        type:Object
    })
    grid

    @Prop({
        type:Object
    })
    shortcut

    @Prop({
        type:Boolean,
        default: true
    })
    noEndEdge

    initPage() {
        const editor = this.root.editor;

        editor.emit(EVENT_BEFORE_ADD_PAGE, {className: FLOW_CLASS_NAME});

        this.page = new BaseEditor.Flow(this.config);

        editor.add(this.page);

        editor.emit(EVENT_AFTER_ADD_PAGE, {page: this.page});
    }

    getPageId() {
        return `${FLOW_CONTAINER}_${this.root.editor.id}`;
    }

}
