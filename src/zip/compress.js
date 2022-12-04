import { createReadStream, createWriteStream } from 'fs';
import { createGzip } from 'zlib';
import { pipeline } from 'stream';
import path from "node:path";

import {FOLDERS} from "../fs/constants.js";

export const compress = async () => {
	const fileReadPath = new URL(path.join(FOLDERS.FILES.NAME, "fileToCompress2.txt"), import.meta.url);
	const fileArchivePath = new URL(path.join(FOLDERS.FILES.NAME, "archive.gz"), import.meta.url);
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