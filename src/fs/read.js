import { readFile } from 'node:fs/promises'
import path from "node:path";
import { fileURLToPath } from "url"

import {checkIsNotExist, getError} from "./utils.js";
import { FILES } from "./constants.js";

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const read = async () => {
	try {
		await checkIsNotExist({ name: path.join(__dirname, FILES.FILE_TO_READ.NAME) })
		const contents = await readFile(path.join(__dirname, FILES.FILE_TO_READ.NAME), { encoding: 'utf8' })
		console.log(contents)
	} catch (e) {
		getError({ e })
	}
};

// await read();