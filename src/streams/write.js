import fs from 'fs'

import { fileURLToPath } from 'url';
import path from 'path';

//constants
import {FILES, FOLDERS} from "./constants.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const write = async () => {
	const readPath = path.join(__dirname, FOLDERS.FILES, FILES.WRITE_FILE)
	
	const writeStream = fs.createWriteStream(readPath, { flags: 'a' });
	
	process.stdin.pipe(writeStream);
	
	writeStream.write('Hello world!');
	writeStream.write('it is test');

	writeStream.on('finish', () => {
		console.log('Data was written in fail');
	});

	writeStream.on('error', (err) => {
		console.error('Error by reading:', err);
	});
	
	writeStream.end()
};

await write();
