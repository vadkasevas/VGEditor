<template>
	<item-panel>
		<item v-for="(record,key) in items" :key="key"
			:type="record.type" :size="record.size" :shape="record.shape"
			:model="record.model"
			:src="record.src"
		/>
	</item-panel>
</template>

<script>
import {Item, ItemPanel} from 'vg-editor';
import Component from 'vue-class-component';
import Vue from 'vue';
// eslint-disable-next-line no-unused-vars
import {Provide} from 'vue-property-decorator';

export default @Component({
	name: 'FlowItemPanel',
	components: {ItemPanel, Item}
})
class FlowItemPanel extends Vue {
	@Provide()
	items = [
		{
			type: 'node', size: '72*72', shape: 'flow-circle',
			model: {
				color: '#FA8C16',
				label: 'Start'
			},
			src: 'https://minta365.ru/answer.png'
		}, {
			type: 'node', size: '80*80', shape: 'flow-rect',
			model: {
				color: '#1890FF',
				label: 'Normal'
			},
			src: 'https://minta365.ru/playback.png'
		}, {
			type: 'node', size: '80*72', shape: 'flow-rhombus',
			model: {
				color: '#13C2C2',
				label: '13C2C2'
			},
			src: 'https://minta365.ru/cycle.png'
		}
	]


}
</script>
