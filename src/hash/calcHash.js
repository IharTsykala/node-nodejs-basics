import { readFile } from 'node:fs/promises';

import { fileURLToPath } from 'url';
import path from 'path';
import crypto from "crypto";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const calculateHash = async () => {
	const currentPath = path.join(__dirname, 'files', 'fileToCalculateHashFor.txt')
	
	const buffer = await readFile(currentPath);
	
	const hash = crypto.createHash('SHA256');
	
	const fileHash = hash.update(buffer).digest('hex');
	console.log(fileHash);
};

await calculateHash();
