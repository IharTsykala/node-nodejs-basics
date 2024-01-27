import { createReadStream, createWriteStream } from 'fs';
import { createGzip } from 'zlib';
import { pipeline } from 'stream';

import { fileURLToPath } from 'url';
import path from 'path';

//constants
import {FOLDERS} from "./constants.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compress = async () => {
	const fileReadPath = path.join(__dirname, FOLDERS.FILES.NAME, "fileToCompress.txt")
	const fileArchivePath = path.join(__dirname, FOLDERS.FILES.NAME, "archive.gz")

	const gzip = createGzip();
	const readFile = createReadStream(fileReadPath);
	const archiveFile = createWriteStream(fileArchivePath);
	
	pipeline(
		readFile,
		gzip,
		archiveFile,
		(err) => err ? console.error(err) : null
	);
};

await compress();
