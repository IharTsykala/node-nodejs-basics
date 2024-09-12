import fs from 'fs'

import { fileURLToPath } from 'url';
import path from 'path';

//constants
import {FILES, FOLDERS} from "./constants.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const read = async () => {
	const readPath = path.join(__dirname, FOLDERS.FILES, FILES.READ_FILE)
	
	const readStream = fs.createReadStream(readPath);
	
	readStream.on('data', (chunk) => {
		process.stdout.write(chunk);
	});

	readStream.on('error', (err) => {
		console.error('Error reading file:', err);
	});
};

await read();
