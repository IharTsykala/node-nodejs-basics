import { spawn } from 'child_process';

import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const spawnChildProcess = async (args) => {
	const childrenPath = path.join(__dirname, 'files', 'script.js')
	
	const childProcess = spawn('node', [childrenPath, ...args]);
	
	process.stdin.pipe(childProcess.stdin);
	
	childProcess.stdout.pipe(process.stdin)

	childProcess.on('close', (code) => {
		console.log(`Child process exited with code ${code}`);
	});
};

spawnChildProcess([1,2,3]);
