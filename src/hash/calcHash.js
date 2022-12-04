import { readFile } from 'node:fs/promises';
import path from "node:path";

import {fileURLToPath} from "url";
import crypto from "crypto";
import { FILES, FOLDERS } from "../fs/constants.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const calculateHash = async () => {
	try {
		const buffer = await readFile(path.join(__dirname, FOLDERS.FILES.NAME, FILES.FILE_TO_CALCULATE_HASH_FOR.NAME));
		
		const hash = crypto.createHash('SHA256');
		
		const fileHash = hash.update(buffer).digest('hex');
		console.log(fileHash);
	} catch (e) {
		console.log(e)
	}
};

// await calculateHash();