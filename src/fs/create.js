import { writeFile, access, constants } from 'node:fs/promises';

import { fileURLToPath } from 'url';
import path from 'path';

//constants
import {CONTEXT, ERROR, PATH} from "./constants.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const create = async () => {
	try {
		const currentPath = path.join(__dirname, PATH.CREATE_FILE)
		
		await access(currentPath, constants.F_OK)
		
		throw Error(ERROR.CREATE_FILE.CONTEXT)
	} catch (error) {
		if (error.code === ERROR.CREATE_FILE.CODE) {
			const currentPath = path.join(__dirname, PATH.CREATE_FILE);

			await writeFile(currentPath, CONTEXT.CREATE_FILE);
			return
		}
	
		throw Error(error.message)
	}
};

await create();
