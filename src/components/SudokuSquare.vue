<template>
	<div @click="toggle" :id="squareId" :class="['sudoku-square', (selected) ? 'selected' : '']"></div>
</template>

<script>
import _ from 'lodash';
import { isKeyDown, keysDown } from './../lib/utils'

export default {
  name: 'SudokuSquare',
  props: [ 'squareId' ],
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
			selected: false,
    }
  }, 
  methods: {
		toggle(e) {
			console.log([`toggle:trace 1`, keysDown()]);  
			
			switch(keysDown()[0]) {
				case 'r':
					window.Event.$emit('sudoku-event', 'square-select-row', {selected: true, reqBy: this.squareId});
					break;

				case 'c':
					window.Event.$emit('sudoku-event', 'square-select-col', {selected: true, reqBy: this.squareId});
					break;

				case 'i':
					break;

				case 'n':
					break;

				default: 
					this.selected = !this.selected;
					window.Event.$emit('sudoku-event', 'square-select', {selected: false, reqBy: this.squareId, except: [this.squareId]});
			}
		},
  }, 
	mounted() {
		window.Event.$on('square-event', ({ cmd, opts }) => {
			const except = _.get(opts, 'except', []);
			const only = _.get(opts, 'only', []);
			// if (( !_.isNil(only) && _.includes(only, this.squareId) ) || ( _.isNil(only) && !_.includes(except, this.squareId) )) {
			if ( !_.includes(except, this.squareId) ) {
				switch(cmd) {

					case 'select':
						const selected = _.get(opts, 'selected', false);
						this.selected = ( selected && _.includes(only, this.squareId) );
						break;
				}
			}
		});
	},
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.sudoku-square.selected {
		background-color: orange;
	}
</style>
