import fs from 'fs'
import { Transform, pipeline } from 'stream';

import { fileURLToPath } from 'url';
import path from 'path';

//constants
import { FILES, FOLDERS } from "./constants.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

class TransformStream extends Transform {
	constructor(options) {
		super(options);
	}
	
	_transform(chunk, encoding, callback) {
		const reversedChunk = chunk.toString().split('').reverse().join('');
		
		this.push(reversedChunk);
		callback();
	}
}

const transform = async () => {
	const inputFilePath = path.join(__dirname, FOLDERS.FILES, FILES.READ_FILE);
	const outputFilePath = path.join(__dirname, FOLDERS.FILES, FILES.WRITE_FILE);

	const readStream = fs.createReadStream(inputFilePath);
	const writeStream = fs.createWriteStream(outputFilePath);

	const transformStream = new TransformStream();

	pipeline(
		readStream,
		transformStream,
		writeStream,
		(err) => {
			if (err) {
				console.error('Pipeline failed:', err);
				return
			}
			
			console.log('Data was written in file');
		}
	)
	
	readStream.on('error', (err) => {
		console.error('Error by reading fail:', err);
	});
	
	writeStream.on('error', (err) => {
		console.error('Error by writing fail:', err);
	});
};

await transform();
