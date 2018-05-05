import _ from 'lodash';

export const gatherRow = (squareId) => {
	const row = squareId.match(/^([^-]+)/)[1];
	const squareIds = _.map(_.range(9), idx => `${row}-${idx+1}`);
	// console.log([`squareId:trace 1`, squareId, row, squareIds]);
	return squareIds;
}

export const gatherCol = (squareId) => {
	const col = squareId.match(/([^-]+)$/)[1];
	const squareIds = _.map(_.range(9), idx => `${idx+1}-${col}`);
	// console.log([`squareId:trace 1`, squareId, row, squareIds]);
	return squareIds;
}

export const deepCloneObject = (obj) => {
	return JSON.parse(JSON.stringify(obj));
}

let keyState = {};

export const isKeyDown = (() => {

    window.addEventListener('keyup', (e) => keyState[e.key] = false);
    window.addEventListener('keydown', (e) => {
			if (_.includes(_.map([1,2,3,4,5,6,7,8,9], item => item.toString()), e.key)) {
				window.Event.$emit("sudoku-event", "record-number", {value: e.key});
			} else if (_.includes(['r','c','i'], e.key)) {
				keyState[e.key] = true
			} else { // if (_.includes(['p',], e.key))
				// console.log(`keydown:p`);
				let action = null;
				switch(e.key) {
					case 'p': action = 'key-pressed'; break;
					case 'l': action = 'fetch-data'; break;
				}

				if (action !== null) {
					window.Event.$emit("sudoku-event", action, {value: e.key});
				}
			}
			// switch(e.key) {
			// 	case 1: 
			// 		window.Event.emit("sudoku-event", "keypress", e.key);
					
			// 	default:
			// 		keyState[e.key] = true
			// }
		});

    return (key) => keyState.hasOwnProperty(key) && keyState[key] || false;
})();

export const keysDown = (() => {
    return () => {
			const keysPressed = _.filter(Object.keys(keyState), (key) => keyState[key] === true);
			return keysPressed;
		}
})();

export const fetchSudokuData = (callback) => {
}

export const handleSudokuEvent = (socket, cmd, opts, err=null) => {
	let squareIds = null;
	
	switch(cmd) {

		case 'key-pressed':
			this.editMode = (this.editMode === 'pen') ? 'pencil' : 'pen';
			console.log([`key-pressed 1`, cmd, opts, this.editMode])
			break;

		case 'fetch-data':
			socket.emit('fetch-data');
			break;

		case 'data-fetched':
			const { data } = opts;
			console.log([`data-fetched`, cmd, opts, data]);
			let sudokuData = JSON.parse(data);
			console.log([`sudokuData`, JSON.stringify(sudokuData)]);
			break;

		case 'record-number':
			window.Event.$emit(`square-event-${this.selected}`, { cmd: 'record-number', opts: {...opts, reqBy: this.selected, editMode: this.editMode} } );
			// console.log([`sudoku-event 1`, cmd, opts, this.selected])
			break;

		case 'square-select':
			this.selected = opts.reqBy;
			window.Event.$emit('square-event', { cmd: 'select', opts } );
			break;

		case 'square-select-row':
			// console.log([`opts:trace 1`, opts]);  
			this.selected = opts.reqBy;
			squareIds = gatherRow(opts.reqBy);
			window.Event.$emit('square-event', { cmd: 'select', opts: {only: squareIds, ...opts} } );
			break;

		case 'square-select-col':
			// console.log([`opts:trace 1`, opts]);  
			this.selected = opts.reqBy;
			squareIds = gatherCol(opts.reqBy);
			window.Event.$emit('square-event', { cmd: 'select', opts: {only: squareIds, ...opts} } );
			break;

		case 'square-select-intersection':
			// console.log([`opts:trace 1`, opts]);  
			this.selected = opts.reqBy;
			squareIds = gatherRow(opts.reqBy);
			const squareIds2 = gatherCol(opts.reqBy);
			window.Event.$emit('square-event', { cmd: 'select', opts: {only: [...squareIds, ...squareIds2], ...opts} } );
			break;
	}
}
	
