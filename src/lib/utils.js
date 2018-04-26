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
    window.addEventListener('keydown', (e) => keyState[e.key] = true);

    return (key) => keyState.hasOwnProperty(key) && keyState[key] || false;
})();

export const keysDown = (() => {
    return () => {
			const keysPressed = _.filter(Object.keys(keyState), (key) => keyState[key] === true);
			return keysPressed;
		}
})();

