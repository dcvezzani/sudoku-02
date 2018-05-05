import child_process from 'child_process';
import { exec } from 'child_process';

export const fetchSudokuData = (callback) => {
	console.log(`fetchSudokuData 1`, )
	child_process.exec(`${__dirname}/fetch-puzzle.sh`, (error, stdout, stderr) => {
		// console.log(`fetchSudokuData 2`, error, stdout, stderr)
		callback(error, stdout);
	});

	// child = exec('./fetch-puzzle.sh',
	// 	function (error, stdout, stderr) {
	// 		// console.log('stdout: ' + stdout);
	// 		// console.log('stderr: ' + stderr);
	// 		// if (error !== null) {
	// 		// 	console.log('exec error: ' + error);
	// 		// }
	// 		callback(error, stdout);
	// 	});
	// child();
}

