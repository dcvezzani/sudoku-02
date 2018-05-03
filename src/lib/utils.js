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
			} else if (_.includes(['p',], e.key)) {
				// console.log(`keydown:p`);
				window.Event.$emit("sudoku-event", "key-pressed", {value: e.key});
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

