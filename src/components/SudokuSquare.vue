<template>
	<div @click="toggle" :id="squareId" :class="classNames">
		<div :class="valueClassNames">{{displayValues}}</div>
	</div>
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
			value: null,
			penciledValues: [],
    }
  }, 
	computed: {
		classNames() { return ['sudoku-square', (this.selected) ? 'selected' : '',]; },
		valueClassNames() { return ['values', (this.penciledValues.length > 0) ? 'penciled' : '']; },
		displayValues() {
			if (this.penciledValues.length > 0) {
				return this.penciledValues.join(" ");
			} else if (!_.isNil(this.value)) {
				return this.value;
			} else {
				return '';
			}
		}
	},
  methods: {
		toggle(e) {
			// console.log([`toggle:trace 1`, keysDown()]);  
			
			switch(keysDown()[0]) {
				case 'r':
					window.Event.$emit('sudoku-event', 'square-select-row', {selected: true, reqBy: this.squareId});
					break;

				case 'c':
					window.Event.$emit('sudoku-event', 'square-select-col', {selected: true, reqBy: this.squareId});
					break;

				case 'i':
					window.Event.$emit('sudoku-event', 'square-select-intersection', {selected: true, reqBy: this.squareId});
					break;

				case 'n':
					break;

				case 'l': // little 'L'
					fetchSudokuData((err, data) => {
						console.log([`fetchSudokuData`, err, data]);
					});
					break;

				default: 
					this.selected = !this.selected;
					window.Event.$emit('sudoku-event', 'square-select', {selected: false, reqBy: this.squareId, except: [this.squareId]});
			}
		},
  }, 

	mounted() {
		window.Event.$on(`square-event-${this.squareId}`, ({ cmd, opts }) => {
			switch(cmd) {
				case 'record-number':
					const { value, editMode } = opts;
					console.log([`square-event-${this.squareId}`, cmd, opts, value])

					if (editMode === 'pencil') {
						if (_.isNil(this.value)) {
							if (_.includes(this.penciledValues, value)) {
								this.penciledValues = _.remove(this.penciledValues, item => item !== value);
							} else {
								this.penciledValues.push(value);
								this.penciledValues.sort();
							}
						}
					} else {
						this.value = value;
						this.penciledValues = [];
					}
					break;
			}
		});

		window.Event.$on('square-event', ({ cmd, opts }) => {
			const except = _.get(opts, 'except', []);
			const only = _.get(opts, 'only', []);
			// if (( !_.isNil(only) && _.includes(only, this.squareId) ) || ( _.isNil(only) && !_.includes(except, this.squareId) )) {
			if ( !_.includes(except, this.squareId) ) {
				switch(cmd) {

					case 'record-number':
						console.log([`square-event 1`, cmd, opts])
						break;

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
<style >
	.sudoku-square .values {
    font-size: 18pt;
    font-weight: bold;
    display: inline-block;
    height: 40px;
    overflow-y: hidden;
    vertical-align: top;
    padding: 0;
    margin: 0;
    width: 40px;
    position: relative;
    top: 7px;
	}
	.sudoku-square .values.penciled {
    top: 5px;
    font-size: 8pt;
    font-weight: normal;
    line-height: 13px;
    letter-spacing: 2px;
    padding-left: 2px;
	}

	.sudoku.pencil .sudoku-square{
		background-color: #bdcebe;
	}
	
	.sudoku .sudoku-square.selected{
		background-color: orange;
	}
	
</style>
