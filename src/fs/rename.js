import { access, constants, rename as renamePromises } from 'node:fs/promises';

import { fileURLToPath } from 'url';
import path from 'path';

//constants
import {ERROR, PATH} from "./constants.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const rename = async () => {
	const currentPathSource = path.join(__dirname, PATH.RENAME_FILE_SOURCE)
	const currentPathDestination = path.join(__dirname, PATH.RENAME_FILE_DESTINATION)
	
	try {
		await access(currentPathSource, constants.F_OK);
	} catch (error) {
		throw new Error(ERROR.RENAME_FILE.CONTEXT);
	}
	
	try {
		await access(currentPathDestination, constants.F_OK);
		
		throw new Error(ERROR.RENAME_FILE.CONTEXT);
	} catch (error) {
		if (error.code === 'ENOENT') {
			await renamePromises(currentPathSource, currentPathDestination);
			return
		}
		
		throw new Error(error.message);
	}
};

await rename();
