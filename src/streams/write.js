import fs from 'fs'

import { fileURLToPath } from 'url';
import path from 'path';

//constants
import { FILES, FOLDERS } from "./constants.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const write = async () => {
	const readPath = path.join(__dirname, FOLDERS.FILES, FILES.WRITE_FILE)
	
	const writeStream = fs.createWriteStream(readPath, { flags: 'a' });
	
	process.stdin.setEncoding('utf8');
	
	console.log('Enter data to write to the file. Press Ctrl + D to finish.');
	
	process.stdin.on('data', (data) => {
		writeStream.write(data);
	});
	
	process.stdin.on('end', () => {
		console.log('Data input ended.');
		writeStream.end();
	});
	
	writeStream.on('finish', () => {
		console.log('Data was written in file');
	});
	
	writeStream.on('error', (err) => {
		console.error('Error by writing:', err);
	});
};

await write();
