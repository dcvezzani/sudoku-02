<template>
  <div :class="classNames">

		<div class="sudoku-block">
			<!-- s#^			<div id="\([^"]\+\)" class="sudoku-square"></div>$#			<SudokuSquare squareId="\1"></SudokuSquare>#g -->
			<SudokuSquare squareId="1-1"></SudokuSquare>
			<SudokuSquare squareId="1-2"></SudokuSquare>
			<SudokuSquare squareId="1-3"></SudokuSquare>
			<SudokuSquare squareId="2-1"></SudokuSquare>
			<SudokuSquare squareId="2-2"></SudokuSquare>
			<SudokuSquare squareId="2-3"></SudokuSquare>
			<SudokuSquare squareId="3-1"></SudokuSquare>
			<SudokuSquare squareId="3-2"></SudokuSquare>
			<SudokuSquare squareId="3-3"></SudokuSquare>
		</div>

		<div class="sudoku-block">
			<SudokuSquare squareId="1-4"></SudokuSquare>
			<SudokuSquare squareId="1-5"></SudokuSquare>
			<SudokuSquare squareId="1-6"></SudokuSquare>
			<SudokuSquare squareId="2-4"></SudokuSquare>
			<SudokuSquare squareId="2-5"></SudokuSquare>
			<SudokuSquare squareId="2-6"></SudokuSquare>
			<SudokuSquare squareId="3-4"></SudokuSquare>
			<SudokuSquare squareId="3-5"></SudokuSquare>
			<SudokuSquare squareId="3-6"></SudokuSquare>
		</div>

		<div class="sudoku-block">
			<SudokuSquare squareId="1-7"></SudokuSquare>
			<SudokuSquare squareId="1-8"></SudokuSquare>
			<SudokuSquare squareId="1-9"></SudokuSquare>
			<SudokuSquare squareId="2-7"></SudokuSquare>
			<SudokuSquare squareId="2-8"></SudokuSquare>
			<SudokuSquare squareId="2-9"></SudokuSquare>
			<SudokuSquare squareId="3-7"></SudokuSquare>
			<SudokuSquare squareId="3-8"></SudokuSquare>
			<SudokuSquare squareId="3-9"></SudokuSquare>
		</div>

		<div class="sudoku-block">
			<SudokuSquare squareId="4-1"></SudokuSquare>
			<SudokuSquare squareId="4-2"></SudokuSquare>
			<SudokuSquare squareId="4-3"></SudokuSquare>
			<SudokuSquare squareId="5-1"></SudokuSquare>
			<SudokuSquare squareId="5-2"></SudokuSquare>
			<SudokuSquare squareId="5-3"></SudokuSquare>
			<SudokuSquare squareId="6-1"></SudokuSquare>
			<SudokuSquare squareId="6-2"></SudokuSquare>
			<SudokuSquare squareId="6-3"></SudokuSquare>
		</div>

		<div class="sudoku-block">
			<SudokuSquare squareId="4-4"></SudokuSquare>
			<SudokuSquare squareId="4-5"></SudokuSquare>
			<SudokuSquare squareId="4-6"></SudokuSquare>
			<SudokuSquare squareId="5-4"></SudokuSquare>
			<SudokuSquare squareId="5-5"></SudokuSquare>
			<SudokuSquare squareId="5-6"></SudokuSquare>
			<SudokuSquare squareId="6-4"></SudokuSquare>
			<SudokuSquare squareId="6-5"></SudokuSquare>
			<SudokuSquare squareId="6-6"></SudokuSquare>
		</div>                       
                                 
		<div class="sudoku-block">   
			<SudokuSquare squareId="4-7"></SudokuSquare>
			<SudokuSquare squareId="4-8"></SudokuSquare>
			<SudokuSquare squareId="4-9"></SudokuSquare>
			<SudokuSquare squareId="5-7"></SudokuSquare>
			<SudokuSquare squareId="5-8"></SudokuSquare>
			<SudokuSquare squareId="5-9"></SudokuSquare>
			<SudokuSquare squareId="6-7"></SudokuSquare>
			<SudokuSquare squareId="6-8"></SudokuSquare>
			<SudokuSquare squareId="6-9"></SudokuSquare>
		</div>

		<div class="sudoku-block">
			<SudokuSquare squareId="7-1"></SudokuSquare>
			<SudokuSquare squareId="7-2"></SudokuSquare>
			<SudokuSquare squareId="7-3"></SudokuSquare>
			<SudokuSquare squareId="8-1"></SudokuSquare>
			<SudokuSquare squareId="8-2"></SudokuSquare>
			<SudokuSquare squareId="8-3"></SudokuSquare>
			<SudokuSquare squareId="9-1"></SudokuSquare>
			<SudokuSquare squareId="9-2"></SudokuSquare>
			<SudokuSquare squareId="9-3"></SudokuSquare>
		</div>                       
                                 
		<div class="sudoku-block">   
			<SudokuSquare squareId="7-4"></SudokuSquare>
			<SudokuSquare squareId="7-5"></SudokuSquare>
			<SudokuSquare squareId="7-6"></SudokuSquare>
			<SudokuSquare squareId="8-4"></SudokuSquare>
			<SudokuSquare squareId="8-5"></SudokuSquare>
			<SudokuSquare squareId="8-6"></SudokuSquare>
			<SudokuSquare squareId="9-4"></SudokuSquare>
			<SudokuSquare squareId="9-5"></SudokuSquare>
			<SudokuSquare squareId="9-6"></SudokuSquare>
		</div>                       
                                 
		<div class="sudoku-block">   
			<SudokuSquare squareId="7-7"></SudokuSquare>
			<SudokuSquare squareId="7-8"></SudokuSquare>
			<SudokuSquare squareId="7-9"></SudokuSquare>
			<SudokuSquare squareId="8-7"></SudokuSquare>
			<SudokuSquare squareId="8-8"></SudokuSquare>
			<SudokuSquare squareId="8-9"></SudokuSquare>
			<SudokuSquare squareId="9-7"></SudokuSquare>
			<SudokuSquare squareId="9-8"></SudokuSquare>
			<SudokuSquare squareId="9-9"></SudokuSquare>
		</div>

  </div>
