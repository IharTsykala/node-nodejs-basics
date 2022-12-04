import { createReadStream } from 'fs'
import path from "node:path"
import { fileURLToPath } from "url"

import { FILES } from "../fs/constants.js";

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const fileName = FILES.FILE_TO_READ.NAME

const read = async () => {
	const filePath = await path.resolve(__dirname, fileName);
	let text = '';
	createReadStream(filePath, 'utf-8')
		.on('data', chunk => text = text + chunk)
		.on('end', () => process.stdout.write(text))
		.on('error', err => console.error(err.message))
};

// await read()
