import { createReadStream, createWriteStream } from 'fs';
import { createGunzip } from "node:zlib";

import { fileURLToPath } from 'url';
import path from 'path';

//constants
import {FOLDERS} from "./constants.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const decompress = async () => {
	const fileReadPath = path.join(__dirname, FOLDERS.FILES.NAME, "archive.gz")
	const fileArchivePath = path.join(__dirname, FOLDERS.FILES.NAME, "fileToCompress.txt")
	
	const readStream = createReadStream(fileReadPath);
	const unZip = createGunzip();
	const writeStream = createWriteStream(fileArchivePath);
	
	readStream.pipe(unZip).pipe(writeStream);
};

await decompress();