</template>

<script>
import SudokuSquare from "@/components/SudokuSquare"
import { deepCloneObject, gatherRow, gatherCol, isKeyDown, fetchSudokuData, handleSudokuEvent } from './../lib/utils'

export default {
  name: 'Sudoku',
  components: { SudokuSquare },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App', 
			selected: null,
			editMode: 'pen',
    }
  }, 
	computed: {
		classNames() { return ['sudoku', (this.editMode === 'pencil') ? 'pencil' : '',]; },
  }, 
  sockets:{
    connect: function(){
      console.log('socket connected');
      this.$socket.emit('join', 'Hello World from client');
    },
    "sudoku-event": function(response){
			const { cmd, err, data } = response;
			handleSudokuEvent(this.$socket, cmd, { data }, err);
    },
  },
	mounted() {
		window.Event.$on('sudoku-event', (cmd, opts) => {
			handleSudokuEvent(this.$socket, cmd, opts);
		});
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
	.sudoku {
		width: 600px; 
		height: 600px; 
		margin: 0 auto; 
		border: 1px solid transparent;
		padding: 16px 0;
		vertical-align:top;
		background-color: #cdcdcd;
	}
	.sudoku-block {
		width: 180px; 
		height: 180px; 
		border: 1px solid transparent;
		margin: 6px 3px 0 0;
		display: inline-block;
		vertical-align:top;
		background-color: white;
		padding-top: 7px;
		position: relative;
	}
	.sudoku-block:nth-child(3), 
	.sudoku-block:nth-child(6), 
	.sudoku-block:nth-child(9) {
		vertical-align:bottom;
		margin: 0;
	}
	.sudoku-square {
		width: 50px; 
		height: 50px; 
		border: 1px solid transparent;
		display: inline-block;
		background-color: #efefef;
		position: relative;
	}
	.sudoku-square:nth-child(1), 
	.sudoku-square:nth-child(4), 
	.sudoku-square:nth-child(7) {
		margin: 0;
	}
	.sudoku-square:nth-child(2), 
	.sudoku-square:nth-child(5), 
	.sudoku-square:nth-child(8) {
		margin-left: 3px;
	}
	.sudoku-square:nth-child(3), 
	.sudoku-square:nth-child(6), 
	.sudoku-square:nth-child(9) {
		margin-left: 3px;
	}

	.sudoku-square:nth-child(4), 
	.sudoku-square:nth-child(5), 
	.sudoku-square:nth-child(6) {
		top: 7px; 
	}
	.sudoku-square:nth-child(7), 
	.sudoku-square:nth-child(8), 
	.sudoku-square:nth-child(9) {
		top: 14px; 
	}
	
</style>
